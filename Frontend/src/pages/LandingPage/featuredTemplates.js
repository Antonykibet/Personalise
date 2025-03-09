import { Stack, Box, IconButton, Tooltip, } from "@mui/material"
import ProductCard from "../../components/productCard"
import ThemeSelector from "../../components/themeSelector";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

export default function FeaturedTemplates({isGiftSection}){
    const [products, setProducts] = useState([])

    return(
        <Stack sx={{width:{xs:'100%',md:'95%'}}} width='100%' spacing={1} alignItems='start'>
            <ThemeSelector setResults={setProducts} results={products} isGiftSection={isGiftSection} disableSearch={true}/>
            <Box sx={{display:"flex",width:'100%',alignItems:'center',justifyContent:'start',overflowX:'scroll'}} >
                {products.map((product)=><ProductCard productDetails={product} />)}
                {products.length>=5?<Tooltip title="more" placement="bottom"><IconButton><MoreVertIcon/></IconButton></Tooltip> :''}
            </Box>
        </Stack>
    )
}