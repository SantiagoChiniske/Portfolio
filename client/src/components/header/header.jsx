import ImgLogo from "../../assets/logo.png"
import "./header.css"

function Header (){

    return(
        <header className="header">
            <span className="header__logo">
                <img src={ImgLogo} alt="Logo </S>" className="header__logo-img"/>
                <p className="header__logo-text">Santiago Chiniske Pereira</p>
            </span>

            <nav className="header__nav">
                <ul className="header__nav-ul">
                    <li><a href="#" className="header__nav-link">Sobre</a></li>
                    <li><a href="#" className="header__nav-link">Trabalhos</a></li>
                    <li><a href="#" className="header__nav-link">Contatos</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;