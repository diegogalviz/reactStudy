import React, {useState} from 'react'
import {TaskForm} from "./TaskForm";
import '../stylesheets/TaskList.css'
import {Task} from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim()

            const updatedTask = [task, ...tasks]
            setTasks(updatedTask)
        }
    }

    const taskDelete = (id) => {
        const updatedTask = tasks.filter(task => task.id !== id);
        setTasks(updatedTask)
    }

    const taskCompleted = (id) => {
        const updatedTask = tasks.map(task => {
            if(task.id === id){
                task.completed= !task.completed
            }
            return task
        })
        setTasks(updatedTask)
    }


    return (
        <>
            <TaskForm onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            taskCompleted={taskCompleted}
                            taskDelete={taskDelete}
                        />
                    )
                }
            </div>
        </>
    )
}

export {TaskList}