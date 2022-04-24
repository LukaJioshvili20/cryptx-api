import React, { useEffect, useMemo, useState } from "react";
import axios from "axios"
// React Table
import { useTable } from "react-table"
import { useGlobalFilter, useSortBy } from "react-table/dist/react-table.development";
import SearchFilter from "./SearchFilter"

// Charts
import { Sparklines, SparklinesLine } from 'react-sparklines';

// Components
import BaseCard from "../ui/BaseCard"
import Loading from "../Loading"
import TheHeader from "../layout/TheHeader";
import Star from "../../assets/images/star.png"

// styles
import { Currency } from "../styles/Currencies.styled"

function Currencies(props){
    const [ currencies, setCurrencies ] = useState([]);
    const [ loading, setLoading ]  = useState(false);

    const fetchCurrencies = async () => {
        try{
          // eslint-disable-next-line
          const response = await axios
          .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=true")
          .then((resolve)=>{
            const currencies = resolve.data;
            // console.log('Currencies : ', currencies);
            setCurrencies(currencies);
            setLoading(true);
          })
        }catch(error){
          console.log(error)
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
                    <img src={Star} loading="lazy" height="16" width="16" alt="Star" />
                    {props.row.original.market_cap_rank}
                  </span>
                )
              }, 
              {
                Header: '',
                accessor: 'image',
                Cell: (props) => (
                      <img className="CoinIcon" loading="lazy" width='40' height='40'
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
                Cell: (props) => (
                  <span  className={`${props.row.original.price_change_percentage_24h > 0 ? "positive" : "negative"}`} >
                    {props.row.original.price_change_percentage_24h.toFixed(1) + '%'}
                  </span>
                )
              },
              {
                Header: '24th Volume',
                accessor: 'high_24h', 
                Cell: (props) =>{
                    return '$' + props.row.original.high_24h
                }
              },
              {
                Header: 'Mkt Cap',
                accessor: 'market_cap',
                Cell: (props) =>{
                    return '$' + props.row.original.market_cap.toLocaleString()
                }
              },
              {
                Header: 'Last 7 days',
                accessor: 'sparkline_in_7d',
                Cell: (props) => (
                  <Sparklines data={props.row.original.sparkline_in_7d.price}  preserveAspectRatio="none" style={{ width: '200px', height: '50px' }} limit={200}>
                    <SparklinesLine style={{ stroke: "#00E670", strokeWidth: "1", fill: "none" }} />
                  </Sparklines>
                )
              },
            ],
            []
        )
       
        const { getTableProps,getTableBodyProps, headerGroups, rows,
          prepareRow, preGlobalFilteredRows,setGlobalFilter, state
        } = useTable({ columns, data : currenciesData },
          useGlobalFilter, useSortBy
        )
    
            
        useEffect(()=>{ fetchCurrencies(); }, []);
   
        return(
           <React.Fragment>
             {loading ? <Currency>
                <TheHeader/>
                <div className="cards">
                  <BaseCard currencies={currencies} aim="market_cap" percentage={true} title="Market Capitalization"/>
                  <BaseCard currencies={currencies} aim="high_24th" percentage={true} title="24th Trade Volume "/>
                  <BaseCard currencies={currencies} aim="total_coins" percentage={false} title="# of Coins"/>
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
                    {rows.map((row)=>{
                        prepareRow(row);

                        return (
                           <tr {...row.getRowProps()} >
                               {row.cells.map((cell)=>(
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
           
             </Currency> : <Loading/>}
           </React.Fragment>
        )    
}

export default Currencies;