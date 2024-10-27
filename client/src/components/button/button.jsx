import "./button.css"

function Button ({link,nome,imagem,textoalternativo}){
    return(
        <a href={link} className="button__link">
            <p>{nome}</p>                  
            <img src={imagem} alt={textoalternativo}/>
        </a>
    )
}

export default Button;