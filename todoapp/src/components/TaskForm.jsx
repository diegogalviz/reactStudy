import React, {useState} from "react";
import '../stylesheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

const TaskForm = (props) => {
    const [input, setInput] = useState('')

    const manageChange = (e) => {
        let value = e.target.value
        setInput(value)
        console.log(input)
    }
    const manageSend = (e) => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(newTask)

    }


    return (<form
            onSubmit={manageSend}
            className='task-form'>

            <input
                type="text"
                className='task-input'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manageChange}
            />

            <button
                className='button-task'

            >
                Add task
            </button>


        </form>)
}

export {TaskForm}