import styled from "styled-components";


export const Style = styled.div `
    .backBanner{
        background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255) ;
        border: none ;
        padding-bottom: 135px ;
        position:relative;
        top:0;
        left:0;
        width:100%;
        .backBannerOpt{
            line-height: 1.2;
            padding: 80px 30px 0 30px;
            font-size: 16px;
            color: #ffffff;
            .label{
                margin-top: 10px;
                font-size: 15px;
                font-weight: bold;
            }
            .value{
                font-size: 25px;
            }
        }    
    }
    .ant-spin{
        font-size: 1.4rem;
        margin-top: 10px;
    }
    .ant-table-content{
        table{
            background: #ffffff;
            box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px !important;
            color: rgba(0,0,0,.87);
            margin-top: -110px;
            left: 0;
            width: 100%;
            .symbol{
                display:inline;
            }
            .id{
                margin: 0 0 0 44px;
            }
            img{
                display: inline-block;
                width: 35px;
                height: auto;
                margin-right: 8px;
            }
        }
    }
    Button{
        display: block;
        margin: 20px auto;
        color:white;
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        background: rgb(24, 198, 131) !important;
        border-radius:25px;
        &:hover{
            color:white;
            transform: translateY(-2px);
        }
        &:focus{
            color:white;
        }
    }
`;
export default Style;