import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "utils/api";
import DefaultLayout from "components/layouts/defaultLayout";
import { Descriptions } from "antd";

export function SinglePage(){
    const [item , setItem] = useState({});
    const {id} = useParams()
    useEffect(function(){
        async function getApi(){
            try {
                const response = await api.get(`assets/${id}`)
                setItem(response.data.data)
            } catch (e) {
                
            }
        }
        getApi();
    },[])
    
    return(
        <DefaultLayout>
        <Descriptions title="Coin Info">
            <Descriptions.Item label="Name">{item.id}</Descriptions.Item>
            <Descriptions.Item label="High">{item.maxSupply}</Descriptions.Item>
            <Descriptions.Item label="Average">{item.id}</Descriptions.Item>
            <Descriptions.Item label="Low">{item.id}</Descriptions.Item>
            <Descriptions.Item label="Low">{item.id}</Descriptions.Item>
            <Descriptions.Item label="Change">{item.changePercent24Hr}</Descriptions.Item>
        </Descriptions>
        </DefaultLayout>
    )
}
export default SinglePage;