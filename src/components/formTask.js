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
            autoComplete="off"
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

function SubtaskForm(props) {
    return(
        <div 
            className="subtask"
            id={props.id}
            key={props.id.toString()}
        >
            <p>{props.value}</p>
            <i 
                className="fas fa-pen"
                onClick={props.onClickEditSubstask}
            >
            </i>
            <i 
                className="fas fa-times"
                onClick={props.onClickDeleteSubtask}
            >
            </i>
        </div> 
    );
}

class FormTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                value: '',
                completed: false,
                listSubtasks: Array(0)
            },
            subtask: ''
        }
    }
    
    // Prevent refresh the page
    onSubmit = (e) => { e.preventDefault(); }

    // Update the task value
    onChangeTask = (e) => {
        const task = {...this.state.task};
        task.value = e.target.value;
        this.setState({task: task});
    }

    //Update the subtask value
    onChangeSubtask = (e) => {
        this.setState({
            subtask: e.target.value
        });
    }

    validInputSubtask = () => {
        const subtask = this.state.subtask;
        for(let i = 0; i < subtask.length; i++) {
            if(subtask[i] !== ' ') return true;
        }
        return false;
    }

    onClickAddSubtask = () => {
        if(this.validInputSubtask()) {
            const task = {...this.state.task};
            task.listSubtasks.push({
                value: this.state.subtask, 
                completed: false
            });
            this.setState({
                task: task,
                subtask: ''
            });
        }
        else this.setState({subtask: ''});
    }

    onClickEditSubtask = (id) => {
        const subtask = this.state.task.listSubtasks[id].value;
        this.setState({subtask: subtask});
        this.onClickDeleteSubtask(id);
    }

    onClickDeleteSubtask = (id) => {
        const task = {...this.state.task};
        task.listSubtasks.splice(id, 1);
        this.setState({task: task});
    }

    onClickAddTask = () => {
        /*JSON.parse(JSON.stringify({..}) this is used to copy an object whitout reference*/
        const task = JSON.parse(JSON.stringify({...this.state.task})); 
        const aux = JSON.parse(JSON.stringify(task));
        this.props.addTask(task);
        aux.value = '';
        aux.listSubtasks = Array(0);
        this.setState({
            task: aux,
            subtask: ''
        });
    }

    render() {
        const task = {...this.state.task};
        const showSubtask = task.listSubtasks.map((i, j) => {
            return(
                <SubtaskForm 
                    value={i.value}
                    id={j}
                    key={j}
                    onClickEditSubstask={() => this.onClickEditSubtask(j)}
                    onClickDeleteSubtask={() => this.onClickDeleteSubtask(j)}
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
                        value={this.state.task.value}
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
                            onClick={this.onClickAddSubtask}
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
                        onClick={this.onClickAddTask}
                    />
                </div>
            </form>
        );
    }
}

export default FormTask