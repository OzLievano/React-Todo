import React from 'react';
import TodoList from './components/TodoList'

const toDoList = [{
  task:'To Do React',
  id:1231,
  completed:false
},
{
  task:'play warhammer',
  id:1232,
  completed:false
}
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      toDoList
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <form>
          <label htmlFor="taskName">Task Name
            <input
              name="taskName"
              id="taskName"
              onChange={this.handleChange}
            />
          </label>
          <button>Add To-do</button>
          <button>Clear Completed</button>
        </form>
        <TodoList list={toDoList}/>
      </div>
    );
  }
}

export default App;
