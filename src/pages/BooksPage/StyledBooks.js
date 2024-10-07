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
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  border: solid 2px blue;


#container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px;
    border: solid 2px orange;
   
}

p{
    width: 70%;
    color: #ffffff;
    font-size: 20px;
}
span{
    font-weight: bold;
}

#buttonDetails{
    width: fit-content;
    height: 50px;
    background-color: #05860a;
    color: #ffffff;
    padding: 5px;
    font-weight: bolder;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

}
#buttonDelete{
    width: fit-content;
    height: 50px;
    background-color: #860505;
    color: #ffffff;
    padding: 5px;
    font-weight: bolder;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

`