import "./cardprojetos.css"
import Button from "../button/button"
import ImgGithub from "../../assets/icon-github.svg"
import ImgDeploy from "../../assets/icon-deploy.svg"

function CardProjetos ({imagem,titulo,texto,tech1,tech2,tech3,link1,link2,styleButton1,styleButton2}){
    return(
        <div className="card__projetos">
            <img src={imagem} alt="" className="card__projetos-img" />  

            <div className="card__section">
                <h1 className="card__section-titulo">{titulo}</h1>
                <p className="card__section-texto">{texto}</p>
                <div className="card__section-img">
                    <img src={tech1} alt="" />
                    <img src={tech2} alt="" />
                    <img src={tech3} alt="" />
                </div>
                <div className="card__section-button">
                    <Button
                    link={link1}
                    nome="GITHUB"
                    imagem={ImgGithub}
                    stylebutton={styleButton1}
                    />
                    <Button
                    link={link2}
                    nome="DEPLOY"
                    imagem={ImgDeploy}
                    stylebutton={styleButton2}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardProjetos