import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample-task" , id: uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    
    let addNewTask=()=>{
       setTodos((prevTodos)=>{
        return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
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
      setTodos( (prevTodos)=>
       prevTodos.map((todo)=>({
            ...todo,
            task:todo.task.toUpperCase(),
        }))
      );
    };
    let markAsDone=(id)=>{
        setTodos( (prevTodos)=>
            prevTodos.map((todo)=>{
             if(todo.id==id){
                return {
                 ...todo,
                 isDone:true,
                 };
                }else{
                    return todo;
                }
         })
     
         );
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
        <h4>Tasks Todo</h4>
        <ul>
           { todos.map((todo) => (
                <li key={todo.id}>
                   <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}> {todo.task}</span>
                   <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                   <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                </li>
            ))}
        </ul>
        <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
    );
}