const CartItem = ({data, delFromCart}) => {
    let {id,name,price,quantity} =data;
    return (
        <div className="eliminar" style={{borderBottom:"thin solid gray"}}>
            <h4>{name}</h4>
            <h5>{price}.00 $ x {quantity} = {price*quantity}.00 $</h5>
            <button className="boton" onClick={() => delFromCart(id)}>Eliminar un articulo</button><br/>
            <button className="boton" onClick={() => delFromCart(id,true)}>Eliminar todos</button>
        </div>
    );
};
export default CartItem;