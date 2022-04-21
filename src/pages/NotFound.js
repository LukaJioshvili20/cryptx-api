import React from "react"
import { Link } from "react-router-dom"
// Utils
import { PageTitle } from "../utils/PageTitle"

function NotFound(){
    PageTitle("Not Found")
    return(
        <React.Fragment>
            <div>
                <div>
                    <h1>Oops!</h1>
                    <img src={require('../assets/images/NotFound.png')} alt="Not Found"/>
                </div>
                <h2>We can't seem to find the page you're looking for.</h2>
                <p>Error Code: 404</p>

                <p>Here are some helpful links instead:</p>
                <Link to="/">Home</Link>
            </div>
        </React.Fragment>
    )
}

export default NotFound;