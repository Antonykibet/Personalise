import { InputBase } from "@mui/material"

export default function SearchBar(){
    return (
        <InputBase
        sx={{ ml: 1, flex: 1,border:'solid',my:2,width:'50%' }}
        placeholder="Search products"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    )
}