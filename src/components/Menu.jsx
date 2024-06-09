import Featured from "./Features"
import Caption from "./Caption"
import Contact from "./Contact"
import Footer from "./Footer"
import Loader from "./Loader"

export default function Menu(){
    return (   
        <div>
            <Loader/>
            <Caption/>
            <Featured/>
            <Contact/>
            <Footer/>
        </div>
    )
}