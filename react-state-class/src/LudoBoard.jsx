import { useState } from "react"


export default function LudoBoard(){
    let [Moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    let[arr,Setarr]=useState(["no moves"]);
    let updateBlue=()=>{
       /* setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                blue:prevMoves.blue+1
            };
        });*/
        
        Setarr((prearr)=>[...prearr,"blue moves"]);
        console.log(arr);
    };
    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                yellow:prevMoves.yellow+1
            };
        });
    };
    let updateGreen=()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                green:prevMoves.green+1
            };
        });
    };
    let updateRed=()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                rede:prevMoves.red+1
            };
        });
    };
    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
            <p>Blue moves={Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves={Moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>Green moves={Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>Red moves={Moves.red}</p>
            <button style={{backgroundColor:"red"}} >+1</button>
            </div>
        </div>
    )
}