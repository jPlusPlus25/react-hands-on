
import Product  from "./Product.jsx";

function Producttab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent :"center",
        alignItems:"center",
    };
    return(
        <div style={styles}>
           
        <p><Product title="logitech Mx Master"idx={0}/></p>
        <Product title="Apple Pencil (2nd Gen)"idx={1}/>
        <Product title="Zebronics Zeb-transformer"idx={2}/>
        <Product title="Petonics Toad 23"idx={3}/>
        
        </div>
    );
}
export default Producttab;