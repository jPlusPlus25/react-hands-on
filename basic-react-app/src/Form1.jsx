import { useState } from "react";
export default function Form(){
    
    let [formData ,setFormData]=useState({
        fullName:"",
        username:"",
    })

    // let handleNameChange =(event)=>{
       
    //     setFullName(event.target.value);
    // }
    // let handleUsername =(event)=>{
       
    //     setUsername(event.target.value);
    // }
    let handleInputChange = () => {
        let fieldName=event.target.name;
        let newValue =event.target.value;
        
        setFormData((currData)=>{
           currData[fieldName] =newValue;
           
           return {...currData};
         })
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            username:"",
        })
    }

    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input placeholder="enter full name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="username">Username</label>
        <input 
        placeholder="enter Username"
        type="text"
        value={formData.username}
        id="username"
        name=""
        onChange={handleInputChange}
        />
        <button>Submit</button>
    </form>
    );
}