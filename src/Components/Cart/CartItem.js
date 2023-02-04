import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/CartSlice";

const CartItem =({cartItem})=>{
    //console.log(cartItem)
    const dishes = dataDishes.find(item =>item.id===cartItem.dishId)
    //console.log(dishes)
    const dispatch = useDispatch();
    return (<div>
        <h3>{dishes.name}</h3>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: $ {dishes.price*cartItem.quantity}</p>
        <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
        <img className="icon trash" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash"/> 
        </span>
    </div>
    )
}
export default CartItem;