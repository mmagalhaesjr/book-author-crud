import styled from "styled-components";
import { body, header } from "../../constants/color";

export const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    background-color: ${header};

    display: flex;
    align-items: center;
    justify-content: center;

    #BoxImg{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
       
    }

    img{
        width: 100px;
    }

    #links{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
       
    }

    p{
        color: ${body};
    }

`