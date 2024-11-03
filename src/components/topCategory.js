import { Stack, Typography, Box, useMediaQuery } from "@mui/material"
import ProductCard from "./productCard"

export default function TopCategory({title}){
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    return(
        <Stack  spacing={1} alignItems='start'>
            <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{title}</Typography>
            <Box display='flex' paddingBottom={2}  width='100vw' alignItems='center' justifyContent={isSmallScreen || isTablet?'space-evenly':'start'} flexWrap='wrap'>
                <ProductCard link='/testPage'/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Box>
        </Stack>
    )
}