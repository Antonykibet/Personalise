import { Paper, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getShit } from "../../utils";

const itemsStyle= { color:'inherit',textDecoration:'none',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start',m:1,p:1}
const itemImageStyle = {width:'74px',marginRight:'8px',border:'solid transparent',borderRadius:'6px'}

export default function AvailableItems(){
    const [availableItems,setAvailableItems] = useState([])
    useEffect(()=>{
        getShit('availableItem')
        .then(data=>setAvailableItems(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <>
            <Box sx={{my:'32px',width:{xs:'100%',md:'90%'},display:'flex',flexWrap:'wrap',justifyContent:'space-between', alignItems:'start'}} >
                {availableItems.map((item)=>{
                    return(
                        <Paper sx={{width:{md:'20%',xs:'45%'},m:1,display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Link style={itemsStyle} to={`/availableItem/${item.id}`} target="_top">
                                <img style={itemImageStyle} alt={item.name} src={item.thumbnail_image_url} />
                                <Typography variant='p' sx={{fontWeight:'bold',color:'#383838'}}>{item.name}</Typography>
                            </Link>
                        </Paper>
                    )
                })}
            </Box>
        </>
    )
}