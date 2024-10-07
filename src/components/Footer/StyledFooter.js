import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    /* height: 60%; */

    display: flex;
    align-items: start;
    justify-content: center;

    img{
            width: 600px;
        }


    @media (max-width:600px) {
        img{
            width: 120%;
        }
    }


`