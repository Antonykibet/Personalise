import { Stack, Typography} from '@mui/material'

import moviesHero from '../../images/alltimemovies.avif'
import spotifyHero from '../../images/spotifyHero.png'
import f1Hero from '../../images/f1poster.jpg'
import footballHero from '../../images/lionel-messi_1.webp'
import carsHero from '../../images/mercedesHero.jpg'
import { useEffect, useState } from 'react'

export default function SecondHero(){
    const [heroOnFocus, setHeroOnFocus] = useState({}); // Initialize to null
    const [heroIndex, setHeroIndex] = useState(0); // Add an index state

    const heros = [
        { title: 'Gifts for Movie Buffs.', img: moviesHero, description: 'Personalize movie posters and themed gifts to celebrate their favorite films.'},
        { title: 'Music Lover Gifts.', img: spotifyHero, description: 'Design a gift that sings their tune. Custom playlists, album art prints, and more for the music lover in your life.' },
        { title: 'Fuel Their F1 Passion.', img: f1Hero, description: 'Create personalized track maps and driver-themed art for racing fans.'},
        { title: 'For the Football Fanatic.', img: footballHero, description: 'Design team memorabilia and match-day keepsakes for passionate fans.'},
        { title: 'Personalized Prestige for Car Connoisseurs.', img: carsHero, description: 'Craft custom car art and accessories for the ultimate auto enthusiast.' },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
        setHeroIndex((prevIndex) => (prevIndex + 1) % heros.length); // Cycle through the heros
        }, 5000);

        return () => clearInterval(intervalId); // Clean up the interval

    }, []); // Empty dependency array, runs only on mount

    useEffect(() => {
        setHeroOnFocus(heros[heroIndex]);
    }, [heroIndex,]);
    return(
        <>
            <Stack 
            sx={{
                my:3,
                height:{md:'50vh',xs:'30vh'},
                width:{md:'95%',xs:'95%',
                borderRadius: 6,
                backgroundImage:`url(${heroOnFocus.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'border-box',
                }}}>
                <Stack
                    sx={{
                        height: '100%',
                        background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                        py:2,
                        px:2,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius: 2,
                    }}
                >
                    <Typography 
                        variant="h2"
                        sx={{
                            fontFamily:'poppins',
                            fontWeight:700,
                            color:'white',
                            fontSize:{md:'80px',xs:'30px'},
                            textAlign:'center'
                            }}>
                                {heroOnFocus.title}
                    </Typography>
                    <Typography 
                        variant="p"
                        sx={{
                            fontFamily:'poppins',
                            fontWeight:500,
                            color:'white',
                            textAlign:'center'
                            }}>{heroOnFocus.description}</Typography>
                </Stack>
            </Stack>
        </>
    )
}