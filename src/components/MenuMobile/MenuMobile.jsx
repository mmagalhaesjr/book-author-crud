import { Link } from "react-router-dom";
import { StyledMenuMobile } from "./styled";
import PropTypes from "prop-types";


export default function MenuMobile({ mobileAtivado }) {

  return (
    <StyledMenuMobile mobile={mobileAtivado.toString()}>
      <nav>
        <Link to={"/"} >HOME</Link>
        <Link to={"/livros"} >LIVROS</Link>
        <Link to={"/autores"} >AUTORES</Link>
      </nav>
    </StyledMenuMobile>
  );
}


MenuMobile.propTypes = {
  mobileAtivado: PropTypes.bool.isRequired,
};