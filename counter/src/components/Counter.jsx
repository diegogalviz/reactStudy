import React from "react";
import '../stylesheets/Counter.css'

const Counter = ({numClicks}) => {
    return (
        <div className='counter'>
            {numClicks}
        </div>
    )
}

export {Counter}