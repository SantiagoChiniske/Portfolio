import "./contato.css"
import Textlight from "../textlight/textlight"
import TextBold from "../textbold/textbold"
import ImgLinkedin from "../../assets/logo-linkedln.png"
import ImgGitHub from "../../assets/logo-github.png"

function Contato (){

    return(

    <section className="contato" id="contato">
        <form className="contato__form" >
            <Textlight nome="Entre em"/>
            <TextBold nome="Contato" estilo="text__bold text__size-high"/>


        <p className="contato__info">
            <span >E-mail:</span><a href="mailto:santiagocpereira10@gmail.com?subject=Criação de sites">Santiagocpereira10@gmail.com</a><br /> <br />
            <span >Telefone:</span><a href="https://wa.me/5541998487176?text=Ol%C3%A1%20!%20%20Gostei%20do%20seu%20perfil%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20ou%20entrar%20em%20contato%20contigo."> (41)998487176</a>
        </p>

        {/* 
            <label htmlFor="" className="contato__forms-input">
                <input type="text" placeholder="Insira seu nome" className="contato__forms-text" />
                <input type="email" placeholder="Insira seu e-mail" className="contato__forms-email"/>
                <textarea name="" id="" placeholder="Escreva oque voce precisa" className="contato__forms-textarea"></textarea>
                <button className="contato__forms-button">Enviar</button>
            </label>

        */} 

        </form>

        <div className="contato__rede-sociais">
            <Textlight nome="Redes"/>
            <TextBold nome="Sociais" estilo="text__bold text__size-high"/>
            
            <div className="rede-sociais__icones">
                <div className="icones">
                    <img src={ImgLinkedin} alt="Icone do Linkedin" />
                    <a href="https://www.linkedin.com/in/santiago-chiniske-pereira-1402b5212/">Linkedin</a>
                </div>
                <div className="icones">
                    <img src={ImgGitHub} alt="Icone do GitHub" />
                    <a href="https://github.com/SantiagoChiniske">GitHub</a>
                </div>
    
            </div>

        </div>
        

    </section>

    )

    
}

export default Contato