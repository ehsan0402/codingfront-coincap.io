import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "utils/api";
import DefaultLayout from "components/layouts/defaultLayout"

export function SinglePage(){
    const {id} = useParams()
    useEffect(function(){
        async function getApi(){
            try {
                const response = api.get(`assets/${id}`)
            } catch (e) {
                
            }
        }
        getApi();
    },[])
    
    return(
        <DefaultLayout>
        <p>single</p>
        </DefaultLayout>
    )
}
export default SinglePage;