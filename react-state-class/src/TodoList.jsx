import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample-task" , id: uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");
    
    let addNewTask=()=>{
       setTodos((prevTodos)=>{
        return [...prevTodos,{task:newTodo,ud:uuidv4()}]
       });
       setNewTodo("");
    }; 
    let updateTodoVal=(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id !=id));
        
    };
    let upperCaseAll =()=>{
      setTodos( (prevTodos)=>(
       prevTodos.map((todo)=>{
           return {
            ...todo,
            task:todo.task.toUpperCase(),
            };
        })

      ))
    };
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
        <h4>Tasks Todo</h4>
        <ul>
           { todos.map((todo) => (
                <li key={todo.id}>
                   <span> {todo.task}</span>
                   <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                </li>
            ))}
        </ul>
        <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
    );
}