function handleClick(event){
    console.log("Hello!");
    console.log(event);
;}
function handleMouseOver(){
    console.log("bye")
}
function handleDblclick(){
    console.log("you double click")
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
         
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio fuga veniam nostrum provident 
                accusamus itaque aperiam cumque suscipit laudantium culpa deleniti nemo, molestiae illo aut modi reiciendis!
                 Rem, ut. Optio.</p>
                 <button onDoubleClick={handleDblclick}>double click me!</button>
        </div>
    );
}