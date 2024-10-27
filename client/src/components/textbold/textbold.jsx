import { children } from "react";
import "./textbold.css"

function TextBold (props){
    return(
        <>
        <h1 className="text__bold">{props.nome} 
        <span className="color__ponto">{props.alternativo}</span></h1> 
        </>
    )
}

export default TextBold;