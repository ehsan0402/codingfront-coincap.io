import StyleW from "../defaultLayout/wrapper/style"
import Footer from "components/footer";
import Header from "components/header";
import { Fragment } from "react";
import DefaultH from "../../deafultW/index";

export function DefaultLayout(props){
    const {children} = props;
    return(
        <Fragment>
            <Header/>
                <DefaultH/>
                    <StyleW>
                        {children}
                    </StyleW>
            <Footer/>
        </Fragment>
        
    )
}
export default DefaultLayout;