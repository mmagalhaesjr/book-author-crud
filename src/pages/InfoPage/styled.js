import styled from "styled-components";
import { body, primary, secundary } from "../../constants/color";


export const StyledContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 100px;
font-size: 15px;

section{
    display: flex;
    height: fit-content;
    min-height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${body};
}

h2{
    margin-bottom: 20px;
    background-color: ${body};
    color: ${primary};
    border-radius: 25px;
    padding: 10px;
    font-weight: bold;
}
div{
    display: flex;
align-items: center;
}
}
`

export const StyledItem = styled.div`

margin-bottom: 10px;
width: 90%;
min-height: 50px;
padding: 15px;
background-color: ${secundary};
border-radius: 25px;
color: ${body};

p{
    line-height: 20px;
    
text-align: left;
}
`


export const StyledRules = styled.div`

margin-bottom: 10px;
width: 85%;
min-height: 30px;
padding: 15px;
background-color: ${body};
border-radius: 25px;
color: ${primary};
    

`
export const StyledInfo = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 
@media (max-width:600px) {
    width: 100%;
  }

`