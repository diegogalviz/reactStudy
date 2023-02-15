import React from 'react'
import {TaskForm} from "./TaskForm";
import '../stylesheets/TaskList.css'
import {useState} from "react";
import {Task} from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    return(
        <>
            <TaskForm/>
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                    <Task
                       text={task.text}
                       completed={task.completed}
                    />
                    )
                }
            </div>
        </>
    )
}

export {TaskList}