import ImgLogo from "../../assets/logo.png"
import "./header.css"
import {Link} from 'react-scroll'

function Header (){

    return(
        <header className="header">
            <span className="header__logo">
                <img src={ImgLogo} alt="Logo </S>" className="header__logo-img"/>
                <p className="header__logo-text">Santiago Chiniske Pereira</p>
            </span>

            <nav className="header__nav">
                <ul className="header__nav-ul">
                    <li><Link to="sobre" smooth={true} offset={200} duration={500} className="header__nav-link">Sobre</Link></li>
                    <li><Link to="projetos" smooth={true} offset={200} duration={500} className="header__nav-link">Trabalhos</Link></li>
                    <li><Link to="contato" smooth={true} offset={200} duration={500} className="header__nav-link">Contatos</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;