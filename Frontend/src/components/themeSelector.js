import { Autocomplete, Box, InputAdornment, Tab, Tabs, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from "axios";
import { useEffect, useState } from "react"
import { getShit } from "../utils";

export default function ThemeSelector({renderSearchResults,setRenderSearchResults,setSearchResult,searchResult,setResults,isGiftSection,disableSearch,searchURL}){
    const [availableThemes, setAvailableThemes] = useState([])
    const [selectedTheme, setSelectedTheme] = useState('');
    
    const handleOptionSelect =  async(event, selectedOption) => {
      const uri = getSearchURI(selectedOption)
      const resp = await querySearchAPI(uri)
      setSearchResult(resp)
      setRenderSearchResults(true)
    };
    const getResponseFromDB = async(paramValue)=>{
      const uri = searchURL?`${searchURL}theme__name=${paramValue}`: `products?theme__name=${paramValue}`
      const response = await getShit(uri)
      return response
    }
    const generateSpotifyAccessToken = async()=>{
      const body = {
        grant_type:'client_credentials',
        client_id:'9b09ba47fc574109a39cc383016cf576',
        client_secret:'46926e5baa784eb59806d2c2cd7af5fa'
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
    const querySpotifySearchAPI = async(uri)=>{
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
        console.log(`Error querying spotify search${error}`)
        return []
      }
    }
    const getSearchURI = (searchInput)=>{
      if (selectedTheme === 'Spotify'){
        return `https://api.spotify.com/v1/search?q=${searchInput}&type=album`
      }
      return `${searchURL}search=${searchInput}`
    }
    const querySearchAPI = async(uri)=>{
      if(selectedTheme==='Spotify'){
        return await querySpotifySearchAPI(uri)
      }
      return await getShit(uri)
    }
    const handleSearchInput = async(event)=>{
      //Search queries all themes
      const searchInput = event.target.value
      const uri = getSearchURI(searchInput)
      const resp = await querySearchAPI(uri)
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

  
    
    useEffect(()=>{
        (async ()=>{
            const themeType = isGiftSection?'GIFT THEME':'RANDOM THEME'
            const themes = await await getShit(`theme?type=${themeType}`)
            setAvailableThemes(themes)
            const url = searchURL?`${searchURL}theme__name=${themes[0].name}`: `products?theme__name=${themes[0].name}`
            //fetch products of the first theme displayed in the tab.
            const products = await getShit(url)
            setSelectedTheme(themes[0].name)

            setResults(products)
            
        })()
        
        // setAvailableThemes([{label:'Memes'}, {label:'Movies'}, {label:'Spotify'}, {label:'Quotes'},{label:'Football'}, {label:'F1'}])
    },[])
    return(
        <>
            <Box sx={{ width: '100%',display:'flex', alignItems:'center', flexDirection:'column' }}>
                <Tabs
                    color
                    value={selectedTheme}
                    onChange={handleThemeChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Themes"
                    indicatorColor="transparent"
                    textColor="red"
                    sx={{ minHeight: "30px", height: "30px", mb:1 }}
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