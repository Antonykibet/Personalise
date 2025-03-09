import Hero from './hero';
import FeaturedTemplates from './featuredTemplates';
import AvailableItems from './availablItems';
import GiftHero from './giftHero';
export default function Landing(){
    return(
        <div style={{paddingLeft:'12px',paddingRight:'12px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Hero/>
            <FeaturedTemplates isGiftSection={false} />
            <AvailableItems/>
            <GiftHero/>
            <FeaturedTemplates isGiftSection={true}/>
        </div>
    )
}