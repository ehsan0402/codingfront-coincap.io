import { Children, Fragment, useEffect, useState } from "react";
import DefaultLayout from "components/layouts/defaultLayout";
import api from "utils/api";
import { Link } from "react-router-dom";
import { Button , Spin , Table , Row, Col, Space  } from "antd";
import Style from "./style";
import StyleW from "../../components/layouts/defaultLayout/wrapper/style";

export function Home(){
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [limit , setLimit] = useState(20);
    const [offset , setOffset] = useState(0);
    const imgSrc1 = "https://assets.coincap.io/assets/icons/";
    const imgSrc2 = "@2x.png";
      
    const columnsObject = [
        {
            title: 'Rank',
            dataIndex: 'rank' ,
            key: 'rank',
            render: text => <p className="rank">{text}</p>,
        },
        {
            title: 'Name',
            key: 'id',
            dataIndex: 'id',
            render: 
                function (text , record) {
                    return (
                        <Space>
                        <img src={imgSrc1 + record.symbol.toLowerCase() + imgSrc2} />
                        <Link to={`/crypto/${text}`}>{text}<div>{record.symbol}</div></Link>
                        </Space>
                    )
                },
        }, 
        {
            title: 'Price',
            dataIndex: 'priceUsd',
            key: 'priceUsd',
            render: text => <p className="right">$ {Math.round((text) * 100) / 100}</p>,
        },
        {
            title: 'Marcket Cap',
            dataIndex: 'marketCapUsd',
            key: 'marketCapUsd',
            render: text => <p className="right">$ {Math.round(text)} b</p>,
        },
        {
            title: 'VWAP(24Hr)',
            dataIndex: 'vwap24Hr',
            key: 'vwap24Hr',
            render: text => <p className="right">$ {Math.round(text)}</p>,
        },
        {
            title: 'Suplly',
            dataIndex: 'supply',
            key: 'supply',
            render: text => <p className="right">{Math.round(text)} m</p>,
        },
        {
            title: 'Volume(24Hr)',
            dataIndex: 'volumeUsd24Hr',
            key: 'volumeUsd24Hr',
            render: text => <p className="right">$ {Math.round(text)} b</p>,
        },
        {
            title: 'Change(24Hr)',
            dataIndex: 'changePercent24Hr',
            key: 'changePercent24Hr',
            render: text => <p className="right" style={{color : text < 0 ? "red" : "rgb(24, 198, 131)"}}>{Math.round((text) * 100) / 100} %</p>,
        },
    ]
    
    useEffect(function(){
        async function getApi(){
            try {
                setLoading(true);
                const response = await api.get('assets', {limit: limit , offset: offset});
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
                <div className="backBanner">
                    <StyleW>
                        <div className="backBannerOpt">
                            <Row justify="space-between">
                                <Col>
                                    <Row justify="center"><div className="label">MARCKET CAP</div></Row>
                                    <Row justify="center"><div className="value">$1.88T</div></Row>
                                </Col>
                                <Col>                                    
                                    <Row justify="center" ><div className="label">EXCHANGE VOL</div></Row>
                                    <Row justify="center" ><div className="value">$78.46B</div></Row>                                    
                                </Col>
                                <Col>                                    
                                    <Row justify="center"><div className="label">ASSTES</div></Row>
                                    <Row justify="center"><div className="value">2,295</div></Row>                                    
                                </Col>
                                <Col>
                                    <Row justify="center"><div className="label">EXCHANGE</div></Row>
                                    <Row justify="center"><div className="value">73</div></Row>                                    
                                </Col>
                                <Col>
                                    <Row justify="center"><div className="label">MARCKETS</div></Row>
                                    <Row justify="center"><div className="value">17,101</div></Row>                                    
                                </Col>
                                <Col>
                                    <Row justify="center"><div className="label">BTC DOM INDEX</div></Row>
                                    <Row justify="center"><div className="value">41.9%</div></Row>
                                </Col>
                            </Row>
                        </div>
                    </StyleW>
                </div>
                <StyleW>
                    <Spin size="large" tip="Loading..." style={{display: loading ? "block" : "none"}}/>
                    <Table columns={columnsObject} dataSource={assets} pagination={false} style={{display: loading ? "none" : "block"}} />
                    <Button onClick={loadMore} style={{display: loading ? "none" : "block"}}>View More</Button>
                </StyleW>       
            </Style>
        </DefaultLayout>
    );
}
export default Home;