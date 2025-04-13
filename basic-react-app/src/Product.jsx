import "./Product.css";
import Title from "./Title";
function Product({Title,price,features}){
    let isDiscount=price>30000 ? "5%" : "" ;
    if(price>30000){
    return (
        <div className="Product">
            <h3> {Title}</h3>
            <h5>Price:{price}</h5>
            <p>{isDiscount}</p>
        </div>
    );
}else{
    return (
        <div className="Product">
            <h3> {Title}</h3>
            <h5>Price:{price}</h5>
        </div>
    );

}
}
export default Product;