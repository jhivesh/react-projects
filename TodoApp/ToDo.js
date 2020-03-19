import React from 'react';
import "./ToDo.css";

const Todo = (props) => {


    console.log(props.todo)
    return (
        <div className="todo">
            <div class="alert alert-primary " role="alert">
                {props.todo[0].task}
            </div>
            <div class="alert alert-primary" role="alert">
                {props.todo[1].task}
            </div>
            

        </div>
    )
}
export default Todo;