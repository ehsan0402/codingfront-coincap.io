import { Link } from "react-router-dom";
import Style from "./style";


export function Legals(){
    return(
        <Style>
            <ul>
                <p>LEGALS</p>
                <li><Link to="/">Terms of Service</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <span>DISCLAIMER</span>
                <p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
            </ul>
        </Style>
    )
}
export default Legals;