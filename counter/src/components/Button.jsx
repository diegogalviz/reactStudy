import React from "react";
import '../stylesheets/Button.css'

const Button = ({text, isCLick, clickManage}) => {

    return (
        <div>
            <button
                className={isCLick ? 'button-click' : 'button-restart'}
                onClick={clickManage}>


                {text}
            </button>
        </div>)
}

export {Button}

