import React from 'react';
import './formTask.css';

function Input(props) {
    return(
        <input
            className={props.className}
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            id={props.id}
        >
        </input>
    );
}

function Button(props) {
    return(
        <button
            className={props.className}
            id={props.id}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    );
}

function Subtask(props) {
    return(
        <div 
            className="subtask"
            id={props.id}
            key={props.id.toString()}
        >
            <p>{props.value}</p>
            <i 
                className="fas fa-times"
                onClick={() => {console.log("click 8)")}}
            >
            </i>
        </div> 
    );
}

class FormTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            subtask: '',
            listSubtasks: Array(0)
        }
    }
    
    onSubmit = (e) => { e.preventDefault(); }

    onChangeTask = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    onChangeSubtask = (e) => {
        this.setState({
            subtask: e.target.value
        });
    }

    handleClickAddSubtask = () => {
        let listSubtasks = this.state.listSubtasks;
        listSubtasks.push(this.state.subtask);
        this.setState({
            subtask: '',
            listSubtasks: listSubtasks,
        });
    }

    render() {
        const listSubtasks = this.state.listSubtasks;
        const showSubtask = listSubtasks.map((i, j) => {
            return(
                <Subtask 
                    value={i}
                    id={j}
                    key={j}
                />
            );
        });

        return(
            <form 
                className="form-task"
                onSubmit={this.onSubmit}
            >
                <div className="container-input-task">
                    <Input 
                        className="form-input-task"
                        placeholder="Add a task"
                        onChange={this.onChangeTask}
                        value={this.state.task}
                        id="task"
                    />
                </div>
                <div className="form-subtasks">
                    <div className="container-input-button">
                        <Input 
                            className="form-input-subtask"
                            placeholder="Add a subtask"
                            onChange={this.onChangeSubtask}
                            value={this.state.subtask}
                            id="subtask"
                        />
                        <Button 
                            className="form-button-addSubtask"
                            id="button-addSubtask"
                            name="Add"
                            onClick={this.handleClickAddSubtask}
                        />
                    </div>
                    <div className="container-subtasks">
                        {showSubtask}
                    </div>
                </div>
                <div className="container-add-task">
                    <Button 
                        className="form-button-addTask"
                        id="button-addTask"
                        name="Add task"
                    />
                </div>
            </form>
        );
    }
}

export default FormTask