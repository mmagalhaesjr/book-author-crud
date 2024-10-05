import { StyledHeader } from "./StyledHeadre";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <StyledHeader>

            <Link to={'/'}>
                <div id="BoxImg">
                    <img src={logo} alt="logo" />
                </div>

            </Link>


            <div id="links">
                <Link to={"/"}><p>HOME</p></Link>
                <Link to={"/livros"}><p>LIVROS</p></Link>
                <Link to={"/autores"}><p>AUTORES</p></Link>
               
            </div>


        </StyledHeader>
    )
}