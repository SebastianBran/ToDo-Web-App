import React from 'react'
import './listTasks.css'
import Task from './task'

class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectValue: "All"
        }
    }

    onChangeSelect = (e) => {
        this.setState({SelectValue: e.target.value});
        console.log(e.target.value);
    }

    random = (min, max) => Math.random() * (max - min) + min;

    render() {
        const tasks = this.props.tasks;
        const SelectValue = this.state.SelectValue;
        const showTasks = tasks.map((i, j) => {
            if((SelectValue === "All") || (SelectValue === "Completed" && i.completed) || (SelectValue === "Uncompleted" && !i.completed)) {
                return(
                    <Task
                        task={i}
                        id={j}
                        key={j}
                        delete={() => this.props.deleteTask(j)}
                        onClickCheckboxTask={() => this.props.onClickCheckboxTask(j)}
                        onClickCheckboxSubtask={this.props.onClickCheckboxSubtask}
                    />
                );
            }
            return(<div key={this.random(0, 1e18)}></div>); //default
        });

        return(
            <div className="listTasks">
                <div className="container-filter">
                    <span>Filter: </span>
                    <select 
                        className="filter"
                        value={this.state.SelectValue}
                        onChange={this.onChangeSelect}
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div className="container-tasks">
                    {showTasks}
                </div>
            </div>
        );
    }
}

export default ListTasks