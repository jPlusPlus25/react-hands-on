import { useState } from "react";

export default function TodoList(){
    let [todos,setTodo]=useState(["sample task"]);
    let [newTodo,setNewTodo]=useState("");
    
    let addNewTask=()=>{
        console.log("we have to add new task in todo");
    }; 
    let updateTodoVal=(event)=>{
        console.log(event.target,value);
    }
    return (
    <div>
        <input placeholder="add a task" 
        value={newTodo} 
        onChange={updateTodoVal}
        ></input>
        <br></br>
        <button onClick={addNewTask}>add task</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <h4>Todo List</h4>
        <ul>
           { todos.map((todo) => (
                <li>{todo}</li>
            ))}
        </ul>
    </div>
    );
}