import React from 'react'
import FormTask from './formTask'
import ListTasks from './listTasks'
import './board.css'

class Board extends React.Component {
    render() {
        return(
            <div className="board">
                <FormTask />
                <ListTasks />
            </div>
        );
    }
}

export default Board