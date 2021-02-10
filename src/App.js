import React from 'react'
import './App.css';
import Board from './components/board'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="Header">Sebas' To Do</div>
                <Board />
            </div>
        );
    }
}

export default App;