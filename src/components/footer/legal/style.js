import styled from "styled-components";

export const Style = styled.div `
    ul{
        padding-left: 0;
        li{
            a{
                color:white;
                opacity: 0.5;
                &:hover {
                    color: white;
                    opacity: unset;
                }
            }
        }
    }
    p{
        font-size: 1.2rem;
        padding : 0;
        color : white;
        margin-top: 5px;
    }
    span{
        color:white;
        opacity: 0.5; 
    }
`;
export default Style;