import React from "react";
import '../stylesheets/TaskForm.css'

const TaskForm = (props) => {
    return (
        <form className='task-form'>

            <input
                type="text"
                className='task-input'
                placeholder='Escribe una tarea'
                name='texto'
            />

            <button
                className='button-task'

            >
            Add task
            </button>



        </form>
    )
}

export {TaskForm}