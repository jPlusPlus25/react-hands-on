import Product  from "./Product.jsx";
function Producttab(){
    let option =["hi-tech","durable","fast"];
    
    return(
        <>
        <Product Title="phone" price={30000}/>
        <Product Title="laptop" price={4000}/>
        <Product Title="pen" price={1}/>
        </>
    );
}
export default Producttab;