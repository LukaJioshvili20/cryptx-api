import React from "react";
// styles
import { BaseCards } from "../styles/BaseCard.styled"

const BaseCard = (props) =>{
    const currencies = props.currencies;
    const positive = props.positive;
    const aim = props.aim;
    const title = props.title;

    const market_cap = currencies.reduce((accumulator, object)=>{
        return accumulator + object.market_cap;
    }, 0);

    const total_volume = currencies.reduce((accumulator, object)=>{
        return accumulator + object.total_volume;
    }, 0);


    const totalMarket = "$" + market_cap.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const totalVolume = "$" + total_volume.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let sum, grow;

    switch (aim) {
        case "market_cap":
            sum = totalMarket;  
            break;
        case "total_volume":
            sum = totalVolume;  
            break;
        case "total_coins":
            sum = currencies.length;;  
            break;
        default:
           return null;
    }

   
    return(
        <BaseCards className={`${positive ? "total-positive" : "total-passive"}`} >
            <div>
                <h1>{sum}</h1>{grow}
            </div>
            <p>{title}</p>
        </BaseCards>
    )
}

export default BaseCard;