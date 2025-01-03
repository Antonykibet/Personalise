import { Stack, Box, useMediaQuery, Tab, Tabs, } from "@mui/material"
import ProductCard from "../../components/productCard"
import { useEffect, useState } from "react";
import axios from "axios"

export default function FeaturedTemplates({isGiftSection}){
    const [products, setProducts] = useState([])
    const [availableThemes, setAvailableThemes] = useState([])
    const [selectedTheme, setSelectedTheme] = useState('one');

  const handleThemeChange = (event,newValue) => {
    (async ()=>{
        const response = await axios.get(`http://localhost:8000/products?themeName=${newValue}`)
        console.log(response.data)
        setProducts(response.data)
    })()
  };

    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    
    useEffect(()=>{
        (async ()=>{
            let productTheme= isGiftSection?'GIFT THEME':'RANDOM THEME'
            let themeType = isGiftSection?'GIFT THEME':'RANDOM THEME'
            const themes = await axios.get(`http://localhost:8000/theme?themeType=${themeType}`)
            setAvailableThemes(themes.data)
            //fetch products of the first theme displayed in the tab.
            const products = await axios.get(`http://localhost:8000/products?themeName=${themes.data[0].name}`)
            setProducts(products.data)
            
        })()
        
        // setAvailableThemes([{label:'Memes'}, {label:'Movies'}, {label:'Spotify'}, {label:'Quotes'},{label:'Football'}, {label:'F1'}])
    },[])
    return(
        <Stack  spacing={1} alignItems='start'>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    color
                    value={selectedTheme}
                    onChange={handleThemeChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Themes"
                    indicatorColor="transparent"
                    textColor="red"
                    sx={{ minHeight: "30px", height: "30px" }}
                    >
                        {availableThemes.map((theme)=>{
                            return <Tab sx={{border:'solid',borderRadius:8,borderWidth:2,mr:1,minHeight: "30px", height: "30px" }} value={theme.name} label={theme.name} />
                        })}
                </Tabs>
            </Box>
            <Box display='flex' paddingBottom={2}  width='100vw' alignItems='center' justifyContent={isSmallScreen || isTablet?'space-evenly':'start'} flexWrap='wrap'>
                {products.map((product)=><ProductCard productDetails={product} link='/testPage'/>)}
            </Box>
        </Stack>
    )
}