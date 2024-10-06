import styled from "styled-components"
import { body, primary } from "../constants/color"

const StyledButton = styled.button`
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  background: ${primary};
  color:${body};
`

export default StyledButton