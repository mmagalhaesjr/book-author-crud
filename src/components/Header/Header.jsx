import { StyledHeader, StyledImg, StyledLink } from "./StyledHeader";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useState } from "react";

export default function Header() {
  const [mobileAtivado, setMobileAtivado] = useState(false);

  function mobile() {
    setMobileAtivado(!mobileAtivado);

    if (!mobileAtivado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <StyledHeader mobile={mobileAtivado}>

      <MenuMobile mobileAtivado={mobileAtivado} setMobileAtivado={setMobileAtivado} />

    

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

      <button onClick={mobile}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </button>

    </StyledHeader>
  );
}
