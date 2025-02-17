import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Crop32Icon from '@mui/icons-material/Crop32';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import { Box, IconButton} from '@mui/material';
import { Circle,Rect,Triangle} from 'fabric';


export default function ShapeBox({setfocusedObject,canvas}){
    const shapeStyle = {
        stroke:'grey',
        color:'grey',
        fontSize:80,
        strokeWidth:'0.1px'
    }
    const shapes = [
        {name:'Circle',icon:<RadioButtonUncheckedIcon sx={shapeStyle}/>},
        {name:'Rect',icon:<Crop32Icon sx={shapeStyle}/>},
        {name:'Triangle',icon:<ChangeHistoryIcon sx={shapeStyle}/>}
    ]

    const addShape = (Shape)=>{
        let shape
        if (Shape === 'Circle'){
            shape = new Circle({radius: 80, fill:'transparent',stroke:'red',strokeWidth:5, left: 100, top: 100})
        }
        if (Shape === 'Rect'){
            shape = new Rect({width:80,height:60,stroke:'red',left: 100, top: 100})
        }
        if (Shape === 'Triangle'){
            shape = new Triangle({stroke:'red'})
        }
        shape.on('selected',(obj)=>{
            const selectedObj={
                type:'Shape',
                object:obj.target
            }
            setfocusedObject(selectedObj)
        })
        shape.on('deselected',()=>{
            setfocusedObject({type:null,object:null})
        })
        canvas.add(shape)
    }
    return(
        <Box  sx={{height:'100%',display:'flex',justifyContent:'space-around',alignItems:'start',overflow:'auto', backgroundColor:'#F6F5F5'}}>
            {shapes.map(shape=>{
                return(<IconButton  onClick={()=>addShape(shape.name)}>{shape.icon}</IconButton>)
                })
            }
        </Box>
    )
}
