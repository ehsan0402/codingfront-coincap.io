import HeaderTools from "./headerTools";
import Logo from "./logo";
import Menu from "./menu";
import Style from "./style";
import { Row , Col }  from "antd";
import StyleW from "../layouts/defaultLayout/wrapper/style";

export function Header(){
    return(
        <Style>
                <StyleW>
                    <Row justify="space-between">
                        <Col><Menu/></Col>
                        <Col><Logo/></Col>
                        <Col><HeaderTools/></Col>
                    </Row>
                </StyleW>
        </Style>
    )
}
export default Header;