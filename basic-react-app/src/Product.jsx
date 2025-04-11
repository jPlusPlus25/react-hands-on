import "./Product.css";
import Title from "./Title";
function Product({Title,price,features,features2}){
    
    return (
        <div className="Product">
            <h3>{Title}</h3>
            <h5>Price:{price}</h5>
            <p>{features}</p>
            <p>{features2.a}</p>
        </div>
    );
}
export default Product;