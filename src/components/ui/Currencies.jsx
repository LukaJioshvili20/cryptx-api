import React, { useEffect, useMemo, useState } from "react";
import axios from "axios"
import { useTable } from "react-table"
import { useGlobalFilter, useSortBy } from "react-table/dist/react-table.development";
import { SearchFilter } from "./SearchFilter"


import BaseCard from "../ui/BaseCard"
// styles
import { Currency } from "../styles/Currencies.styled"


export function Currencies(props){
    
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
        
        const columns = useMemo(
            () => [
              {
                Header: '#',
                accessor: 'market_cap_rank', // accessor is the "key" in the data
                Cell: (props) =>(
                  <span>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149220.png" height="16" width="16" alt="" />
                    {props.row.original.market_cap_rank}
                  </span>
                )
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
                },
                
                
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

        const isEven = (index) => index % 2 === 0;

        return(
           <React.Fragment>
             <Currency>
                <div className="cards">
                  <BaseCard currencies={currencies} namestyle="total-positive" aim="market_cap" title="Market Capitalization"/>
                  <BaseCard currencies={currencies} namestyle="total-positive" aim="high_24th" title="24th Trade Volume "/>
                  <BaseCard currencies={currencies} namestyle="total-passive" aim="total_coins" title="# of Coins"/>
                </div>
               <div className="filters">
                <SearchFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    SearchFilter={state.SearchFilter}
                />           
               </div>


                <div className="fixed">
                <table {...getTableProps()} cellPadding="0" cellSpacing="0">
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
                    {rows.map((row, index)=>{
                        prepareRow(row);

                        return (
                           <tr {...row.getRowProps()} 
                           className={isEven(index) ? 'not-even' : 'even' }
                           >
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
                </div>
           
             </Currency>
           </React.Fragment>
        )
    
}


export default Currencies;