import React from 'react'
import TaskService from '../services/TaskService'

class TaskComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks:[]
        }
    }

    componentDidMount() {
        TaskService.getTasks().then((response) => {
            this.setState({tasks: response.data})
        });
    }

    render() {
        return(
            <div>
                <h1 className='text-center'>User list</h1>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <td>Task</td>
                        <td>Day</td>
                        <td>Reminder</td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.tasks.map(
                            task =>
                                <tr key={task.id}>
                                    <td>{task.text}</td>
                                    <td>{task.day}</td>
                                    <td>{task.reminder.toString()}</td>
                                </tr>
                        )
                    }
                    </tbody>

                </table>
            </div>
        )
    }

}

export default TaskComponent
