import styled from "styled-components";


export const Style = styled.div `
    .ant-spin{
        font-size: 1.4rem;
        margin-top: 10px;
    }
    .ant-table-content{
        table{
            background:#ffffff;
            box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px !important;
            border: none
            border-radius: 
            color: rgba(0,0,0,.87);
            border-collapse: separate;
            margin-top: -110px;
            left: 0;
            width: 100%;
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
        }
        &:focus{
            color:white;
        }
    }
`;
export default Style;