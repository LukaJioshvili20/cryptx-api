import React, { Component } from "react";
// styles
import { BaseCards } from "../styles/BaseCard.styled"

export class BaseCard extends Component{
    render(){
        return(
            <React.Fragment>
                <BaseCards>
                    <div>
                        <h1>$423,521,642</h1>
                        <span>1.3%<span>&#8593;</span></span>
                    </div>
                    <p>Total</p>
                </BaseCards>
            </React.Fragment>
        )
    }
}

export default BaseCard;