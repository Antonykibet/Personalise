import { useEffect, useState } from "react"
import { getShit } from "../../utils"
import { Box, Stack, Tab, Tabs } from "@mui/material"
export default function ThemeSelector({defautltTheme}){
    const [themes,setThemes] = useState([])
    const [selectedTheme,setSelectedTheme] = useState('')
    const [templates,setTemplates] = useState([])

    const handleThemeChange = async(event,selectedTheme)=>{
        setSelectedTheme(selectedTheme)
        const resp = await getShit(`products?themeName=${selectedTheme}`)
        setTemplates(resp)
    }
    useEffect(()=>{
        (async()=> {
            const urlParam = 'theme'
            const themes = await getShit(urlParam)
            setThemes(themes)
        })()
        handleThemeChange('',defautltTheme)
    },[defautltTheme])
    return(
        <Stack  spacing={1} alignItems='start'>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    color
                    value={selectedTheme}
                    onChange={handleThemeChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Themes"
                    indicatorColor="transparent"
                    textColor="red"
                    sx={{ minHeight: "30px", height: "30px" }}
                    >
                        {themes.map((theme)=>{
                            return <Tab sx={{border:'solid',borderRadius:8,borderWidth:2,mr:1,minHeight: "30px", height: "30px" }} value={theme.name} label={theme.name} />
                        })}
                </Tabs>
            </Box>
            <Box display='flex' paddingBottom={2}  width='100vw' alignItems='center'  flexWrap='wrap'>
                
            </Box>
        </Stack>
    )
}