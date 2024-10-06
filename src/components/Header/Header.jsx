import { StyledHeader, StyledImg, StyledLink } from "./StyledHeader";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <StyledHeader>

            <StyledImg to={'/'}>
                <div id="BoxImg">
                    <img src={logo} alt="logo" />
                </div>
            </StyledImg>


            <StyledLink>
                <Link to={"/"}><p>HOME</p></Link>
                <Link to={"/livros"}><p>LIVROS</p></Link>
                <Link to={"/autores"}><p>AUTORES</p></Link>
            </StyledLink>


        </StyledHeader>
    )
}