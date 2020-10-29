import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

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
    };
  }

  toggleComplete = (taskId) => {
    console.log("ol: app.js: App: toggleComplete: taskId ", taskId)
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map((item)=>{
        if(item.id===taskId){
          return {
            ...item,
            completed:!item.completed
          };
        }
        return item;
      })
    })
  }

  addTask = (taskName) => {
    this.setState({
      toDoList:[
      ...this.state.toDoList, 
      {task:taskName,completed:false,id:Date.now()}
    ]
  })
  }

  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter((item)=> !item.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList list={this.state.toDoList} toggleComplete={this.toggleComplete}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
