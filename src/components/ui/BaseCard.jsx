import React, { Component } from "react";
// styles
import { BaseCards } from "../styles/BaseCard.styled"

export class BaseCard extends Component{
    render(){
        return(
            <React.Fragment>
                <BaseCards>
                    <h2>Total cards</h2>
                </BaseCards>
            </React.Fragment>
        )
    }
}

export default BaseCard;