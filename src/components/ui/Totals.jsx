import React, { Component } from "react";
// styles
import { Total } from "../styles/Totals.styled"
import BaseCard from "./BaseCard";

export class Totals extends Component{
    render(){
        return(
            <React.Fragment>
                <Total>
                    <BaseCard/>
                    <BaseCard/>
                    <BaseCard/>
                </Total>
            </React.Fragment>
        )
    }
}

export default Totals;