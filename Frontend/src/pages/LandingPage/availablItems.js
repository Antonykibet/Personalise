import { Paper, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getShit } from "../../utils";

const itemsStyle= {width:'40%', display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start',m:1,p:1}
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
            <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}} >
                {availableItems.map((item)=>{
                    return(<Paper sx={itemsStyle}>
                                <Link to={`/availableItem/${item.id}`} target="_top">
                                    <img style={itemImageStyle} alt={item.name} src={item.thumbnail_image} />
                                    <Typography variant='h6' sx={{fontSize:'16px',fontWeight:'bold',color:'#383838'}}>{item.name}</Typography>
                                </Link>
                            </Paper>
                    )
                })}
                
            </Box>
        </>
    )
}