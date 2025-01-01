import { Button, Stack, Typography, Box, TextField } from "@mui/material"
import logo from "../../logo512.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function Hero(){
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 4
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 3
    //     }
    //   };
    // return (
    //     <div>
    //         <Stack direction={{xs:'column',md:'row',lg:'row',xl:'row'}}  px={4} py={4} mx={4} my={4} sx={{height:{xs:'auto',md:'70vh', } ,backgroundColor:'#e45a00',borderRadius:'12px'}}>
    //             <Stack width={{xs:'100%',md:'50%',lg:'50%',xl:'50%' }} spacing={1} alignItems='flex-start' justifyContent='center'>
    //                 <Typography  component='h1' color="#ffffff" fontWeight='700' variant="h3">
    //                     Personalize  Everything.
    //                 </Typography>
    //                 <Typography component='p' color="#ffffff"  variant="p">
    //                   Some bullshit text some bullshit text some bullshit text some bullshit text some bullshit text.
    //                 </Typography>
    //                 <Button width='200px' sx={{backgroundColor:'white',color:'#e45a00', fontWeight:'700',borderRadius:4,display:{xs:'none',md:'block',lg:'block',xl:'block' }}} variant="solid"  >Shop Now</Button>
    //             </Stack>
    //             <Stack width = {{xs:'100%',md:'50%',lg:'50%',xl:'50%' }} my={{xs:2}}  justifyContent='space-around'>
    //               <Carousel arrows={false} customTransition='transform 1000ms linear' infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
    //                 <img width='100px' height='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //               </Carousel>
    //               <Carousel arrows={false} customTransition='transform 1000ms linear' infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
    //                 <img width='100px' height='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //               </Carousel>
    //               <Carousel arrows={false} customTransition='transform 1000ms linear' infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
    //                 <img width='100px' height='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //                 <img width='100px' src={logo} alt=""/>
    //               </Carousel>
    //             </Stack>
    //             <Box>
    //               <Button width='200px' sx={{backgroundColor:'white',color:'#e45a00', fontWeight:'700',borderRadius:4,display:{md:'none',lg:'none',xl:'none'}}} variant="solid"  >Shop Now</Button>
    //             </Box>
    //         </Stack>
            
    //     </div>
    // )
    return(
      <>
        <Stack my={2} p={{md:4,xs:1}} spacing={1} direction='column'>
          <Stack spacing={1} direction={{xs:'column',md:'row'}} >
            <Stack sx={{py:2,justifyContent:'space-between',alignItems:'center',borderRadius:2,width:{md:'65%',xs:'100%'}, height:{md:'65vh'},backgroundColor:'#EE7A13'}}>
              <Stack mx={3} spacing={1}>
                <Typography variant="h4" sx={{fontFamily:'poppins',fontWeight:700,color:'white'}}>Personalise with Ease.</Typography>
                <Typography variant="p" sx={{fontFamily:'poppins',fontWeight:500,color:'white'}}>Design custom products at your comfort, 
                no design skills required.</Typography>
              </Stack>
              <Stack mx={3} my={2} sx={{borderRadius:2,width:{md:'35%',xs:'90%'} ,height:{md:'65vh',xs:'40vh'},border:'solid'}}></Stack>
              <Stack mx={3}  spacing={2} sx={{width:'90%'}} direction='row'>
                <Button disableElevation variant="contained" sx={{width:'auto',backgroundColor:'#F5F5F5',color:'#E45A00',fontFamily:'sans serif',borderRadius:4}}>Personalise</Button>
                <Button disableElevation variant="outlined" sx={{width:'auto',color:'white',borderColor:'white',fontFamily:'sans serif',borderRadius:4}}>Customize Gift</Button>
              </Stack>
            </Stack>
          </Stack>
          
        </Stack>
      </>
    )
}