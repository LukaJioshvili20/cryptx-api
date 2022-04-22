import React from "react";
// styles
import { BaseCards } from "../styles/BaseCard.styled"


export const BaseCard = (props) =>{
    const currencies = props.currencies;
    const stylename = props.stylename;
    const aim = props.aim;
    const title = props.title;
    console.log(stylename)

    const market_cap = currencies.reduce((accumulator, object)=>{
        return accumulator + object.market_cap;
    }, 0);
    const high_24th = currencies.reduce((accumulator, object)=>{
        return accumulator + object.current_price;
    }, 0);

    const totalMarket = "$" + market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const totalHigh = "$" + high_24th.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


    let sum;
    if(aim === "market_cap"){
        sum = totalMarket;  
    }else if(aim === "high_24th"){
        sum = totalHigh;
    }else if(aim === "total_coins"){
        sum = currencies.length;
    }
    
    return(
        <React.Fragment>
            <BaseCards className={stylename}>
                <div>
                    <h1>{sum}</h1>
                    <span>0.0%<span>&#8593;</span></span>
                </div>
                <p>{title}</p>
            </BaseCards>
        </React.Fragment>
    )
}

export default BaseCard;