import './App.css';
import logodiego from './assets/img/logo.png';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {useState} from "react";

function App() {
    const [numClicks, setNumClicks] = useState(0)

    const clickManage = () => {
        setNumClicks(numClicks + 1);

    }

    const restartCounter = () => {
        setNumClicks(0)
    }

    return (<div className="App">
        <div className='logo-diego'>
            <img
                className='logo-diego-img'
                src={logodiego}
                alt="logodiego"/>
        </div>

        <div className='container'>

            <div className='display'>
                <Counter
                    numClicks={numClicks}/>
            </div>

            <div className='button1'>
                <Button
                    text='CLICK'
                    isCLick={true}
                    clickManage={clickManage}/>
            </div>

            <div className='button2'>
                <Button
                    text='RESTART'
                    isCLick={false}
                    clickManage={restartCounter}/>
            </div>

        </div>
    </div>);
}

export default App;
