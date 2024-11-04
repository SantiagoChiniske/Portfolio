import "./projetos.css"
import CardProjetos from "../card-projetos/cardprojetos"
import Projeto1 from "../../assets/trabalho-taina.png"
import ImgHTML from "../../assets/logo-html.png"
import ImgCSS from "../../assets/logo-css.png"
import ImgFigma from "../../assets/logo-figma.png"
import ImgJS from "../../assets/logo-js.png"
import ImgReact from "../../assets/logo-react.png"
import ImgTypescript from "../../assets/logo-typescript.png"
import ImgNext from "../../assets/logo-next.png"
import ImgProjetoConstrucao from "../../assets/projeto-construcao.png"
import ImgUnidos from "../../assets/projeto-unidos.png"



function Projetos () {

    return(
        <main className="main__projetos" id="projetos">
            <h1 className="main__projetos-titulo"><span>Projetos </span></h1>

            <section className="main__projetos-section">
                <CardProjetos
                    imagem={Projeto1}
                    titulo="Portfolio Taina"
                    texto="Projeto desenvolvido pela Designer Taina e dado a vida por mim."
                    tech1={ImgReact}
                    tech2={ImgCSS}
                    link1="https://portfolio-git-main-rtaina-s-projects.vercel.app/"
                    link2="https://github.com/Tainaa28/portfolio"
                    styleButton1="button__link"
                    styleButton2="button__link"
                    />
                    <CardProjetos
                    imagem={ImgUnidos}
                    titulo="Projeto Unidos do Brasil"
                    texto="Projeto desenvolvido para revitalização do Site e criar uma idetidade para uma funerâria atraindo mais clientes para empressa, trazendo assim engajamento para marca."
                    tech1={ImgNext}
                    tech2={ImgCSS}
                    link1={'#'}
                    link2="https://www.unidosdobrasil.com.br/"
                    styleButton1="disable"
                    styleButton2="button__link"
                    />
                    <CardProjetos
                    imagem={ImgProjetoConstrucao}
                    titulo="Em Construção"
                    texto="Em breve novos projetos..."
                    styleButton1="disable"
                    styleButton2="disable"
                    />
                    
            </section>
        </main>
    )
}


export default Projetos