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
            <ThemeSelector setProducts={setProducts} products={products} isGiftSection={isGiftSection} />
            <Box display='flex' paddingBottom={2}  width='100vw' alignItems='center' justifyContent={isSmallScreen || isTablet?'space-evenly':'start'} flexWrap='wrap'>
                {products.map((product)=><ProductCard productDetails={product} link='/testPage'/>)}
            </Box>
        </Stack>
    )
}