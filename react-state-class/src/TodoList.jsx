import { useState } from "react";

export default function TodoList(){
    let [todos,setTodo]=useState();
    return (
    <div>
        <input placeholder="add a task"></input>
        <br></br>
        <button>add task</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <h4>Todo List</h4>
        <ul>
           { todos.map((todo) => {
                return <li>{todo}</li>
            })}
        </ul>
    </div>);
}