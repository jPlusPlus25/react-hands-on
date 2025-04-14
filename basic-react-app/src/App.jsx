import "./App.css"

import Title from "./Title.jsx";//import
import Product from "./Product.jsx";  
import Producttab from "./Producttab.jsx"; 
import Button  from "./Button.jsx";
import MsgBox from "./MsgBox.jsx";
function Description(){
  return <h3>I am the Description!</h3>;
}


function App() {
  return (
    <div>

  <MsgBox userName={"Arshita"}textColor={"pink"}/>
  <MsgBox userName={"Jay"}textColor={"brown"}/>
  <Producttab/>
  
  </div>
  );

}

export default App;

