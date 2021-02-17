import React from 'react'
import './App.css';
import FormTask from "./components/formTask"
import ListTasks from "./components/listTasks"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: Array(0),
        }
    }

    validTask = (task) => {
        const value = task.value;
        for(let i = 0; i < value.length; i++) {
            if(value[i] !== ' ') return true;
        }
        return false;
    }

    addTask = (task) => {
        if(this.validTask(task)) {
            const tasks = this.state.tasks;
            tasks.push(task);
            this.setState({
                tasks: tasks
            });
        }
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks;
        tasks.splice(id, 1);
        this.setState(tasks);
    }

    onClickCheckboxTask = (id) => {
        const tasks = this.state.tasks;
        const task = tasks[id];
        task.completed = !task.completed; //change the completed value of the task (true or false)
        const subtasks = task.listSubtasks;
        //change the completed value of the subtask to the completed value of the task
        for(let i = 0; i < subtasks.length; i++)
            subtasks[i].completed = task.completed;
        task.listSubtasks = subtasks;
        tasks[id] = task;
        this.setState({tasks: tasks});
    }

    onClickCheckboxSubtask = (idTask, idSubtask) => {
        const tasks = this.state.tasks;
        const task = tasks[idTask];
        const subtasks = task.listSubtasks;
        if(subtasks[idSubtask].completed) task.completed = false;
        subtasks[idSubtask].completed = !subtasks[idSubtask].completed;
        task.listSubtasks = subtasks;
        tasks[idTask] = task;
        this.setState({tasks: tasks});
        console.log(tasks);
    }

    render() {
        return (
            <div className="App">
                <div className="Header">Sebas' To Do</div>
                <div className="board">
                    <FormTask 
                        addTask={this.addTask}
                    />
                    <ListTasks 
                        tasks={this.state.tasks}
                        deleteTask={this.deleteTask}
                        onClickCheckboxTask={this.onClickCheckboxTask}
                        onClickCheckboxSubtask={this.onClickCheckboxSubtask}
                    />
                </div>
            </div>
        );
    }
}

export default App;