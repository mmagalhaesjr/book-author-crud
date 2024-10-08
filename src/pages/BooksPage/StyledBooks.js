import styled from "styled-components";



export const StyledContainer = styled.div`
width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


section{
    width: 100%;
    height: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap:20px;
}


#bottonCreate{
    width: 300px;
    height: 50px;
    border: none;
    cursor: pointer;
    background: linear-gradient(0deg, rgba(82,46,139,1) 0%, rgba(247,218,247,1) 100%);
    font-weight: bolder;
    color: #ffffff;
    text-shadow: 0px 1px 0px #2f0177;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    
&:hover{
    background: linear-gradient(0deg, rgba(247,218,247,1) 0%, rgba(82,46,139,1) 100%);
}
}

`

export const StyledTabela = styled.div`
width: 50%;
max-height: 700px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap: 5px;
border: solid 5px #ffffff06;

h1{
    font-size: 2rem;
    color: #ffffff;
    
    letter-spacing: 1px;
}


overflow: auto;
 &::-webkit-scrollbar {
         width: 3px;
         height: 5px; 
         border: solid 2px #000000ff;
         border-radius: 5px;
     }
     &::-webkit-scrollbar-thumb {
         background-color: #fffffffd;
         border-radius: 5px;
         width: 5px;
         height: 10px; 
     }

 
@media (max-width:600px) {
    width: 100%;
  }

`