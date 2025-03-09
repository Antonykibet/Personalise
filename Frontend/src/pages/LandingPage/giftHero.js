import { Stack, Typography} from '@mui/material'
import giftHeroImage from '../../images/giftHeroImage.jpg'
export default function GiftHero(){
    return(
        <>
            <Stack sx={{my:3,position:'relative',width:{md:'95%',xs:'95%'}}}>
                <div style={{position:'absolute',bottom:0,background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',padding:'16px'}}>
                    <Typography variant="h4" sx={{fontFamily:'poppins',fontWeight:700,color:'white'}}>Curate a gift that reflects their unique essence.</Typography>
                    <Typography variant="p" sx={{fontFamily:'poppins',fontWeight:500,color:'white'}}>Express your deepest love with a truly personalized creation.</Typography> 
                </div>
                <img style={{borderRadius:'8px',height:'90vh',objectFit:'cover'}} src={giftHeroImage} alt='Personalised cups for an anniversary gift.'/>
            </Stack>
        </>
    )
}