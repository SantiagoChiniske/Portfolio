import "./tecnologias.css"
import CardTecnologias from "../card-tecnologias/cardtecnologias"

import IconHtml from "../../assets/icon-html.svg"
import IconCss from "../../assets/icon-css.svg"
import IconJs from "../../assets/icon-js.svg"
import IconReact from "../../assets/icon-react.svg"
import IconNext from "../../assets/icon-next.svg"
import IconFigma from "../../assets/icon-figma.svg"
import IconSass from "../../assets/icon-sass.svg"
import IconUbuntu from "../../assets/icon-ubuntu.svg"
import IconGit from "../../assets/icon-git.svg"
import IconGitHub from "../../assets/icon-gitbub-default.svg"





function Tecnologias(){
    return(
        <main className="main__tecnologias">
            <h1 className="main__tecnologias-titulo">Tecnologias</h1>

            <section className="section__tecnologias">
                <CardTecnologias
                imagem={IconHtml}
                nome="HTML"
                alternativo="Logo HTML"
                />
                <CardTecnologias
                imagem={IconCss}
                nome="CSS"
                alternativo="Logo CSS"
                />
                <CardTecnologias
                imagem={IconJs}
                nome="Javascript"
                alternativo="Logo do Javascript"
                />
                <CardTecnologias
                imagem={IconReact}
                nome="REACT"
                alternativo="Logo REACT"
                />
                <CardTecnologias
                imagem={IconNext}
                nome="Next"
                alternativo="Logo Next"
                />

            </section>
            <section className="section__tecnologias">
                
                <CardTecnologias
                imagem={IconFigma}
                nome="Figma"
                alternativo="Logo Figma"
                />
                <CardTecnologias
                imagem={IconSass}
                nome="Sass"
                alternativo="Logo Sass"
                />
                <CardTecnologias
                imagem={IconUbuntu}
                nome="Ubuntu"
                alternativo="Logo Ubuntu"
                />
                 <CardTecnologias
                imagem={IconGit}
                nome="Git"
                alternativo="Logo Git"
                />
                <CardTecnologias
                imagem={IconGitHub}
                nome="GitHub"
                alternativo="Logo GitHub"
                />
               
            </section>
        </main>
    )
}

export default Tecnologias