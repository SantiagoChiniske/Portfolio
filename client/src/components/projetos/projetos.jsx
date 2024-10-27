import "./projetos.css"
import CardProjetos from "../card-projetos/cardprojetos"
import Projeto1 from "../../assets/trabalho-taina.png"
import ImgHTML from "../../assets/logo-html.png"
import ImgCSS from "../../assets/logo-css.png"
import ImgFigma from "../../assets/logo-figma.png"
import ImgJS from "../../assets/logo-js.png"
import ImgReact from "../../assets/logo-react.png"
import ImgTypescript from "../../assets/logo-typescript.png"

function Projetos () {

    return(
        <main className="main__projetos">
            <h1 className="main__projetos-titulo"><span>Projetos </span></h1>

            <section className="main__projetos-section">
                <CardProjetos
                    imagem={Projeto1}
                    titulo="titulo"
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                    tech1={ImgJS}
                    tech2={ImgJS}
                    tech3={ImgJS}
                    link1="#"
                    link2="#"
                    />
                    <CardProjetos
                    imagem={Projeto1}
                    titulo="titulo"
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                    tech1={ImgJS}
                    tech2={ImgJS}
                    tech3={ImgJS}
                    link1="#"
                    link2="#"
                    />
                    <CardProjetos
                    imagem={Projeto1}
                    titulo="titulo"
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                    tech1={ImgJS}
                    tech2={ImgJS}
                    tech3={ImgJS}
                    link1="#"
                    link2="#"
                    />
                    
            </section>
        </main>
    )
}


export default Projetos