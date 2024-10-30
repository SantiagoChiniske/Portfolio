import Textlight from "../textlight/textlight"
import TextBold from "../textbold/textbold"
import ImgPersonagem from "../../assets/personagem.png"
import "./about.css"

function About (){
    return(
        <section className="about" id="sobre">
            <img src={ImgPersonagem} alt="" className="about__img"/>

            <div className="about__section">
                <Textlight
                nome="Olá,"/>
                <TextBold
                nome="Um pouco sobre min"
                estilo="text__bold text__size-low"/>
                <p>
                Tenho 21 anos e uma sólida experiência na área de Tecnologia da Informação, com mais de quatro anos de atuação. Nos últimos doze meses, tenho me dedicado ao Desenvolvimento Web, adquirindo e consolidando conhecimentos essenciais e avançados nas tecnologias e frameworks necessários para o desenvolvimento completo de sistemas web.
                <br/><br/>
                Sou uma pessoa extremamente dedicada aos estudos, educada, proativa e com foco constante em aprimorar a eficiência e a agilidade das minhas atividades diárias.
                </p>
            </div>
        </section>
    )
}

export default About