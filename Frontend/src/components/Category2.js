import { Stack, Typography} from "@mui/material"
import ProductCard from "./productCard"
export default function Category2({title}){
    return(
        <Stack direction='column' spacing={2} alignItems='start'>
            <Typography>{title}</Typography>
            <Stack p={2} direction='row' spacing={2} width='100vw' overflow='auto' >
                <ProductCard/>
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