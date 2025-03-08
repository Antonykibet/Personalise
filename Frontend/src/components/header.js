import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { InputAdornment, Stack, Link, Autocomplete,TextField,IconButton, useMediaQuery} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { getShit } from "../utils";

function ResponsiveAppBar() {
  const [menuOpen, setmenuOpen] = useState(false)
  const [availableItems,setAvailableItems] = useState([])
  let menuDisplay = menuOpen === true ? 'flex' : 'none'
  const isPhone = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 820px)');

  const toggleMenu = ()=> setmenuOpen(!menuOpen)

  useEffect(()=>{
    getShit('availableItem')
            .then(data=>setAvailableItems(data))
            .catch(err=>console.log(err))
  },[])

  return (
    <>
      <AppBar sx={{backgroundColor:'#ffffff',justifyContent:'space-between'} } position="static">
        
          <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between',px:{md:10,lg:10,xl:10,xs:1}}}>
            <Stack direction="row" alignItems='center'>
              <AutoFixHighIcon sx={{ color:'#e45a00', }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    display: 'flex',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    textDecoration:'none',
                    color: '#e45a00',
                  }}
                >
                  Personalyze
              </Typography>
            </Stack>
            
            <Stack direction="row" alignItems='center' spacing={2}>
              <Autocomplete
                id="tags-standard"
                options={[]}
                sx={{border:{border:'solid', borderRadius:'50px', borderWidth:'2px'},display:{xs:'none',md:'flex',lg:'flex',xl:'flex'}}}
                renderInput={params => {
                  return (
                    <TextField
                      {...params}
                      placeholder="What are you looking for?"
                      InputProps={{
                        ...params.InputProps,
                        sx:{border:{border:'solid',height:'40px', width:'30vw', borderRadius:'8px', borderWidth:'2px'}},
                        endAdornment: (
                          <>
                            <InputAdornment  position='end'>
                              <SearchIcon sx={{color:'#e45a00'}} />
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                          </>
                        )
                      }}
                    />
                  );
                }}
              />
              <Link href='/checkout'><ShoppingCartOutlinedIcon  sx={{color: '#000000',fontSize:'26px'}} /></Link>
              <Link href='/sign-in'><AccountCircleSharpIcon sx={{color: '#000000',fontSize:'26px'}}/></Link>
            </Stack>
          </Toolbar>

        <Stack direction='row' sx={{display:{md:'none',lg:'none',xl:'none'},paddingBottom:1, px:1, alignItems:'center', justifyContent:'space-between'}}>
          <IconButton onClick={toggleMenu}>
            <MenuIcon sx={{color: '#000000',fontSize:'26px'}}/>
          </IconButton>
          <Autocomplete
                id="tags-standard"
                options={[]}
                sx={{"& fieldset": { border: 'none' },width:'70%'}}
                renderInput={params => {
                  return (
                    <TextField
                      {...params}
                      placeholder="Favorites"
                      InputProps={{
                        ...params.InputProps,
                        sx:{border:{border:'solid',height:'40px',  borderRadius:16, borderWidth:'2px'}},
                        endAdornment: (
                          <>
                            <InputAdornment  position='end'>
                              <SearchIcon sx={{color:'#e45a00'}} />
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                          </>
                        )
                      }}
                    />
                  );
                }}
              />
        </Stack>
        <Stack 
          sx={{backgroundColor:'rgb(245, 246, 250)',display:{xs:menuDisplay,md:'flex',lg:'flex',xl:'flex',overflowX:'auto'}}} 
          direction={isPhone||isTablet ? 'column':'row'}  
          justifyContent={'center'} >
            {availableItems.map((item) => (
                    <Button 
                        href={`/category/${item.name}`}
                        key={item.name}
                        sx={{ my: 0, color: '#000000', display: 'block', fontFamily:'poppins',mx:0.5}}
                    >
                      {item.name}
                    </Button>
            ))}
        </Stack>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
