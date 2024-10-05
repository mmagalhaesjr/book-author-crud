import styled from "styled-components";
import { text } from "../../constants/color";




export const StyledHome = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${text};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    /* @media (max-width:600px) {
        height: 75vh;
    } */

   


`

export const StyledBook = styled.div`
    width: 100%;
    height: 100vh;
   
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 10px;

    

  
        img{
            width:100px;
            transition: transform 0.3s ease-in-out;

            &:hover{
                transform:  translateY(-10px)
            }
        }

       

  
`

