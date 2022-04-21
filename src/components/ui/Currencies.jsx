import React, { useEffect, useMemo, useState } from "react";
import axios from "axios"
import { useTable } from "react-table"
import { useGlobalFilter, useSortBy } from "react-table/dist/react-table.development";
import { SearchFilter } from "./SearchFilter"
// import { RangeFilter } from "./RangeFIlter"
// styles
export function Currencies(props){
    // eslint-disable-next-line
    const [ currencies, setCurrencies ] = useState([]);

    const fetchCurrencies = async () => {
        const response = await axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .catch((error)=> console.log(error));


        if(response !== null){
            const currencies = response.data;
            console.log('Currencies : ', currencies);
            setCurrencies(currencies);
        }
    
        };


        const currenciesData = useMemo(() => [...currencies], [currencies]);
        

    
        
        
        // console.log('This is',productsData)
        const columns = useMemo(
            () => [
              {
                Header: '#',
                accessor: 'market_cap_rank', // accessor is the "key" in the data
              }, 
              {
                Header: '',
                accessor: 'image',
                Cell: (props) => (
                      <img className="CoinIcon"
                        src={props.row.original.image} alt="Coin Icon"
                      />    
                  )
              },
              {
                Header: 'Coin', 
                accessor: 'name', 
              },
              {
                Header: '',
                accessor: 'symbol',
                Cell : (props) =>{
                    return props.row.original.symbol.toUpperCase();
                }
              },
         
              {
                Header: 'Price',
                accessor: 'current_price',
                Cell: (props) =>{
                    return '$' + props.row.original.current_price
                }
              },
              {
                Header: '24th ',
                accessor: 'price_change_percentage_24h',
                Cell: (props) =>{
                    return props.row.original.price_change_percentage_24h.toFixed(1) + '%'
                } 
              },
              {
                Header: '24th Volume',
                accessor: 'high_24h', 
                Cell: (props) =>{
                    return '$' + props.row.original.high_24h
                }
              },
              {
                Header: 'Mark Cap',
                accessor: 'market_cap',
                Cell: (props) =>{
                    return '$' + props.row.original.market_cap.toLocaleString()
                }
              }
            ],
            []
        )
       
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
          preGlobalFilteredRows,
          setGlobalFilter,
          state
        } = useTable({ columns, data : currenciesData },
            useGlobalFilter,
            useSortBy
        )
    
        
                
        useEffect(()=>{
            fetchCurrencies();
        }, []);


        return(
           <React.Fragment>
               <div>

               </div>
               <div>
                <SearchFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    SearchFilter={state.SearchFilter}
                />
                
                
               </div>


               <table {...getTableProps()}>
               <thead>
                   {headerGroups.map((headerGroup)=>(
                      <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column)=>(
                              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                {column.isSorted ? (column.isSortedDesc ? " ▼ " : " ▲ ") : ""}
                              </th>
                          ))}
                      </tr> 
                   ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                    {rows.map((row)=>{
                        prepareRow(row);

                        return (
                           <tr {...row.getRowProps()}>
                               {row.cells.map((cell, index )=>(
                                   <td {...cell.getCellProps()}>
                                       {cell.render("Cell")}
                                   </td>
                               ))}
                           </tr>
                        )
                    })}
               </tbody>
           </table>
           </React.Fragment>
        )
    
}

export default Currencies;