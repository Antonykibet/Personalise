import { Autocomplete, Box, InputAdornment, Tab, Tabs, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from "axios";
import { useEffect, useState } from "react"
import { getShit } from "../utils";

export default function ThemeSelector({renderSearchResults,setRenderSearchResults,setSearchResult,searchResult,setResults,isGiftSection,disableSearch,handleOptionSelect,searchURL}){
    const [availableThemes, setAvailableThemes] = useState([])
    const [selectedTheme, setSelectedTheme] = useState('');
    

    const handleSearchInput = (event)=>{
      getShit(`${searchURL}search=${event.target.value}`)
      .then(data=>{
        setSearchResult(data)
      })
      .catch(err=>{
        console.log(`Error handling search: ${err}`)
      })
    }

    const handleThemeChange = (event,newValue) => {
      (async ()=>{
          const response = await axios.get(`http://localhost:8000/products?theme__name=${newValue}`)
          setResults(response.data)
      })()
      setSelectedTheme(newValue)
    };

  
    
    useEffect(()=>{
        (async ()=>{
            let themeType = isGiftSection?'GIFT THEME':'RANDOM THEME'
            const themes = await axios.get(`http://localhost:8000/theme?type=${themeType}`)
            setAvailableThemes(themes.data)
            
            //fetch products of the first theme displayed in the tab.
            const products = await axios.get(`http://localhost:8000/products?theme__name=${themes.data[0].name}`)
            setSelectedTheme(themes.data[0].name)

            setResults(products.data)
            
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
                          sx:{border:{border:'solid',height:'40px',  borderRadius:16, borderWidth:'2px'}},
                          startAdornment: (
                            <>
                              <InputAdornment  position='start'>
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