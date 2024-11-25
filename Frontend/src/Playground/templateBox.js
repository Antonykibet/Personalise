import { Box, CardMedia } from "@mui/material";

import stanleyCup from '../stanleyCup-removebg-preview.png'

export default function TemplateBox(){
    return (
        <Box  sx={{height:'80%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',overflow:'auto', backgroundColor:'white'}}>
        {
            [...Array(10)].map(()=>(
                <CardMedia sx={{width:{xs:'40%',md:'11vw'},pt:2 }} component="img" alt="Stanley cup." image={stanleyCup} />
                
            ))
        }
        </Box>
    )
}