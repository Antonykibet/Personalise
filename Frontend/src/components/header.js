import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { InputAdornment, Stack, Link, Autocomplete,TextField,IconButton, useMediaQuery} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'Pricing', 'Blog','Products', 'Pricing', 'Blog','Products', 'Pricing', 'Blog','Pricing', 'Blog','Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const [menuOpen, setmenuOpen] = React.useState(false)
  let menuDisplay = menuOpen === true ? 'flex' : 'none'
  const isPhone = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 820px)');

  const toggleMenu = ()=> setmenuOpen(!menuOpen)
  return (
    <>
      <AppBar sx={{backgroundColor:'#ffffff',justifyContent:'space-between'} } position="static">
        <Container maxWidth="xl" >
          <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between'}}>
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
        </Container>
        <Stack direction='row' sx={{display:{md:'none',lg:'none',xl:'none'},paddingBottom:1, px:1, alignItems:'center', justifyContent:'space-between'}}>
          <IconButton onClick={toggleMenu}>
            <MenuIcon sx={{color: '#000000',fontSize:'26px'}}/>
          </IconButton>
          <Autocomplete
                id="tags-standard"
                options={[]}
                sx={{width:'70%'}}
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
          sx={{backgroundColor:'rgb(245, 246, 250)',display:{xs:menuDisplay,md:'flex',lg:'flex',xl:'flex'}}} 
          direction={isPhone||isTablet ? 'column':'row'}  
          justifyContent={'center'} >
            {pages.map((page) => (
                    <Button 
                        href={`/category/${page}`}
                        key={page}
                        sx={{ my: 0, color: '#000000', display: 'block', fontFamily:'poppins' }}
                    >
                      {page}
                    </Button>
            ))}
        </Stack>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
