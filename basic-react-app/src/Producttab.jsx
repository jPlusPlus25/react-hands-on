import Product  from "./Product.jsx";
function Producttab(){
    let option =["hi-tech","durable","fast"];
   
    return(
        <>
        <Product Title="phone" price={30000}/>
        <Product Title="laptop" price={40000}/>
        <Product Title="pen" price={1}/>
        </>
    );
}
export default Producttab;