import { useEffect } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from "utils/api";

export function Home(){
    useEffect(function(){
        async function getApi(){
            try {
                const response = await api.get('assets');
            }catch(e){

            }
        }
        getApi();
    },[])
    return(
        <DefaultLayout>
            <p>home</p>
        </DefaultLayout>
    );
}
export default Home;