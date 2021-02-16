import React from 'react'
import './task.css'

function Checkbox(props) {
    return(
        <div className="container-check">
            <i 
                className="fas fa-check"
                style={props.style}
                onClick={props.onClick}
            >
            </i>
        </div>
    );
} 

function Subtask(props) {
    //sTYLES
    const styleCheckbox = {};
    styleCheckbox.background = (props.subtasks.completed) ? "rgb(47, 255, 134)" : "rgb(192, 192, 192)";

    const styleTextSubtask = {};
    styleTextSubtask.textDecoration = (props.subtasks.completed) ? "line-through" : "none";

    return(
        <div 
            className="subtask-task"
            id={props.id}
            key={props.id.toString()}
        > 
            <Checkbox 
                onClick={props.onClick}
                style={styleCheckbox}
            />
            <p 
                className="text-subtask"
                style={styleTextSubtask}
            >
                {props.subtasks.value}
            </p>
        </div>
    );
}

class Task extends React.Component {
    render() {
        const subtasks = this.props.task.listSubtasks;
        const showSubtask = subtasks.map((i, j) => {
            return(
                <Subtask 
                    subtasks={i}
                    id={j}
                    key={j}
                    onClick={() => this.props.onClickCheckboxSubtask(this.props.id, j)}
                />
            );
        });

        //STYLES
        const styleCheckbox = {};
        styleCheckbox.background = (this.props.task.completed) ? "rgb(47, 255, 134)" : "rgb(192, 192, 192)";

        const styleTextTask = {};
        styleTextTask.textDecoration = (this.props.task.completed) ? "line-through" : "none";

        return(
            <div className="container-task">
                <div className="task">
                    <Checkbox 
                        onClick={this.props.onClickCheckboxTask}
                        style={styleCheckbox}
                    />
                    <p 
                        className="text-task"
                        style={styleTextTask}
                    >
                        {this.props.task.value}
                    </p>
                    <div className="container-trash">
                        <i 
                            className="fas fa-trash"
                            onClick={this.props.delete}
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