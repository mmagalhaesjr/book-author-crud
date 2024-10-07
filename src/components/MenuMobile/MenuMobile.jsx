import { Link } from "react-router-dom";
import { StyledMenuMobile } from "./styled";



// eslint-disable-next-line react/prop-types
export default function MenuMobile({ mobileAtivado }) {


  return (
    <StyledMenuMobile mobile={mobileAtivado}>
      <nav>
        <Link to={"/"} >HOME</Link>
        <Link to={"/livros"} >LIVROS</Link>
        <Link to={"/autores"} >AUTORES</Link>
      </nav>
    </StyledMenuMobile>
  );
}
