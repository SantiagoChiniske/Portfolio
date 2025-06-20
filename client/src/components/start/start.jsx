import Textlight from "../textlight/textlight"
import TextBold from "../textbold/textbold"
import Button from "../button/button"

import ImgPerfil from "../../assets/foto-perfil.png"
import ImgGithub from "../../assets/icon-github.svg"
import ImgLinkdln from "../../assets/icon-linkedin.svg"
import "./start.css"


function Start (){
    return(
        <section className="start">
            <div className="start__section">
                <Textlight nome="Santiago Chiniske Pereira"/>
                <TextBold nome="DESENVOLVEDOR FRONT-END"  estilo="text__bold text__size-high" alternativo =" ."/> 


                <div className="start__link">
                <Button
                link="https://github.com/SantiagoChiniske"
                nome="Github"
                imagem={ImgGithub}
                textoalternativo="Logo do Github"
                stylebutton="button__link"
                />
                <Button
                link="https://www.linkedin.com/in/santiago-chiniske-pereira-1402b5212/"
                nome="Linkedin"
                imagem={ImgLinkdln}
                textoalternativo="Logo do Linkedin"
                stylebutton="button__link"
                />
                </div>

            </div>
            <img src={ImgPerfil} alt="Foto de Perfil de Santiago" className="start__img"/>
        </section>
    )
}

export default Start;