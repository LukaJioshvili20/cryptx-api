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
          .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d&market_chart")
          .then((resolve)=>{
            const currencies = resolve.data;
            console.log('Currencies : ', currencies);
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
                  <div style={{display:'flex',}}>
                    <img src={Star} height="16" width="16" alt="Star" style={{margin: 'auto 0.25rem'}} />
                    <p>{props.row.original.market_cap_rank}</p>
                  </div>
                )
              }, 
              {
                Header: '',
                accessor: 'image',
                Cell: (props) => (
                      <img className="CoinIcon" loading="lazy" width='40' height='auto'
                        src={props.row.original.image} alt="Coin Icon"
                      />    
                  )
              },
              {
                Header: 'Coin', 
                accessor: 'name', 
                Cell: (props) => (
                  <span style={{fontWeight:600}}>{props.row.original.name}</span>
                )
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
                Header: '1h ',
                accessor: 'price_change_percentage_1h_in_currency',
                Cell: (props) => (
                  <span  className={`${props.row.original.price_change_percentage_1h_in_currency > 0 ? "positive" : "negative"}`} >
                    {props.row.original.price_change_percentage_1h_in_currency.toFixed(1) + '%'}
                  </span>
                )
              },
              {
                Header: '24h ',
                accessor: 'price_change_percentage_24h_in_currency',
                Cell: (props) => (
                  <span  className={`${props.row.original.price_change_percentage_24h_in_currency > 0 ? "positive" : "negative"}`} >
                    {props.row.original.price_change_percentage_24h_in_currency.toFixed(1) + '%'}
                  </span>
                )
              },
              {
                Header: '7d ',
                accessor: 'price_change_percentage_7d_in_currency',
                Cell: (props) => (
                  <span  className={`${props.row.original.price_change_percentage_7d_in_currency > 0 ? "positive" : "negative"}`} >
                    {props.row.original.price_change_percentage_7d_in_currency.toFixed(1) + '%'}
                  </span>
                )
              },
              {
                Header: '24h Volume',
                accessor: 'total_volume', 
                Cell: (props) =>{
                    return '$' + props.row.original.total_volume.toLocaleString()
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
                    <SparklinesLine style={{ stroke: "#01DEE0", strokeWidth: "1", fill: "none" }} />
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
                  <BaseCard currencies={currencies} aim="market_cap" positive={true} title="Market Capitalization"/>
                  <BaseCard currencies={currencies} aim="total_volume" positive={true} title="24th Trade Volume "/>
                  <BaseCard currencies={currencies} aim="total_coins" positive={false} title="# of Coins"/>
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