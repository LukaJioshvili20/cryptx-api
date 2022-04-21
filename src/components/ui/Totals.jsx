import React, { Component } from "react";
// styles
import { Total } from "../styles/Totals.styled"

export class Totals extends Component{
    render(){
        return(
            <React.Fragment>
                <Total>
                    <h2>Total cards</h2>
                </Total>
            </React.Fragment>
        )
    }
}

export default Totals;