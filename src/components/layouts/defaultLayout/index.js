import { Fragment } from "react";
import Footer from "../../footer";
import Header from "../../header";

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