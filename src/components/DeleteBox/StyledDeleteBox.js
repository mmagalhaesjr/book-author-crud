
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import styled from 'styled-components';



export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const Content = styled(AlertDialog.Content)`
width: 90%;
max-width: 500px;
height: 200px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgba(0, 0, 0, 0.5);
border-radius: 8px;
padding: 20px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

#boxText{
  width: 100%;
  height: 60%;
  color:#ffffff;
  line-height: 1.5;
}

#boxButton{
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

}

button{
    width: 200px;
    height: 50px;
    border: none;
    cursor: pointer;
    background: linear-gradient(0deg, rgba(82,46,139,1) 0%, rgba(247,218,247,1) 100%);
    font-weight: bolder;
    color: #ffffff;
    text-shadow: 0px 1px 0px #2f0177;
    font-size:1rem;
    display: flex;
    justify-content: center;
    align-items: center;

}



`;