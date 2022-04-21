// Components
import { Totals } from "../components/ui/Totals"
import { Currencies } from "../components/ui/Currencies"
// Utils
import { PageTitle } from "../utils/PageTitle"
function Home(){
    PageTitle('Homepage')
    return(
        <div>
            <Totals/>
            <Currencies/>
        </div>
    )
}

export default Home;