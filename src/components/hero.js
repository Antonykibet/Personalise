import { Button, Stack, Typography } from "@mui/material"
import logo from "../logo512.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Hero(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <Stack direction='row'  px={4} mx={4} my={4} sx={{height:'70vh',backgroundColor:'#e45a00',borderRadius:'12px'}}>
                <Stack width='50%' spacing={1} alignItems='flex-start' justifyContent='center'>
                    <Typography  component='h1' color="#ffffff" fontWeight='700' variant="h3">
                        Personalize  Everything.
                    </Typography>
                    <Typography component='p' color="#ffffff"  variant="p">
                      Some bullshit text some bullshit text some bullshit text some bullshit text some bullshit text.
                    </Typography>
                    <Button width='200px' sx={{backgroundColor:'white',color:'#e45a00', fontWeight:'700',borderRadius:4}} variant="solid"  >Shop Now</Button>
                </Stack>
                <Stack width='50%' justifyContent='space-around'>
                  <Carousel arrows={false} customTransition='transform 1000ms linear' infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
                    <img width='100px' height='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                  </Carousel>
                  <Carousel arrows={false} customTransition='transform 1000ms linear' infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
                    <img width='100px' height='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                  </Carousel>
                  <Carousel arrows={false} customTransition='transform 1000ms linear' infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
                    <img width='100px' height='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                    <img width='100px' src={logo} alt=""/>
                  </Carousel>
                </Stack>
            </Stack>
            
        </div>
    )
}