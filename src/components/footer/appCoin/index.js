import { Link } from "react-router-dom";
import Style from "./style";


export function AppCoin(){
    return(
        <Style>
           <p>COINCAP APP AVAILABLE ON</p>
           <Link to="https://play.google.com/store/apps/details?id=io.coinCap.coinCap">
               <img src="https://coincap.io/static/images/stores/google_play.svg"/>
           </Link>
           <Link to="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&ign-mpt=uo%3D4">
               <img src="https://coincap.io/static/images/stores/apple_store.svg"/>
           </Link>
        </Style>
    )
}
export default AppCoin;