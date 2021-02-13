import React from 'react'
import './listTasks.css'
import Task from './task'

class ListTasks extends React.Component {
    render() {
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
                    <Task 
                        value="Ir al mercado"
                    />
                </div>
            </div>
        );
    }
}

export default ListTasks