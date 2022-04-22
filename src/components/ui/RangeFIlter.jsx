import React, { useState } from "react"
import { useAsyncDebounce } from "react-table/dist/react-table.development";

// Styles
import { Search } from "../styles/SearchFilter.styled"

export function SearchFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}){
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value)=>{
        setGlobalFilter(value || undefined);
    }, 300);
    
    return(
        <React.Fragment>
            <Search>
                <form className="nosubmit">
                    <input className="nosubmit" type="number" value={value || ""} onChange={(e)=>{
                     setValue(e.target.value);
                     onChange(e.target.value);
                  }} placeholder={`${count} records...`} />
            
                </form>
            </Search>
        </React.Fragment>
    )
}
