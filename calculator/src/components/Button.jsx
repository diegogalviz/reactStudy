import React from "react";
import '../stylesheets/Button.css'

const Button = (props) => {

    const operator= valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return(
        <div
            className={`button-container ${operator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.manageButton(props.children)}>
            {props.children}
        </div>
    )
}

export {Button}