import { Row , Col } from "antd";
import { Link } from "react-router-dom";
import Style from "./style";


export function Legals(){
    return(
        <Style>
            <p>LEGALS</p> 
            <ul>
                <li><Link to="/">Terms of Service</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
            </ul> 
            <p>DISCLAIMER</p>
            <span>
                Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.
            </span>
        </Style>
    )
}
export default Legals;