import { Stack, Typography } from "@mui/material"
import ProductCard from "./productCard"

export default function TopCategory({title}){
    return(
        <Stack direction='column' spacing={1} alignItems='start'>
            <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{title}</Typography>
            <Stack paddingBottom={2} direction='row' spacing={2} width='100vw' overflow='auto' >
                <ProductCard link='/testPage'/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Stack>
        </Stack>
    )
}