import "./projetos.css"
import CardProjetos from "../card-projetos/cardprojetos"
import Projeto1 from "../../assets/trabalho-taina.png"
import ImgHTML from "../../assets/icon-html.svg"
import ImgCSS from "../../assets/icon-css.svg"
import ImgJS from "../../assets/icon-js.svg"
import ImgReact from "../../assets/icon-react.svg"
import ImgNext from "../../assets/icon-next.svg"
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
                    tech3={ImgCSS}
                    tech2={ImgHTML}
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