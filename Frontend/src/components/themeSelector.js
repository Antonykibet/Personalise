import { Autocomplete, Box, InputAdornment, Tab, Tabs, TextField } from "@mui/material"
import { useNavigate } from 'react-router-dom'; 
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useEffect, useState } from "react"

export default function ThemeSelector({setResults,results,isGiftSection,disableSearch}){
    const navigate = useNavigate();
    const [availableThemes, setAvailableThemes] = useState([])
    const [selectedTheme, setSelectedTheme] = useState('');

  const handleThemeChange = (event,newValue) => {
    (async ()=>{
        const response = await axios.get(`http://localhost:8000/products?theme__name=${newValue}`)
        setResults(response.data)
    })()
    setSelectedTheme(newValue)
  };

  const handleOptionSelect = (event, selectedOption) => {
    // Get the product object based on the selected name
    const selectedProduct = results.find(product => product.name === selectedOption);

    // Redirect to the product page with the product ID
    navigate(`/productPage/${selectedProduct.id}`);
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
                  options={results?results.map(product=>product.name):[]}
                  sx={{"& fieldset": { border: 'none' },width:'95%'}}
                  renderInput={params => {
                    return (
                      <TextField
                        {...params}
                        placeholder={`Search ${selectedTheme??''}`}
                        InputProps={{
                          ...params.InputProps,
                          sx:{border:{border:'solid',height:'40px',  borderRadius:16, borderWidth:'2px'}},
                          startAdornment: (
                            <>
                              <InputAdornment  position='start'>
                                <SearchIcon sx={{color:'#e45a00'}} />
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