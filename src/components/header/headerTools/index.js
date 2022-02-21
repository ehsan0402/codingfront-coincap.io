import { Link } from "react-router-dom";
import { Button } from "antd";
import Style from "./style";
import { SearchOutlined , SettingFilled } from "@ant-design/icons";

export function HeaderTools(){
    return(
        <Style>
            <ul>
                <li><Link to="/"><SearchOutlined/></Link></li>
                <li><Link to="/"><SettingFilled/></Link></li>
                <li><Link to="/">
                    <Button type="primary">Connect Wallet</Button>
                </Link></li>
            </ul>
        </Style>
    )
}
export default HeaderTools;