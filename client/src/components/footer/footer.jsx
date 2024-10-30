import "./footer.css"
import ImgIconeFooter from "../../assets/icone-footer.png"

function Footer (){
    return(
        <footer className="footer">

            <p className="footer__texto">
              <img src={ImgIconeFooter} alt="Icone React " className="footer__img" />  
              Desenvolvido por Santiago Chiniske Pereira
            </p>
            <p className="footer__texto">
              © 2024 | Santiago Chiniske | todos os direitos reservados  
            </p>
        </footer>
    )
}

export default Footer