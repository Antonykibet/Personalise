import { Box, CardMedia, Stack } from "@mui/material";
import ThemeSelector from "../themeSelector";
import { useState } from "react";


export default function TemplateBox({canvas, productDetail}){
    const [searchResult,setSearchResult] = useState([])
    const [renderSearchResults,setRenderSearchResults] = useState(false)
    const [templates,setTemplates] = useState([])

    const handleTemplateSelect = (canvasJSON)=>{
        canvas.loadFromJSON(canvasJSON)
        .then( r => {
            // Get the current canvas dimensions
            canvas.renderAll()
        }
        )
    }
    return (
        <>
            <Stack sx={{justifyContent:'center',alignItems:'center',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',width:'100%',mb:2,pb:1}}>
                <ThemeSelector productDetail={productDetail} setRenderSearchResults={setRenderSearchResults} renderSearchResults={renderSearchResults} searchResult={searchResult} setSearchResult={setSearchResult} setResults={setTemplates} results={templates} isGiftSection={false} searchURI={'products?'}/>
            </Stack>
            <Box sx={{height:'auto',width:'100%',overflowY:'scroll',display:'flex',justifyContent:'space-around',paddingBottom:'200px',flexWrap:'wrap'}}>
                {(renderSearchResults?searchResult:templates).map(template=>{
                    return (
                        <CardMedia onClick={()=>handleTemplateSelect(template.canvasJSON)} sx={{width:{xs:'40%',md:'11vw'},pt:2,objectFit:'contain' }} component="img" alt={template.name} src={template.canvasPNG} />
                    )
                })}
            </Box>
        </>
    )
}