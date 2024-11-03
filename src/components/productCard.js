import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery, CardHeader, IconButton } from '@mui/material';
import logo from "../logo512.png"
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductCard({link}) {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(link)
  }
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 820px)');
  return (
    <Card variant='plain' onClick={handleClick} sx={{position: 'relative'}}>
      <CardHeader 
        sx={{position: 'absolute', top: 0,right:0}}
        action={<IconButton>
            <FavoriteBorderIcon/>
          </IconButton>}/>
      <CardMedia
        sx={{width:isSmallScreen?'40vw':'20vw'}}
        component="img"
        image={logo}
        alt="Paella dish"
      />
      <Stack mx={1} >
        <Typography variant='p' sx={{fontWeight:700,fontSize:'14px',fontFamily:'Inter'}}>Hoodie</Typography>
        <Typography variant='p' sx={{fontWeight:300,fontSize:'12px',fontFamily:'Inter'}}>Some random shii</Typography>
        <Typography variant='p' sx={{color:'#004b24',fontSize:'16px',fontWeight:700,fontFamily:'Inter',}}>KSH 1200</Typography>
      </Stack>
    </Card>
  );
}
