import { StyledBook, StyledHome } from "./StyledHome";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import livro from '../../assets/livro.png';
import autor from '../../assets/autor.png';
import sobre from '../../assets/sobre.png';

import { Link } from "react-router-dom";


export default function HomePage() {

    return (

        <StyledHome>

            <Header />

            <StyledBook>
               <Link to={"/livros"}><img src={livro} alt="img" /></Link> 
               <Link to={"/autores"}><img src={autor} alt="img" /></Link> 
               <Link to={"#"}><img src={sobre} alt="img" /></Link> 
            </StyledBook>

            <Footer />

        </StyledHome>

    )

}