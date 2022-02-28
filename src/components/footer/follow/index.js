import { Link } from "react-router-dom";
import Style from "./style";
import { TwitterOutlined , FacebookFilled } from "@ant-design/icons";


export function Follow(){
    return(
        <Style>
            <p>FOLLOW US</p>
            <Link to="https://twitter.com/CoinCap_io"><TwitterOutlined/></Link>
            <Link to="https://www.facebook.com/coincapmarketdata/videos/365220420785166/"><FacebookFilled/></Link>
        </Style>
    )
}
export default Follow;