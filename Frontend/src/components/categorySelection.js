import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import logo from "../logo512.png"
export default function CategorySelection(){
    return(
        <>
            <Stack sx={{}} direction='row' justifyContent='space-around'>
                <Card sx={{display:'flex',alignItems:'center',flexDirection:'column'}}  variant="plain" >
                    <CardMedia
                        component="img"
                        height="194"
                        sx={{borderRadius:4}}
                        image={logo}
                        alt="Paella dish"
                    />
                    <Typography  variant='h6' sx={{fontWeight:700,fontFamily:'Inter'}}>Item</Typography>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="194"
                        image={logo}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2">Item</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="194"
                        image={logo}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2">Item</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="194"
                        image={logo}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2">Item</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </>
    )
}