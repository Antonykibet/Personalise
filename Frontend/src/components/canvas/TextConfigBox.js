import { Box, Button } from "@mui/material"

export default function TextConfigBox({addTextFunc}){
    return(
        <Box  sx={{height:'100%',display:'flex',justifyContent:'space-around',alignItems:'start',flexWrap:'wrap',overflow:'auto', backgroundColor:'#F6F5F5'}}>
            <Button onClick={()=>{
                    addTextFunc()
                } } sx={{width:'90%',m:2}} variant='outlined'>Add Text Field
            </Button>
        </Box>
    )
}