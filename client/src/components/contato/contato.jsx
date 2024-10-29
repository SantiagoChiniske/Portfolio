import "./contato.css"
import Textlight from "../textlight/textlight"
import TextBold from "../textbold/textbold"
import ImgLinkedin from "../../assets/logo-linkedln.png"
import ImgGitHub from "../../assets/logo-github.png"

function Contato (){

    return(

    <section className="contato">
        <form className="contato__form" >
            <Textlight nome="Entre em"/>
            <TextBold nome="Contato" estilo="text__bold text__size-high"/>

            <label htmlFor="" className="contato__forms-input">
                <input type="text" placeholder="Insira seu nome" className="contato__forms-text" />
                <input type="email" placeholder="Insira seu e-mail" className="contato__forms-email"/>
                <textarea name="" id="" placeholder="Escreva oque voce precisa" className="contato__forms-textarea"></textarea>
                <button className="contato__forms-button">Enviar</button>
            </label>

            

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