import { Stack, Typography } from "@mui/material"
import logo from "../logo512.png"
export default function Hero(){
    return (
        <div>
            <Stack sx={{border:'solid',justifyContent:'center'}} direction="row">
                <Stack sx={{width:"45%",border:'solid',justifyContent:'center',alignItems:'center'}}>
                    <Typography >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus ullam illum facilis. 
                        Ducimus, molestiae libero molestias culpa ipsa sed accusantium illum perferendis quia modi nihil tenetur optio veritatis obcaecati!
                    </Typography>
                </Stack>
                <Stack sx={{width:"45%",border:'solid',justifyContent:'center',alignItems:'center'}}>
                    <img width="30%"  height="50%" alt="placeholderImage" src={logo}/>
                </Stack>
            </Stack>
        </div>
    )
}