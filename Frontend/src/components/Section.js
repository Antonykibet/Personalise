import TopCategory from "./topCategory"
import Category2 from "./Category2"
import { Stack } from "@mui/material"
import CategorySelection from "./categorySelection"
export default function Sections(){
    return (
        <Stack  spacing={4} px={2} my={2}>
            <TopCategory title = 'Top Category'/>
            <CategorySelection/>
            <Category2 title = 'Hoodie'/>
        </Stack>
    )
}