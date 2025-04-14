function printHello(){
    console.log("Hello")
}
function printBye(){
    console.log("bye")
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>this is parah is for event demo</p>
        </div>
    );
}