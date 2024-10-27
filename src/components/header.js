import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { InputAdornment, Stack, Link, TextField } from '@mui/material';
import { InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';

const pages = ['Products', 'Pricing', 'Blog','Products', 'Pricing', 'Blog','Products', 'Pricing', 'Blog','Pricing', 'Blog','Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  return (
    <>
      <AppBar sx={{backgroundColor:'#ffffff'}} position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{display: {xs: 'none', md: 'flex'},justifyContent:'space-between'}}>
          <Stack direction="row" alignItems='center'>
            <AutoFixHighIcon sx={{ display: { xs: 'none', md: 'flex' },color:'#e45a00', }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
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
          <InputBase
              sx={{ border:{border:'solid',borderRadius:16,borderWidth:'2px'}, px:1}}
              placeholder="Search products"
              endAdornment={
                <InputAdornment  position='end'>
                  <SearchIcon sx={{color:'#e45a00'}} />
                </InputAdornment>
              }
          />
          <Link href='/checkout'><ShoppingCartOutlinedIcon  sx={{color: '#000000',fontSize:'26px'}} /></Link>
          <Link href='/sign-in'><AccountCircleSharpIcon sx={{color: '#000000',fontSize:'26px'}}/></Link>
          </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={''}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={''}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean('')}
                onClose={''}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={''}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <AutoFixHighIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </Toolbar>
      </Container>
      <Stack sx={{backgroundColor:'rgb(245, 246, 250)'}} direction="row" justifyContent={'center'} >
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
