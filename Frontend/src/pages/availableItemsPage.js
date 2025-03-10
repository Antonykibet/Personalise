import { Typography, Box, Stack,} from "@mui/material";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShit } from "../utils";

export default function AvailableItemsPage(){
    const {item} = useParams()
    const [availableItems, setAvailableItems] = useState([])
    useEffect(()=>{
        console.log(item)
        const uri =`products?base_product__name=${item}`
        getShit(uri)
        .then((data)=>{
            setAvailableItems(data)
        })
        .catch((err)=>console.log(err))
    },[])
    return (
        <Stack m={3}>
            <Typography variant="h4" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{item}</Typography> 
            <Box sx={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',mt:2}}>
                {availableItems.map((item)=><ProductCard productDetails={item}/>)}
            </Box>
        </Stack>
    )
}