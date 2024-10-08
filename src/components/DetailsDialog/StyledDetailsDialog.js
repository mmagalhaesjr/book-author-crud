import * as Dialog from '@radix-ui/react-dialog';

import styled from 'styled-components';
import { body } from '../../constants/color';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.651);
  backdrop-filter: blur(5px);

  
`;

export const Content = styled(Dialog.Content)`
width: fit-content;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(5px);
border-radius: 8px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
padding: 30px;


h1{
  font-size: 20px;
  line-height: 26px;
  text-align: left;
  color:${body};
  margin: 10px;
}

span{
  font-weight: bold;
}

@media (max-width:600px) {
  width:95%;
}
`;