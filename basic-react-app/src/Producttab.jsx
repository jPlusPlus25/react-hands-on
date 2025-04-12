import Product  from "./Product.jsx";
function Producttab(){
    let options = ["hi-tech","durable","fast"];
    
    return(
        <>
        <Product Title="phone" price="30,000" features={options}/>
        <Product Title="laptop" price="40,000"/>
        <Product Title="pen" price={1}/>
        </>
    );
}
export default Producttab;