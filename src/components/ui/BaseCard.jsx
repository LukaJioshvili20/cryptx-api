import React from "react";
// styles
import { BaseCards } from "../styles/BaseCard.styled"

export const BaseCard = (props) =>{
    const currencies = props.currencies;
    const percentage = props.percentage;
    const aim = props.aim;
    const title = props.title;

    const market_cap = currencies.reduce((accumulator, object)=>{
        return accumulator + object.market_cap;
    }, 0);

    const high_24th = currencies.reduce((accumulator, object)=>{
        return accumulator + object.current_price;
    }, 0);

    const totalMarket = "$" + market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const totalHigh = "$" + high_24th.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let sum, grow;

    switch (aim) {
        case "market_cap":
            sum = totalMarket;  
            break;
        case "high_24th":
            sum = totalHigh;  
            break;
        case "total_coins":
            sum = currencies.length;;  
            break;
        default:
           return null;
    }

    switch (percentage) {
        case true:
            grow = <span></span>;
            break;
        case false:
            grow = null;
            break;
        default:
            return null
    }
   
    return(
        <BaseCards className={`${percentage ?"total-positive" : "total-passive"}`} >
            <div>
                <h1>{sum}</h1>{grow}
            </div>
            <p>{title}</p>
        </BaseCards>
    )
}

export default BaseCard;