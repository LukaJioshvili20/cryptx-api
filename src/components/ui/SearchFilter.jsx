import React, { useState } from "react"
import { useAsyncDebounce } from "react-table/dist/react-table.development";

// Styles
import { Search } from "../styles/SearchFilter.styled"

function SearchFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}){
    const [value, setValue] = useState(globalFilter);
    
    const onChange = useAsyncDebounce((value)=>{
        setGlobalFilter(value || undefined);
    }, 200);

    return(
        <Search>
            <form className="nosubmit" onSubmit={e => e.preventDefault()}>
                <input className="nosubmit" type="text" value={value || ""} onChange={(e)=>{
                 setValue(e.target.value);
                 onChange(e.target.value);
                }} placeholder='Search by coin'
                />       
            </form>
        </Search>
    )
}
export default SearchFilter;