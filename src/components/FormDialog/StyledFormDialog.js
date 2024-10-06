import * as Dialog from '@radix-ui/react-dialog';

import styled from 'styled-components';
import { body, primary } from '../../constants/color';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const Content = styled(Dialog.Content)`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: ${body};
border-radius: 8px;
padding: 20px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
width: 90%;
max-width: 500px;

h1{
    font-size: 20px;
  line-height: 26px;
  text-align: center;
  color:${primary};
}
`;