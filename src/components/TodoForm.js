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
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task:''
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
         );
    }
}
 
export default TodoForm;

