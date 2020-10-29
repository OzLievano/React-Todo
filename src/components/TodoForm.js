import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            task:"",
         }
    }
    handleChanges = (e) => {
        e.preventDefault();

        this.setState({
            task:e.target.value
        })
    }

    handleSubmit = (e) =>{
        this.props.addTask(e.target.value)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button type="submit">Add Task</button>
        <button>Clear Completed</button>
      </form>
         );
    }
}
 
export default TodoForm;

