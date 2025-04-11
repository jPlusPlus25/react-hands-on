import Product  from "./Product.jsx";
function Producttab(){
    let options = ["hi-tech","durable","fast"];
    let option2 = {a:"hi-tech",b:"durable",c:"fast"};
    return(
        <>
        <Product Title="phone" price="30,000" features={options} features2={option2}/>
        <Product Title="laptop" price="40,000"/>
        <Product Title="pen" price={1}/>
        </>
    );
}
export default Producttab;