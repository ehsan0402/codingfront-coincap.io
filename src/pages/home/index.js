import { useEffect, useState } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from "utils/api";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Table } from "antd";
import Style from "./style";

export function Home(){
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [limit , setLimit] = useState(10);
    const [offset , setOffset] = useState(0);
    const columnsObject = [
        {
            title:"Rank",
            dataIndex:"rank",
            key:"rank",
        },
        {
            title:"Name",
            dataIndex:"id",
            key:"id",
        },
        {
            title:"Price",
            dataIndex:"priceUsd",
            key:"priceUsd",
        },
        {
            title:"MarketCap",
            dataIndex:"marketCapUsd",
            key:"marketCapUsd",
        },
        {
            title:"VWAP (24Hr)",
            dataIndex:"vwap24Hr",
            key:"vwap24Hr",
        },
        {
            title:"Supply",
            dataIndex:"supply",
            key:"supply",
        },
        {
            title:"Volume (24Hr)",
            dataIndex:"volumeUsd24Hr",
            key:"volumeUsd24Hr",
        },
        {
            title:"Volume (24Hr)",
            dataIndex:"changePercent24Hr",
            key:"changePercent24Hr",
        },
    ]
    
    useEffect(function(){
        async function getApi(){
            try {
                setLoading(true);
                const response = await api.get('assets', {limit:limit , offset :offset});
                setAssets(response.data.data);
                setLoading(false);
            }catch(e){
                setLoading(false);
            }
        }
        getApi();
    },[])
    async function loadMore(){
        try {
            setOffset(offset+10)
            const response = await api.get("assets",{limit:limit, offset:offset + 10});
            setAssets(assets.concat(response.data.data))
        } catch (e) {
            
        }
    }
    return(
        <DefaultLayout>
            <Style>
            <div style={{display: loading ? "block" : "none"}}>Loading...</div>
            <Table columns={columnsObject} dataSource={assets}  />
            <Button onClick={loadMore}>View More</Button>
            </Style>
        </DefaultLayout>
    );
}
export default Home;