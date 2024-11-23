import { Box, Button } from "@mui/material"

export default function TextConfigBox({addTextFunc}){
    return(
        <Box  sx={{height:'80%',display:'flex', alignItems:'start',justifyContent:'space-between',flexWrap:'wrap',overflow:'auto',boxShadow:'0px 0px 1px 0px black inset'}}>
            <Button onClick={()=>{
                    addTextFunc()
                } } sx={{width:'90%',m:2}} variant='outlined'>Add Text Field
            </Button>
        </Box>
    )
}