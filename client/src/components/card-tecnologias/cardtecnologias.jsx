import "./cardtecnologias.css"

function CardTecnologias({imagem,nome,alternativo}){
    return(
        <div className="card">
            <img src={imagem} alt={alternativo} className="card__img" />
            <p className="card__texto">{nome}</p>
        </div>
    )
}

export default CardTecnologias