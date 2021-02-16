import React from 'react'
import './listTasks.css'
import Task from './task'

class ListTasks extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const showTasks = tasks.map((i, j) => {
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
        });

        return(
            <div className="listTasks">
                <div className="container-filter">
                    <span>Filter: </span>
                    <select className="filter">
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