import { useState } from "react"

export default function LudoBoard(){
    let [Moves,setlueMove]=useState({blue:0,red:0,yellow:0,green:0});
    let updateBlue=()=>{
        Moves.blue+=1;
        console.log(`Moves.blue=${Moves.blue}`);
    };
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
            <p>Blue moves={Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves={Moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>Green moves={Moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
            <p>Red moves={Moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}