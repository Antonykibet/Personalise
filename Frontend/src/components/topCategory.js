import { Stack, Typography, Box, useMediaQuery, Tab, Tabs, } from "@mui/material"
import ProductCard from "./productCard"
import { useEffect, useState } from "react";
import axios from "axios"

export default function TopCategory(){
    const [products, setProducts] = useState([])
    const [availableThemes, setAvailableThemes] = useState([])
    const [selectedTheme, setSelectedTheme] = useState('one');

  const handleThemeChange = (event, newValue) => {
    setSelectedTheme(newValue);
    (async ()=>{
        const response = await axios.get(`http://localhost:8000/${newValue}`)
        setProducts(response.data)
    })()
  };

    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("http://localhost:8000/products")
            setProducts(response.data)
        })()
        setAvailableThemes([{label:'Memes'}, {label:'Movies'}, {label:'Spotify'}, {label:'Quotes'},{label:'Football'}, {label:'F1'}])
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
                    >
                        {availableThemes.map((theme)=>{
                            return <Tab sx={{border:'solid',borderRadius:8,borderWidth:2,mr:1,}} value={theme.label} label={theme.label} />
                        })}
                </Tabs>
            </Box>
            <Box display='flex' paddingBottom={2}  width='100vw' alignItems='center' justifyContent={isSmallScreen || isTablet?'space-evenly':'start'} flexWrap='wrap'>
                {products.map((product)=><ProductCard productDetails={product} link='/testPage'/>)}
            </Box>
        </Stack>
    )
}