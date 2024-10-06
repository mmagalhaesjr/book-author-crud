import { StyledFooter } from './StyledFooter';
import estante from '../../assets/estante.png';

export default function Footer() {
    return (
        <StyledFooter>
            <img id="estante" src={estante} alt="img" />
        </StyledFooter>
    )
}