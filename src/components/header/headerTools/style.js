import styled from "styled-components";

export const Style = styled.div `
    display : block;
    ul {
        display: flex;
        align-items: baseline;
        li{
            a{
                padding: 20px;
                display: inline-block;
                Button{
                    border-color: rgb(24,198,131);
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                    color:white;
                    background: rgb(24, 198, 131) !important;
                    border-radius:30px;
                    &:hover{
                        color:white;
                        transform: translateY(-2px);
                    }
                    &:focus{
                        color:white;
                    }
                }
            }
        }
    }
    .anticon{
        color: black;
        font-size: 16px;
    }
    
`;
export default Style;