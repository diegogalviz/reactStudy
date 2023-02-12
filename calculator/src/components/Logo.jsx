import React from "react";

import '../stylesheets/Logo.css'

const Logo = ({ruta}) => {
    return (
        <div className='logo-diego-container'>
            <img
                className='logo-diego'
                src={ruta}
                alt="logo de diego galviz"/>
        </div>
    )
}

export {Logo}