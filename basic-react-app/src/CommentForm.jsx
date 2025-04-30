import { useState } from "react";

export default function CommentsForm(){
    let [formdata,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handleInputChange = (event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value};
        });
    };
    let handleSubmit=(event)=>{
        console.log(formdata);
        event.preventDefault();
    }
    return (<div>
        <h4>Give a comment!</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
        <input placeholder="username" type="text" value={formdata.username} onChange={handleInputChange}
        id="username"
        Name="username"
        />
        
        <br></br><br></br>
        <label htmlFor="remark">Remarks</label>
        <textarea value={formdata.remarks} placeholder="add few remarks" onChange={handleInputChange} id="remarks" Name="remarks">
          
            </textarea>
            
        <br></br><br></br>
        <label htmlFor="rating">Rating</label>
        <input placeholder="rating" 
        type="number" min={1} max={5} value={formdata.rating} onChange={handleInputChange} id="rating"  Name="rating"/>
        <br></br><br></br>
        <button>Add commet</button>
        </form>
        </div>
    );
}