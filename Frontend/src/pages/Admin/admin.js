import ProductCreationForm from "./themedProductCreationForm"
import ThemeCreationForm from "./themeCreationForm";
import AvailableItemCreation from "./availableItemCreation";
import axios from "axios";
import CanvasTest from "../../components/canvas/test";

export function handleFormDataEntry(formAttribute,stateHandler, data){
    const prop = {
        [formAttribute]:data
    }
    stateHandler((former)=>{
        return {...former,...prop}}
    )
}
export const handleSubmit = async (e,path,formData,hasFile)=>{
    e.preventDefault()
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log(data)
    try {
        const resp = await axios.post(`http://127.0.0.1:8000/${path}/`,data, {
            headers: {
              'Content-Type': hasFile?'multipart/form-data':'application/json', // Set Content-Type header for file uploads
            },
          })
        console.log(data)
        if (resp.data.status >= 200 && resp.data.status < 300){
            e.target.submit()
        }else{
            console.error('Unexpected status code:', resp.data.status)
        }
    } catch (error) {
        alert('error while sending this shit')
    }
}
export const getShit = async (param)=>{
    try {
        const resp = await axios.get(`http://127.0.0.1:8000/${param}/`)
        return resp.data
    } catch (error) {
        console.log(`Error while fething ${param}:${error}`)
        return [error]
    }
    
}
export default function adminpage(){
    return(
        <>
            <AvailableItemCreation/>
            <ThemeCreationForm/>
            <ProductCreationForm/>
        </>
    )
}