import TopCategory from "./topCategory"
import Category2 from "./Category2"
import { Stack } from "@mui/material"

export default function Sections(){
    return (
        <Stack direction='column' spacing={2} px={2} my={2}>
            <TopCategory title = 'Top Category'/>
            <Category2 title = 'Hoodie'/>
        </Stack>
    )
}