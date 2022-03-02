import { useEffect, useState } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from "utils/api";
import { Link } from "react-router-dom";
import { Button , Space, Spin , Table } from "antd";
import Style from "./style";

export function Home(){
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [limit , setLimit] = useState(10);
    const [offset , setOffset] = useState(0);
      
    const columnsObject = [
        {
            title: 'Rank',
            dataIndex: 'rank' ,
            key: 'rank',
        },
        {
            title: 'Name',
            dataIndex: 'id',
            key: 'id',
            render: text => <Link to={`/crypto/${text}`}>{text}</Link>,
        },
        {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'priceUsd',
            render: text => <p>$ {Math.round(text)}</p>,
        },
        {
            title: 'Marcket Cap',
            dataIndex: 'marketCapUsd',
            key: 'marketCapUsd',
            render: text => <p>$ {Math.round(text)}</p>,
        },
        {
            title: 'VWAP(24Hr)',
            dataIndex: 'vwap24Hr',
            key: 'vwap24Hr',
            render: text => <p>$ {Math.round(text)}</p>,
        },
        {
            title: 'Suplly',
            dataIndex: 'supply',
            key: 'supply',
            render: text => <p>{Math.round(text)} m</p>,
        },
        {
            title: 'Volume(24Hr)',
            dataIndex: 'volumeUsd24Hr',
            key: 'volumeUsd24Hr',
            render: text => <p>$ {Math.round(text)} b</p>,
        },
        {
            title: 'Change(24Hr)',
            dataIndex: 'changePercent24Hr',
            key: 'changePercent24Hr',
            render: text => <p>{Math.round(text)} %</p>,
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
                <Spin size="large" tip="Loading..." style={{display: loading ? "block" : "none"}}/>
                <Table columns={columnsObject} dataSource={assets} pagination={false} style={{display: loading ? "none" : "block"}} />
                <Button onClick={loadMore} style={{display: loading ? "none" : "block"}}>View More</Button>          
            </Style>
        </DefaultLayout>
    );
}
export default Home;