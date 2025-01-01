import ProductCreationForm from "./productCreationForm"
import ThemeCreationForm from "./themeCreationForm";
import axios from "axios";

export function handleFormDataEntry(formAttribute,stateHandler, data){
    const prop = {
        [formAttribute]:data
    }
    stateHandler((former)=>{
        return {...former,...prop}}
    )
}
export const handleSubmit = async (e,path,body)=>{
    e.preventDefault()
    try {
        const resp = await axios.post(`http://127.0.0.1:8000/${path}/`,body)
        console.log(body)
        if (resp.data.status === 200){
            e.target.submit()
        }else{
            alert('error')
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
            <ThemeCreationForm/>
            <ProductCreationForm/>
        </>
    )
}