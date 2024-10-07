import styled from 'styled-components';
import  { css } from 'styled-components';




export const StyledMenuMobile = styled.div`
  position: fixed; 
  top: 100px; 
  width: 100%;
  height: calc(50vh - 100px);
  background-color: #000000d3;
  z-index: 999; 
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  color: #ffffff;

  .nav-lista {
    text-align: center;
    color: #ffffff;
  }

  nav {
    width: 100%;
    height: 100%;
    color: #ffffff;
    flex-direction: column;
    transform: scale(0);
    transition: 1s;
    
    gap: 1rem;

    display: flex;
    align-items: start;
    justify-content: center;
  }

  a {
    font-weight: 200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16px;
    color: #ffffff;

    &:hover {
      /* width: 100%; */
      transition: 1s;
      background-color: #a0027ebf;
    }
  }

  #cxicones{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circuloIcone{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;

    display: flex; 
    align-items: center;
    justify-content: center;
  }
  .icone{
    font-size: 1.5rem;
    color: #000000;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      opacity: 1;
      pointer-events: auto;
      transition: 0.7s;
      transform: translateX(0);
      color: #ffffff;

      nav {
        transform: scale(1);
      }
    `}
`;
