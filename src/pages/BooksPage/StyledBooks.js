import styled from "styled-components";


export const StyledContainer = styled.div`
width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


section{
    width: 90%;
    height: 70%;
    border: solid 2px red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

#boxInfoBooks{

    border: solid 2px blue;
}

button{
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: linear-gradient(0deg, rgba(82,46,139,1) 0%, rgba(247,218,247,1) 100%);

    font-size: 12px;
    font-weight: bolder;
    color: #ffffff;
    text-shadow: 0px 1px 0px #2f0177;
    
&:hover{
    background: linear-gradient(0deg, rgba(247,218,247,1) 0%, rgba(82,46,139,1) 100%);
}
}

`

export const StyledTabela = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  border: solid 2px blue;


#nameBook{
    border: solid 2px orange;
}

`