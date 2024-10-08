import styled, { css } from "styled-components";
import { body, header } from "../../constants/color";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: ${header};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .linha {
    width: 40px;
    height: 5px;
    background-color: #ffffff;
    margin: 6px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 600px) {
    justify-content: space-evenly;

    button {
      display: grid;
    }

    ${({ mobile }) =>
      mobile &&
      css`
        .linha:nth-child(1) {
          transform: translateY(15px) rotate(50deg);
        }

        .linha:nth-child(2) {
          opacity: 0;
        }

        .linha:nth-child(3) {
          transform: translateY(-20px) rotate(-50deg);
        }
      `}
  }
`;

export const StyledLink = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: ${body};
    letter-spacing: 3px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledImg = styled(Link)`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
  }
`;
