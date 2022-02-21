import { Fragment } from "react";
import HeaderTools from "./headerTools";
import Logo from "./logo";
import Menu from "./menu";
import Style from "./style";

export function Header(){
    return(
        <Style>
            <Menu/>
            <Logo/>
            <HeaderTools/>
        </Style>
    )
}
export default Header;