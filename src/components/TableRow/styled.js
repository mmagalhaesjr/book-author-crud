import styled from "styled-components";

export const StyledRow = styled.div`
    width: 100%;
    max-width: 950px;
    gap: 5px;
    padding: 5px;
    padding-left: 25px;
    background-color: #ffffff1c;
    display: flex;
    align-items: center;
    justify-content:center;

p{
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
 p{
    width: 80%;
    color: #ffffff;
    font-size:15px;
    text-align: left;
    /* border: solid 2px red; */
}
  }

`