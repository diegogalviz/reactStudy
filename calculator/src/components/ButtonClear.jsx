import React from "react";
import '../stylesheets/ButtonClear.css'

const ButtonClear = (props) => {
    return (
        <button className='button-clear'
             onClick={() => props.manageClear()}>
            {props.children}
        </button>
    )
}

export {ButtonClear}