// propsyour components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const TodoList = (props) => {
    return (
        <div>
            {props.list.map(item=>{
                return <ToDo 
                    key={item.id}
                    name={item.task}
                    completed={item.completed}
                />
            })}
        </div>
    )
}

export default TodoList;
