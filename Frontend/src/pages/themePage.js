import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShit } from "../utils";

export default function TemplatePage(){
    const {theme} = useParams()
    const [templates, setTemplates] = useState([])
    useEffect(()=>{
        const uri =`products?theme__name=${theme}`
        getShit(uri)
        .then((data)=>{
            setTemplates(data)
        })
        .catch((err)=>console.log(err))
    },[])
    return (
        <Stack m={3}>
                <Typography variant="h4" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{theme}</Typography> 
                <Box sx={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',mt:2}}>
                    {templates.map((template)=><ProductCard productDetails={template}/>)}
                </Box>
        </Stack>
    )
}