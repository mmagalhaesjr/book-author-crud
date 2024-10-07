import styled from "styled-components";



import fundo from '../../assets/fundo.png'
const foto = `url(${fundo})`;

export const StyledHome = styled.main`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    background-image: ${foto};
    background-size: cover;
    background-repeat: no-repeat;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledBook = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 100px;
   
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

