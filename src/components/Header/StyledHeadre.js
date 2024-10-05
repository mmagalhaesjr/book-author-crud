import styled from "styled-components";
import { body, header } from "../../constants/color";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    background-color: ${header};

    display: flex;
    align-items: center;
    justify-content: center;


   

  


`


export const StyledLink = styled(Link)`
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
    p{
        color: ${body};
        letter-spacing:3px;
    }
 
 `

export const StyledImg = styled(Link)`


        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
       
    

    img{
        width: 100px;
    }
`