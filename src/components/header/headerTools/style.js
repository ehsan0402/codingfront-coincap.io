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
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                    border-radius: 10px;
                }
            }
        }
    }
    
`;
export default Style;