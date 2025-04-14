import "./Product.css";
import Title from "./Title";
function Product({Title,price,features}){
    let style={backgroundColor : price>30000 ? "yellow":""}
    
    
    
    return (
        <div className="Product" style={style}>
            <h3> {Title}</h3>
            <h5>Price:{price}</h5>
            {price>30000 && <p>Discount of 5%</p>}
        </div>
    );
}
    

export default Product;