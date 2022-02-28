import StyleW from "../defaultLayout/wrapper/style"
import Footer from "components/footer";
import Header from "components/header";
import { Fragment } from "react";

export function DefaultLayout(props){
    const {children} = props;
    return(
        <Fragment>
                <StyleW>
                <Header/>
                    {children}
                </StyleW>
            <Footer/>
        </Fragment>
        
    )
}
export default DefaultLayout;