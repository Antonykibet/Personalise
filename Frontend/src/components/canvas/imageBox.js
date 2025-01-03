import { Box, Button } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function ImageBox(){
    return(
        <Box  sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'start',flexWrap:'wrap',overflow:'auto', backgroundColor:'#F6F5F5'}}>
            <Button
                sx={{my:1, }}
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                Upload Image
                
            </Button>
        </Box>
    )
}