export default function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecoderationLine: "line-through",
    }
    return(
        <div>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{newPrice}</span>
        </div>
    );
}