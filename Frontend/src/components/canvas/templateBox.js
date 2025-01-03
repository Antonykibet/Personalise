import { Box, CardMedia } from "@mui/material";



export default function TemplateBox(){
    return (
        <Box  sx={{height:'100%',display:'flex',justifyContent:'space-around',flexWrap:'wrap',overflow:'auto', backgroundColor:'#F6F5F5'}}>
        {
            [...Array(10)].map(()=>(
                <CardMedia sx={{width:{xs:'40%',md:'11vw'},pt:2 }} component="img" alt="Stanley cup."  />
                
            ))
        }
        </Box>
    )
}