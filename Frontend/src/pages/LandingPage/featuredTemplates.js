import { Stack, Box, useMediaQuery, Tab, Tabs, } from "@mui/material"
import ProductCard from "../../components/productCard"
import ThemeSelector from "../../components/themeSelector";
import { useState } from "react";

export default function FeaturedTemplates({isGiftSection}){
    const [products, setProducts] = useState([])
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');

    return(
        <Stack  spacing={1} alignItems='start'>
            <ThemeSelector setResults={setProducts} results={products} isGiftSection={isGiftSection} disableSearch={true}/>
            <Box display='flex'  width='100%' alignItems='center' justifyContent={{xs:'space-evenly',md:'start'}} flexWrap='wrap'>
                {products.map((product)=><ProductCard productDetails={product} />)}
            </Box>
        </Stack>
    )
}