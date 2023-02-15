import React from "react";
import '../stylesheets/Task.css'
import {RiDeleteBin6Line} from "react-icons/ri"

const Task = ({id, text, completed, taskCompleted, taskDelete}) => {
    return (

        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div
                className='task-text'
                onClick={() => taskCompleted(id)}
            >
                {text}
            </div>
            <div className='icon-container-text'
            onClick={() => taskDelete(id)}>
                < RiDeleteBin6Line className='icon-text'/>
            </div>
        </div>

    )
}

export {Task}