import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Stack, Typography, Modal, Backdrop, useMediaQuery} from "@mui/material";
import FeaturedTemplates from './LandingPage/featuredTemplates';
import Playground from '../components/canvas/playground';
import { getShit } from '../utils';

const formatProductDetail = (productDetail)=>{
    if (productDetail?.thumbnail_image_url){
        productDetail.themed = false
    }else{
        productDetail.themed = true
    }
    return productDetail
}

  

export default function ProductPage(){
    const [productDetails,setProductDetails] = useState({})
    const location = useLocation()
    const isPhone = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        async function fetchData() {
            try {
                const path = location.pathname
                let productDetail = await getShit(path)
                //A way to identify whether the product is a themed product or an 'original/base' product
                let formatedProductDetail = formatProductDetail(productDetail)
                setProductDetails(formatedProductDetail)
            } catch (error) {
                console.log('error while trying to retrieve product.')
            }
            
        }
        fetchData()
    },[])
    return (
        <>
        <Stack px={{md:4,xs:2}} my={8} mt={4}>
            <Stack px={{justifyContent:{xs:'center',md:'space-around'}}} direction={isPhone||isTablet ? 'column':'row'} spacing={4} mb={6}  >
                <Box sx={{width: {md:'55%',xs:'100%'}, height:{md:'60vh',xs:'50vh'}, boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',borderRadius:'4px'}}  >
                <img style={{width:'100%',height:'100%',objectFit:'contain'}} src={productDetails.themed === true?productDetails.canvasPNG:productDetails.thumbnail_image_url} alt={productDetails.name}/>
                </Box>
                <Stack spacing={4} sx={{justifyContent:'space-between',width:{md:'35%',xs:'100%'}}}>
                    <Stack >
                        <Typography variant="h4" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{productDetails.name}</Typography>
                        <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>{`${productDetails.price}/=`}</Typography>   
                        <Typography variant='body2' sx={{fontWeight:300,fontFamily:'Inter'}}>
                            {productDetails.description}
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
                            <Playground productDetail={productDetails} />
                    </Modal>

                </Stack>
            </Stack>
            <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>Others also bought</Typography>
            <FeaturedTemplates/>
        </Stack>
            
        </>
    )
}