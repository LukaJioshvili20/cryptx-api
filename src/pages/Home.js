// Components
import { TheHeader } from "../components/layout/TheHeader"
import { Totals } from "../components/ui/Totals"
import { Currencies } from "../components/ui/Currencies"
// Utils
import { PageTitle } from "../utils/PageTitle"
import React from "react"
import AnimatedPage from "../components/AnimatedPage"

function Home(){
    PageTitle('Homepage')
    return(
        <React.Fragment>
           <AnimatedPage>
                <TheHeader/>
                <Totals/>
                <Currencies/>
           </AnimatedPage>
        </React.Fragment>
    )
}

export default Home;