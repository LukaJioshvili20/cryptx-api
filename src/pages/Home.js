import React from "react"
// Components
import Currencies from "../components/ui/Currencies"
// Utils
import PageTitle from "../utils/PageTitle"

function Home(){
    PageTitle('Homepage')
    return(
        <React.Fragment>
            <Currencies/>
        </React.Fragment>
    )
}

export default Home;