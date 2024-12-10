import { TextField, Button, Modal, Backdrop } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Playground from "../Playground/playground";

const inputStyle = {
    marginBottom:'16px'
}

export default function AdminPage(){
    const [openDesignModal, setOpenDesignModal] = useState(false);
    const handleOpen = () => setOpenDesignModal(true);
    const handleClose = () => setOpenDesignModal(false);

    const [formData,setFormData] = useState({})
    function handleFormDataEntry(formType, data){
        const prop = {
            [formType]:data
        }
        setFormData((former)=>{
            return {...former,...prop}}
        )
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const resp = await axios.post('http://127.0.0.1:8000/products/',formData)
            console.log(formData)
            if (resp.data.status === 200){
                e.target.submit()
            }else{
                alert('error')
            }
        } catch (error) {
            alert('error while sending this shit')
        }
    }
    return (
        <form style={{display:'flex',flexDirection:'column', width:'50dvw',margin:'56px',}} onSubmit={(e)=>handleSubmit(e)}>
            <TextField onChange={(e)=>handleFormDataEntry('name',e.target.value)} style={inputStyle}
                label='Name'
            />
            <TextField onChange={(e)=>handleFormDataEntry('price',e.target.value)} style={inputStyle}
                label='Price'
            />
            <TextField onChange={(e)=>handleFormDataEntry('description',e.target.value)} style={inputStyle}
                label='Description'
            />
            <Button onClick={handleOpen} sx={{borderRadius:4,backgroundColor:'#e45a00',color:'white', width:'30vw',my:1}}  variant='solid'>Design</Button>
            <Modal
                open={openDesignModal}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}>
                    <Playground isAdmin = {true} handleFormDataEntry={handleFormDataEntry}/>
            </Modal>
            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>
        </form>
       
        
    )
}