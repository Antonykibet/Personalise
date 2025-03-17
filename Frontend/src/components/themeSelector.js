import { Autocomplete, Box, InputAdornment, Tab, Tabs, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from "axios";
import { useEffect, useState } from "react"
import { getShit } from "../utils";

export default function ThemeSelector({productDetail,selectedTheme,setSelectedTheme,renderSearchResults,setRenderSearchResults,setSearchResult,searchResult,setResults,isGiftSection,disableSearch,searchURI}){
    const [availableThemes, setAvailableThemes] = useState([])
    const isTemplateEditBox = searchURI==='products?'?true:false
    const handleOptionSelect =  async(event, selectedOption) => {
      const resp = isTemplateEditBox?await queryTemplate(selectedOption): await queryImageAPI(selectedOption)
      setSearchResult(resp)
      setRenderSearchResults(true)
    };
    const getResponseFromDB = async(paramValue)=>{
      const uri = searchURI?`${searchURI}theme__name=${paramValue}`: `products?theme__name=${paramValue}`
      const response = await getShit(uri)
      return response
    }
    const generateSpotifyAccessToken = async()=>{
      const body = {
        grant_type:'client_credentials',
        client_id:process.env.REACT_APP_CLIENT_ID,
        client_secret:process.env.REACT_APP_CLIENT_SECRET,
      }
      const headers = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      try {
        const resp = await axios.post('https://accounts.spotify.com/api/token',body,headers)
        return resp.data.access_token
      } catch (error) {
        console.log(`Error getting spotify access token:${error}`)
      }
      
    }
    const formatSpotifySearchResponse = (resp)=>{
      const formatedItems = []
      const items=resp.albums.items
      items.forEach((item)=>{
        formatedItems.push({
          name:item.name,
          stock_image_url:item.images[0].url
        })
      })
      return formatedItems
    }
    const formatMovieSearchResponse = (resp)=>{
      const formatedItems = []
      const items=resp.results
      items.forEach((item)=>{
        formatedItems.push(
          {
            //The Tv show payload is a lil bit different from the films, it doesnt have the title attribute.
            name:selectedTheme==='Film'?item.title:item.name,
            stock_image_url:`https://image.tmdb.org/t/p/w500${item.poster_path}`
          }
        )
      })
      return formatedItems
    }
    const querySpotifyAPI = async(uri)=>{
      try {
        const accessToken=await generateSpotifyAccessToken()
        const headers = {
          headers: {
            'Authorization':'Bearer '+ accessToken
          }
        }
        const resp = await axios.get(uri,headers)
        const formatedResults = formatSpotifySearchResponse(resp.data)
        return formatedResults
      } catch (error) {
        console.log(`Error querying spotify: ${error}`)
        return []
      }
    }
    const queryMovieAPI = async(uri)=>{
      try {
        const accessToken=process.env.REACT_APP_MOVIE_ACCESS_TOKEN
        const headers = {
          headers: {
            'Authorization':'Bearer '+ accessToken
          }
        }
        const resp = await axios.get(uri,headers)
        const formatedResults = formatMovieSearchResponse(resp.data)
        return formatedResults
      } catch (error) {
        console.log(`Error querying movie: ${error}`)
        return []
      }
    }
    const queryImageAPI = async(searchInput)=>{
      let uri
      if(selectedTheme==='Spotify'){
        uri = `https://api.spotify.com/v1/search?q=${searchInput}&type=album`
        return await querySpotifyAPI(uri)
      }
      if(selectedTheme==='Film'){
        uri= `https://api.themoviedb.org/3/search/movie?query=${searchInput}`
        return await queryMovieAPI(uri)
      }
      if(selectedTheme==='TV Show'){
        uri= `https://api.themoviedb.org/3/search/tv?query=${searchInput}`
        return await queryMovieAPI(uri)
      }
      uri=`${searchURI}search=${searchInput}&theme__name=${selectedTheme}`
      return await getShit(uri)
    }
    const queryTemplate = async(input)=>{
      try {
        console.log(productDetail);
        const uri=`${searchURI}search=${input}&theme__name=${selectedTheme}&base_product__name=${productDetail.base_product.name}`
        const resp = await getShit(uri)
        return resp
      } catch (error) {
        console.log(`Error querying for templates: ${error}`)
        return []
      }
    }
    const handleSearchInput = async(event)=>{
      const searchInput = event.target.value
      const resp = isTemplateEditBox? await queryTemplate(searchInput): await queryImageAPI(searchInput)
      setSearchResult(resp)
      setRenderSearchResults(true)
    }

    const handleThemeChange = (event,newValue) => {
      (async ()=>{
        const response = await getResponseFromDB(newValue)
        setResults(response)
      })()
      setSelectedTheme(newValue)
    };

    const renderTabs = async()=>{
      const themeType = isGiftSection?'GIFT THEME':'RANDOM THEME'
      const themes = await getShit(`theme?type=${themeType}`)
      setAvailableThemes(themes)
      return themes
    }

    const renderDefaulProducts = async()=>{
      try {
        const availableThemes = await renderTabs()
        const url = `products?theme__name=${availableThemes[0].name}`
        const products = await getShit(url)
        setSelectedTheme(availableThemes[0].name)
        setResults(products)
      } catch (error) {
        console.log(`Error rendering startup products: ${error}`)
      }
    }
    const renderDefaultTemplates = async()=>{
      try {
        await renderTabs()
        const theme = productDetail.theme.name
        const base_product = productDetail.base_product.name
        const url = searchURI?`${searchURI}theme__name=${theme}&base_product__name=${base_product}`: `products?theme__name=${availableThemes[0].name}`
        const templates = await getShit(url)
        setSelectedTheme(theme)
        setResults(templates)
      } catch (error) {
        setResults([])
        console.log(`Error rendering default templates: ${error}`)
      }
    }
    const renderDefaultStockImages = async()=>{
      try {
        await renderTabs()
        const theme = productDetail.theme.name
        const url = `${searchURI}theme__name=${theme}`
        const images = await getShit(url)
        setSelectedTheme(theme)
        setResults(images)
      } catch (error) {
        setResults([])
        console.log(`Error rendering default images: ${error}`)
      }
    }
  
    
    useEffect(()=>{
        (async ()=>{
          searchURI==='products?'?await renderDefaultTemplates():searchURI==='stockImage?'? await renderDefaultStockImages():await renderDefaulProducts()
        })()
    },[])
    return(
        <>
            <Box sx={{ width: '100%',display:'flex', alignItems:'center', flexDirection:'column' }}>
                <Tabs
                    color
                    value={selectedTheme}
                    onChange={handleThemeChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="Themes"
                    indicatorColor="transparent"
                    sx={{ minHeight: "30px", height: "30px",width:'100%', mb:1,}}
                    >
                        {availableThemes.map((theme)=>{
                            return <Tab sx={{border:'solid',borderRadius:8,borderWidth:2,mr:1,minHeight: "30px", height: "30px" }} value={theme.name} label={theme.name} />
                        })}
                </Tabs>
                {disableSearch?'':<Autocomplete
                  id="tags-standard"
                  onChange={handleOptionSelect}
                  options={searchResult?searchResult.map(product=>product.name):[]}
                  sx={{"& fieldset": { border: 'none' },width:'95%'}}
                  renderInput={params => {
                    return (
                      <TextField
                        {...params}
                        onChange={handleSearchInput}
                        placeholder={`Search ${selectedTheme??''}`}
                        InputProps={{
                          ...params.InputProps,
                          sx:{border:{border:'solid',height:'40px',  borderRadius:16, borderWidth:'2px',width:'100%',pr:'10px'}},
                          endAdornment: (
                            <>
                              
                            </>
                          ),
                          startAdornment: (
                            <>
                              <InputAdornment  position='end'>
                                {renderSearchResults?<KeyboardBackspaceIcon onClick={()=>{setRenderSearchResults(false)}} sx={{color:'#e45a00'}}/>:<SearchIcon onClick={()=>{setRenderSearchResults(true)}} sx={{color:'#e45a00'}} />} 
                              </InputAdornment>
                            </>
                          )
                        }}
                    />
                  );
                }}
              />}
            </Box>
        </>
    )
}