import { Row , Col }  from "antd";
import LinkList from "./linkList";
import Legals from "./legal";
import Follow from "./follow";
import AppCoin from "./appCoin";
import Style from "./style";
import StyleW from "../layouts/defaultLayout/wrapper/style";

export function Footer(){
    return(
        <Style>
            <StyleW>
            <Row justify="space-between">
                <Col><LinkList/></Col>
                <Col><Legals/></Col>
                <Col><Follow/></Col> 
                <Col><AppCoin/></Col>            
            </Row>
            </StyleW>
        </Style>
    )
}
export default Footer;