import "./tecnologias.css"
import CardTecnologias from "../card-tecnologias/cardtecnologias"

import ImgHTML from "../../assets/logo-html.png"
import ImgCSS from "../../assets/logo-css.png"
import ImgFigma from "../../assets/logo-figma.png"
import ImgJS from "../../assets/logo-js.png"
import ImgReact from "../../assets/logo-react.png"
import ImgTypescript from "../../assets/logo-typescript.png"

function Tecnologias(){
    return(
        <main className="main__tecnologias">
            <h1 className="main__tecnologias-titulo">Tecnologias</h1>

            <section className="section__tecnologias">
                <CardTecnologias
                imagem={ImgHTML}
                nome="HTML"
                alternativo="Logo HTML"
                />
                <CardTecnologias
                imagem={ImgCSS}
                nome="CSS"
                alternativo="Logo CSS"
                />
                <CardTecnologias
                imagem={ImgJS}
                nome="Javascript"
                alternativo="Logo do Javascript"
                />
                <CardTecnologias
                imagem={ImgReact}
                nome="REACT"
                alternativo="Logo REACT"
                />
            </section>
            <section className="section__tecnologias">
                <CardTecnologias
                imagem={ImgTypescript}
                nome="Typescript"
                alternativo="Logo Typescript"
                />
                <CardTecnologias
                imagem={ImgFigma}
                nome="Figma"
                alternativo="Logo Figma"
                />
               
            </section>
        </main>
    )
}

export default Tecnologias