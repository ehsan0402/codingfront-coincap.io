import Footer from "components/footer";
import Header from "components/header";
import { Fragment } from "react";
import StyleW from "./wrapper/style";

export function DefaultLayout(props){
    const {children} = props;
    return(
        <Fragment>
            <Header/>
                        {children}
            <Footer/>
        </Fragment>
        
    )
}
export default DefaultLayout;