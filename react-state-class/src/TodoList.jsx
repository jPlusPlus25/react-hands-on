import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodo]=useState([{task:"sample-task" , id: uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");
    
    let addNewTask=()=>{
       setTodo([...todos,{task:newTodo,ud:uuidv4()}]);
       setNewTodo("");
    }; 
    let updateTodoVal=(event)=>{
        setNewTodo(event.target.value);
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
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    </div>
    );
}