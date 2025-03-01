import { Paper, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getShit } from "../../utils";

const itemsStyle= {width:'45%', display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start',m:1,p:1}
const itemImageStyle = {width:'54px',marginRight:'8px',border:'solid transparent',borderRadius:'6px'}

export default function AvailableItems(){
    const [availableItems,setAvailableItems] = useState([])
    useEffect(()=>{
        getShit('availableItem')
        .then(data=>setAvailableItems(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <>
            <Box sx={{my:'32px',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}} >
                {availableItems.map((item)=>{
                    return(
                        <Link style={itemsStyle} to={`/availableItem/${item.id}`} target="_top">
                            <Paper sx={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <img style={itemImageStyle} alt={item.name} src={item.thumbnail_image_url} />
                                    <Typography variant='p' sx={{fontWeight:'bold',color:'#383838'}}>{item.name}</Typography>
                            </Paper>
                        </Link>
                    )
                })}
                
                
            </Box>
        </>
    )
}