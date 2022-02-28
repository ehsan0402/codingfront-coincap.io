import { Link } from "react-router-dom";
import Style from "./style";


export function LinkList(){
    return(
        <Style>
            <p>COINCAP.IO</p>
            <ul>
                <li><Link to="/">Methodology</Link></li>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">Our API</Link></li>
                <li><Link to="/">Rate Comparison</Link></li>
                <li><Link to="/">Careers</Link></li>
            </ul>
        </Style>
    )
}
export default LinkList;