import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import logo from "../logo512.png"
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({link}) {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(link)
  }
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <Card onClick={handleClick} sx={{minWidth: isSmallScreen ? '90%' : '25%',flexGrow:'0'}}>
      <CardMedia
        component="img"
        height="194"
        image={logo}
        alt="Paella dish"
      />
      <Stack mx={1} direction="row" justifyContent="space-between">
        <Typography>Hoodie</Typography>
        <Typography>1200</Typography>
      </Stack>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
        
      <CardActions sx={{justifyContent:'center'}}>
        <Button fullWidth variant='outlined'>Personalise</Button>
      </CardActions>
    </Card>
  );
}
