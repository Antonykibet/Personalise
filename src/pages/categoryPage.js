import { Typography, Box, Stack,} from "@mui/material";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";

export default function CategoryPage(){
    const {category} = useParams()
    return(
        <>
            <Stack m={3}>
                <Typography variant="h4" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{category}</Typography> 
                <Box sx={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',mt:2}}>
                    {[...Array(20)].map(()=><ProductCard/>)}
                </Box>
            </Stack>
            
        </>
    )
}