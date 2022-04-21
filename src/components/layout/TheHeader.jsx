import React, { Component } from "react";
// styles
import { Header } from "../styles/TheHeader.styled"

export class TheHeader extends Component{
    render(){
        return(
            <React.Fragment>
                <Header>
                    <h2>Crptocurrency Prices by Market Cap</h2>
                </Header>
            </React.Fragment>
        )
    }
}

export default TheHeader;