import React from 'react'
import './task.css'

function Checkbox(prosps) {
    return(
        <div className="container-check">
            <i 
                className="fas fa-check"
                onClick={prosps.onClick}
            >
            </i>
        </div>
    );
} 

function Subtask(props) {
    return(
        <div 
            className="subtask-task"
            id={props.id}
            key={props.id.toString()}
        > 
            <Checkbox 
                onClick={props.onClick}
            />
            <p className="text-subtask">{props.value}</p>
        </div>
    );
}

class Task extends React.Component {
    
    render() {
        const subtasks = ["comprar carne", "comprar aceite", "comprar queso"];
        const showSubtask = subtasks.map((i, j) => {
            return(
                <Subtask 
                    onClick={() => {console.log("realizado :v")}}
                    value={i}
                    id={j}
                    key={j}
                />
            );
        });

        return(
            <div className="container-task">
                <div className="task">
                    <Checkbox 
                        onClick={() => {console.log("realizado :v")}}
                    />
                    <p className="text-task">{this.props.value}</p>
                    <div className="container-trash">
                        <i 
                            className="fas fa-trash"
                            onClick={() => {console.log("borrado >:v")}}
                        >
                        </i>
                    </div>           
                </div>
                <div className="list-subtasks-task">
                    {showSubtask}
                </div>
            </div>  
        );
    }
}

export default Task;