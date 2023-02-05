import './App.css';
import {About} from "./components/About";

function App() {
    return (<div className="App">
        <div className='container-app'>
            <h1>Nuestro equipo</h1>

            <About
                name='Salomè Galviz Luna'
                country='Colombia'
                profession='Mujer Feliz'
                image='2'
                description='niña de siente años hija de DIOS'
            />

            <About
                name='Salomè Galviz Luna'
                country='Colombia'
                profession='Mujer Feliz'
                image='1'
                description='niña de siente años hija de DIOS'
            />

            <About
                name='Salomè Galviz Luna'
                country='Colombia'
                profession='Mujer Feliz'
                image='3'
                description='niña de siente años hija de DIOS'
            />


        </div>
    </div>);
}

export default App;
