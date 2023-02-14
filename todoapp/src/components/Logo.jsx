import React from "react";
import '../stylesheets/Logo.css'

const Logo = (props) => {
    return (<div className='logo-container'>
            <img
                className='logo-diego'
                src={props.ruta}
                alt="Logo diego"/>
        </div>)
}

export {Logo}