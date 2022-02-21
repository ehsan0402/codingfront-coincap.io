import Style from "../defaultLayout/wrapper/style"
import Footer from "components/footer";
import Header from "components/header";
import { Fragment } from "react";

export function DefaultLayout(props){
    const {children} = props;
    return(
        <Fragment>
            <Header/>
                <Style>
                        {children}
                </Style>
            <Footer/>
        </Fragment>
        
    )
}
export default DefaultLayout;