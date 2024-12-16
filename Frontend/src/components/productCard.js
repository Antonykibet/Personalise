import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery, CardHeader, IconButton } from '@mui/material';
import stanleySVG from "../stanleyCup.svg"
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductCard({link, productDetails}) {
  const svgWrapperRef = React.useRef()
  React.useEffect(()=>{
    
    svgWrapperRef.current.style.height = '100px'
    svgWrapperRef.current.style.width = '100px'
    svgWrapperRef.current.innerHTML = productDetails.canvasSVG
  },[productDetails.canvasSVG])
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
      {/* <CardMedia
        sx={{width:isSmallScreen?'40vw':'20vw'}}
        component="img"
        src={`data:image/svg+xml;utf8,${productDetails.canvasSVG}`}
        alt="Paella dish"
      />  */}
      <div style={{width:isSmallScreen?'40vw':'20vw',border:'solid'}} ref={svgWrapperRef}></div>
      <Stack mx={1} >
        <Typography variant='p' sx={{fontWeight:700,fontSize:'14px',fontFamily:'Inter'}}>{productDetails.names}</Typography>
        <Typography variant='p' sx={{fontWeight:300,fontSize:'12px',fontFamily:'Inter'}}>{productDetails.description}</Typography>
        <Typography variant='p' sx={{color:'#004b24',fontSize:'16px',fontWeight:700,fontFamily:'Inter',}}>KSH {productDetails.price}</Typography>
      </Stack>
    </Card>
  );
}
