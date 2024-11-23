import { useState } from 'react';
import { Box, Button, Stack, Typography, Modal, Backdrop, useMediaQuery} from "@mui/material";

import TopCategory from '../components/topCategory';
import Playground from '../Playground/playground';


  

export default function ProductPage(){
    const isPhone = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    return (
        <>
        <Stack px={{md:4,xs:2}} my={8} mt={4}>
            <Stack px={{justifyContent:{xs:'center',md:'space-around'}}} direction={isPhone||isTablet ? 'column':'row'} spacing={4} mb={6}  >
                <Box sx={{width: {md:'65%',xs:'100%'}, height:'70vh', boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',borderRadius:'4px'}}  >
                    
                </Box>
                <Stack spacing={4} sx={{justifyContent:'space-between',width:{md:'35%',xs:'100%'}}}>
                    <Stack >
                        <Typography variant="h4" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>Product</Typography>
                        <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>200/=</Typography>   
                        <Typography variant='body2' sx={{fontWeight:300,fontFamily:'Inter'}}>
                            This product is fine fine finefine fine fine fine fine fine
                            product is fine fine finefine fine fine fine fine fine
                            product is fine fine finefine fine fine fine fine fine
                            product is fine fine finefine fine fine fine fine fine
                            product is fine fine finefine fine fine fine fine fine
                        </Typography>
                    </Stack> 
                    <Stack  spacing={1}>
                        <Button fullWidth sx={{borderRadius:4,borderColor:'#e45a00',color:'#e45a00'}}  variant='outlined'>Add to Cart</Button>
                        <Button onClick={handleOpen} sx={{borderRadius:4,backgroundColor:'#e45a00',color:'white'}}  variant='solid'>Personalise</Button>
                    </Stack>
                    
                    <Modal
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                        }}>
                            <Playground/>
                    </Modal>

                </Stack>
            </Stack>
            <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>Others also bought</Typography>
            <TopCategory/>
        </Stack>
            
        </>
    )
}