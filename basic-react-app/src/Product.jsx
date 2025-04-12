import "./Product.css";
import Title from "./Title";
function Product({Title,price,features}){
    const list=features.map((feature)=><li>{feature}</li>);
    
    return (
        <div className="Product">
            <h3>{Title}</h3>
            <h5>Price:{price}</h5>
            <p>{list}</p>
            
        </div>
    );
}
export default Product;