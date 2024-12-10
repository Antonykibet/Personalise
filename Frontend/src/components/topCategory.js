import { Stack, Typography, Box, useMediaQuery } from "@mui/material"
import ProductCard from "./productCard"
import { useEffect, useState } from "react";
import axios from "axios"

export default function TopCategory({title}){
    const [products, setProducts] = useState([]) 

    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("http://localhost:8000/products")
            setProducts(response.data)
        })()
    },[])
    return(
        <Stack  spacing={1} alignItems='start'>
            <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{title}</Typography>
            <Box display='flex' paddingBottom={2}  width='100vw' alignItems='center' justifyContent={isSmallScreen || isTablet?'space-evenly':'start'} flexWrap='wrap'>
                {products.map((product)=><ProductCard productDetails={product} link='/testPage'/>)}
            </Box>
        </Stack>
    )
}