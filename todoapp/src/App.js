import './App.css';
import logoDiego from './assets/img/logo_diego.png';
import {Logo} from './components/Logo.jsx';
// import {Task} from "./components/Task";
// import {TaskForm} from "./components/TaskForm";
import {TaskList} from "./components/TaskList";

function App() {
    return (<div className="todo-app">
            <Logo ruta={logoDiego}/>
            <div className='todo-app-container'>
                <h1>TODOAPP</h1>
                <TaskList/>



            </div>

        </div>


    );
}

export default App;
