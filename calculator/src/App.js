import './App.css';
import logoDiego from './assets/img/logo_diego.png'
import {Button} from "./components/Button";
import {Display} from "./components/Display";
import {ButtonClear} from "./components/ButtonClear";
import {useState} from "react";
import {evaluate} from 'mathjs';
import {Logo} from "./components/Logo";

function App() {
    // Funciones
    const [input, setInput] = useState('')

    const addInput = (val) => {
        setInput(input + val)
    };

    const manageClear = () => {
        setInput('')
    };

    const result = () => {
        if (input) {
            setInput(evaluate(input))
        } else {
            alert('Por favor ingrese un valor')
        }
    };

    return (
        <div className='App'>
            <Logo ruta={logoDiego}/>
            <div className='container'>
                <Display
                    input={input}
                />
                <div className='row'>
                    <Button manageButton={addInput}>1</Button>
                    <Button manageButton={addInput}>2</Button>
                    <Button manageButton={addInput}>3</Button>
                    <Button manageButton={addInput}>+</Button>
                </div>
                <div className='row'>
                    <Button manageButton={addInput}>4</Button>
                    <Button manageButton={addInput}>5</Button>
                    <Button manageButton={addInput}>6</Button>
                    <Button manageButton={addInput}>-</Button>
                </div>
                <div className='row'>
                    <Button manageButton={addInput}>7</Button>
                    <Button manageButton={addInput}>8</Button>
                    <Button manageButton={addInput}>9</Button>
                    <Button manageButton={addInput}>*</Button>
                </div>
                <div className='row'>
                    <Button manageButton={result}>=</Button>
                    <Button manageButton={addInput}>0</Button>
                    <Button manageButton={addInput}>.</Button>
                    <Button manageButton={addInput}>/</Button>
                </div>
                <div className='row'>
                    <ButtonClear manageClear={manageClear}>Clear</ButtonClear>
                </div>


            </div>
        </div>);
}

export default App;
