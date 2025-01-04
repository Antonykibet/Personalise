import { Paper, Box, Typography } from "@mui/material";

const itemsStyle= {width:'40%', display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'start',m:1,p:1}
const itemImageStyle = {width:'54px',marginRight:'8px',border:'solid',borderRadius:'6px'}

export default function AvailableItems(){
    return (
        <>
            <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}} >
                <Paper sx={itemsStyle}>
                    <img style={itemImageStyle} alt="stanley cup" src={''} />
                    <Typography variant='h6' sx={{fontSize:'16px',fontWeight:'bold',color:'#383838'}}>Tote bag</Typography>
                </Paper>
            </Box>
        </>
    )
}