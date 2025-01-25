import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery, CardHeader, IconButton, Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { XMLSerializer } from 'xmldom'; 
import { Link } from 'react-router-dom';

export default function ProductCard({link, productDetails}) {
  const svgWrapperRef = React.useRef('')
  React.useEffect(()=>{
    if (productDetails.canvasSVG) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(productDetails.canvasSVG, 'image/svg+xml');
      // Set desired dimensions
      const desiredWidth = '40vw';
      const desiredHeight = 200;

      // Set width and height attributes on the <svg> element
      const svgElement = doc.documentElement;

      svgElement.setAttribute('width', desiredWidth);
      svgElement.setAttribute('height', desiredHeight);
      
      // Serialize the modified document back to an SVG string
      const serializer = new XMLSerializer();
      const modifiedSvgString = serializer.serializeToString(doc);
      
      //svgWrapperRef.current.innerHTML = ''
    }
  },[productDetails.canvasSVG])



  return (
    <Card variant='plain' sx={{position: 'relative',width:{xs:'40vw'},border:'solid', borderColor:'#727272', borderRadius:2,mt:2}}>
      <CardHeader 
        sx={{position: 'absolute', top: 0,right:0}}
        action={<IconButton>
            <FavoriteBorderIcon/>
          </IconButton>}/>
      <Link to={`/productPage/${productDetails.id}`} target="_top">
      {/* <div ref={svgWrapperRef}></div> */}
      <img style={{width:'100%',height:'auto'}} src={productDetails.canvasPNG} alt={productDetails.name}/>
      <Stack mx={0.5} >
        <Typography variant='p' sx={{fontWeight:700,fontSize:'16px',fontFamily:'Inter'}}>{productDetails.name}</Typography>
        <Typography noWrap variant='p' sx={{fontWeight:300,fontSize:'12px',fontFamily:'Inter'}}>{productDetails.description}</Typography>
        <Typography variant='p' sx={{color:'#004b24',fontSize:'14px',fontWeight:700,fontFamily:'Inter',}}>KSH {productDetails.price}</Typography>
        <Button disableElevation variant='contained' sx={{my:1,fontFamily:'poppins',backgroundColor:'#EE7A13'}}>Personalise</Button>
      </Stack>
      </Link>
    </Card>
  );
}
