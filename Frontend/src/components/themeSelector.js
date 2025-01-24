import { Autocomplete, Box, InputAdornment, Tab, Tabs, TextField } from "@mui/material"
import { useNavigate } from 'react-router-dom'; 
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useEffect, useState } from "react"

export default function ThemeSelector({setProducts,products,isGiftSection}){
    const navigate = useNavigate();
    const [availableThemes, setAvailableThemes] = useState([])
    const [selectedTheme, setSelectedTheme] = useState('');

  const handleThemeChange = (event,newValue) => {
    (async ()=>{
        const response = await axios.get(`http://localhost:8000/products?themeName=${newValue}`)
        setProducts(response.data)
    })()
    setSelectedTheme(newValue)
  };

  const handleOptionSelect = (event, selectedOption) => {
    // Get the product object based on the selected name
    const selectedProduct = products.find(product => product.name === selectedOption);

    // Redirect to the product page with the product ID
    navigate(`/productPage/${selectedProduct.id}`);
  };
    
    useEffect(()=>{
        (async ()=>{
            let themeType = isGiftSection?'GIFT THEME':'RANDOM THEME'
            const themes = await axios.get(`http://localhost:8000/theme?themeType=${themeType}`)
            setAvailableThemes(themes.data)
            
            //fetch products of the first theme displayed in the tab.
            const products = await axios.get(`http://localhost:8000/products?themeName=${themes.data[0].name}`)
            setSelectedTheme(themes.data[0].name)

            setProducts(products.data)
            
        })()
        
        // setAvailableThemes([{label:'Memes'}, {label:'Movies'}, {label:'Spotify'}, {label:'Quotes'},{label:'Football'}, {label:'F1'}])
    },[])
    return(
        <>
            <Box sx={{ width: '100%',display:'flex', alignItems:'start', flexDirection:'column' }}>
                <Tabs
                    color
                    value={availableThemes.length > 0 ? availableThemes[0].name : ''}
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
                <Autocomplete
                id="tags-standard"
                onChange={handleOptionSelect}
                options={products?products.map(product=>product.name):[]}
                sx={{"& fieldset": { border: 'none' },width:'50%'}}
                renderInput={params => {
                  return (
                    <TextField
                      {...params}
                      placeholder={`Search ${selectedTheme??''}`}
                      InputProps={{
                        ...params.InputProps,
                        sx:{border:{border:'solid',height:'40px',  borderRadius:16, borderWidth:'2px'}},
                        endAdornment: (
                          <>
                            <InputAdornment  position='end'>
                              <SearchIcon sx={{color:'#e45a00'}} />
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                          </>
                        )
                      }}
                    />
                  );
                }}
              />
            </Box>
        </>
    )
}