// Components
import Currencies from "../components/ui/Currencies"
// Utils
import PageTitle from "../utils/PageTitle"
import React from "react"
import AnimatedPage from "../components/AnimatedPage"

function Home(){
    PageTitle('Homepage')
    return(
        <AnimatedPage>
            <Currencies/>
        </AnimatedPage>
    )
}

export default Home;