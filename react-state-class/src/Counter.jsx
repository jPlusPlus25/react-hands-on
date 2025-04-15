import "./App.css";
import { use, useState } from "react";

export default function Counter(){
    
    let [Count,setCount]=useState(0);
    console.log("componant is render");
    console.log(`count=${Count}`);
    let incCount=()=>{
        setCount(Count+2);
        console.log(`inside incCount ,count=${Count}`);
    }
    
    
    return(
        <div>
            <h3>Count ={Count}</h3>
           <button onClick={incCount}>Increase Count</button>
        </div>
    )
}
