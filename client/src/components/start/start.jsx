import Textlight from "../textlight/textlight"
import TextBold from "../textbold/textbold"
import Button from "../button/button"

import ImgPerfil from "../../assets/foto-perfil.png"
import ImgGithub from "../../assets/logo-github.png"
import ImgLinkdln from "../../assets/logo-linkedln.png"
import "./start.css"


function Start (){
    return(
        <section className="start">
            <div className="start__section">
                <Textlight nome="Santiago Chiniske Pereira"/>
                <TextBold nome="DESENVOLVEDOR FRONT-END" alternativo =" ."/> 


                <div className="start__link">
                <Button
                link="https://github.com/SantiagoChiniske"
                nome="Github"
                imagem={ImgGithub}
                textoalternativo="Logo do Github"
                />
                <Button
                link="https://www.linkedin.com/in/santiago-chiniske-pereira-1402b5212/"
                nome="Linkedin"
                imagem={ImgLinkdln}
                textoalternativo="Logo do Linkedin"
                />
                </div>

            </div>
            <img src={ImgPerfil} alt="Foto de Perfil de Santiago" className="start__img"/>
        </section>
    )
}

export default Start;