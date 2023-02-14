import './App.css';
import logoDiego from './assets/img/logo_diego.png';
import {Logo} from './components/Logo.jsx';

function App() {
    return (
        <div className="todo-app">
            <Logo ruta={logoDiego} />

        </div>
    );
}

export default App;
