import { Styledfooter } from './StyledFooter';

import estante from '../../assets/estante.png';

export default function Footer() {
    return (
        <Styledfooter>
            <img id="estante" src={estante} alt="img" />
        </Styledfooter>
    )
}