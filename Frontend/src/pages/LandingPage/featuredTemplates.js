import { Stack, Box, IconButton, Tooltip, Typography, } from "@mui/material"
import ProductCard from "../../components/productCard"
import ThemeSelector from "../../components/themeSelector";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

export default function FeaturedTemplates({isGiftSection}){
    const [products, setProducts] = useState([])
    const [selectedTheme,setSelectedTheme] = useState('')
    return(
        <Stack sx={{width:{xs:'100%',md:'90%'},mt:1}} width='100%' spacing={1} alignItems='start'>
            <ThemeSelector selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} setResults={setProducts} results={products} isGiftSection={isGiftSection} disableSearch={true}/>
            <Box sx={{display:"flex",width:'100%',alignItems:'center',justifyContent:'start',overflowX:'scroll'}} >
                {products.map((product)=><ProductCard productDetails={product} />)}
                {products.length>=5?
                <Tooltip title="more" placement="bottom">
                    <IconButton href={`/template/${selectedTheme}`}>
                        <MoreVertIcon/>
                    </IconButton>
                </Tooltip> :''}
            </Box>
        </Stack>
    )
}