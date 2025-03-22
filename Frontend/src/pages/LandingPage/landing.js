import Hero from './hero';
import FeaturedTemplates from './featuredTemplates';
import AvailableItems from './availablItems';
import GiftHero from './giftHero';
import { Box, Typography } from '@mui/material';
export default function Landing(){
    return(
        <div style={{paddingLeft:'12px',paddingRight:'12px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Hero/>
            <Box sx={{width:{md:'90%',xs:'95%'}}} >
                <Typography variant="h5" sx={{fontFamily:'poppins',fontWeight:600,color:'#242424'}}>Featured Templates</Typography>
            </Box>
            <FeaturedTemplates isGiftSection={false} />
            <AvailableItems/>
            <GiftHero/>
            <FeaturedTemplates isGiftSection={true}/>
        </div>
    )
}