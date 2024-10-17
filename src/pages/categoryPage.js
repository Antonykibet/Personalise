import { Typography, Box,} from "@mui/material";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";

export default function CategoryPage(){
    const {category} = useParams()
    return(
        <>
            <Typography fontSize='46px' variant="h1">{category}</Typography> 
            <Box sx={{mx:6,display:'flex',justifyContent:'center',flexWrap:'wrap','& > *': {  margin: 1,}}}>
                {[...Array(20)].map(()=><ProductCard/>)}
            </Box>
        </>
    )
}