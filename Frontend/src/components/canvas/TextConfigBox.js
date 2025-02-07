import { Box, Button } from "@mui/material"
import { Textbox} from 'fabric';

export default function TextConfigBox({setfocusedObject,canvas}){
    const addTextField = ()=>{
        let field = {
            text:'AddText',
            fontWeight:'normal',
            fontStyle:'normal',
            fill:'red',
            fontSize:24,
            fontFamily:'Poppins',
            linethrough: false,
            underline: false
        }
        const text = new Textbox(field.text,field)
        text.on('selected',(obj)=>{
            const selectedObj={
                type:'Text',
                object:obj.target
            }
            setfocusedObject(selectedObj)
            console.log(obj)
        })
        text.on('deselected',()=>{
            setfocusedObject({type:null,object:null})
        })
        canvas.add(text)
    }
    return(
        <Box  sx={{height:'100%',display:'flex',justifyContent:'space-around',alignItems:'start',flexWrap:'wrap',overflow:'auto', backgroundColor:'#F6F5F5'}}>
            <Button onClick={()=>{addTextField()}} sx={{width:'90%',m:2}} variant='outlined'>
                Add Text Field
            </Button>
        </Box>
    )
}