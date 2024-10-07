import styled from "styled-components";



export const StyledContainer = styled.div`
width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#titulo{
    font-size: 2rem;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 20px;
}


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

    
&:hover{
    background: linear-gradient(0deg, rgba(247,218,247,1) 0%, rgba(82,46,139,1) 100%);
}
}

p{
    text-align: center;
    width: 70%;
    color: #ffffff;
    font-size: 20px;
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

border-top: solid 5px #ffffff06;
border-bottom: solid 5px #ffffff06;

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

 


#container{
    width: 100%;
    max-width: 950px;
    gap: 5px;
    padding: 5px;
    background-color: #ffffff1c;

    display: flex;
    align-items: center;
    justify-content:center;
}



#container p{
    width: 80%;
    color: #ffffff;
    font-size: 1.3rem;
    text-align: left;
    /* border: solid 2px red; */
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
    cursor: pointer;

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
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

@media (max-width:600px) {
    width: 100%;

    #container p{
    width: 80%;
    color: #ffffff;
    font-size:15px;
    text-align: left;
    /* border: solid 2px red; */
}
  }

`