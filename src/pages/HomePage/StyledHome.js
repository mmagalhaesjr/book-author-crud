import styled from "styled-components";

import foto1 from '../../assets/livro1.png'
const livro1 = `url(${foto1})`;

import foto2 from '../../assets/livro2.png'
const livro2 = `url(${foto2})`;


export const StyledHome = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;


`

export const StyledBook = styled.div`
    width: 100%;
    height: 100vh;
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: center;

    #pagina1{
        width: 50%;
        height: 100vh;

        background-image: ${livro1};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 5% 5%;
    }

    #pagina2{
        width: 50%;
        height: 100vh;

        background-image: ${livro2};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 5% 5%;
    }
`

