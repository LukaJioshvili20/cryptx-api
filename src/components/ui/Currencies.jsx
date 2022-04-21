import React, { useEffect, useState } from "react";
import axios from "axios"

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
        useEffect(()=>{
            fetchCurrencies();
        }, []);

      
        return(
            <React.StrictMode>
                hello
            </React.StrictMode>
        )
    
}

export default Currencies;