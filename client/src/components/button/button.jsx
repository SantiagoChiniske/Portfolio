import "./button.css"

function Button ({link,nome,imagem,textoalternativo, stylebutton}){
    return(
        <a href={link} className={stylebutton}>
            <p>{nome}</p>                  
            <img src={imagem} alt={textoalternativo}/>
        </a>
    )
}

export default Button;