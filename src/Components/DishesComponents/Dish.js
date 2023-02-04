import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/CartSlice";

const Dish = ({dish})=>{
    const dispatch = useDispatch();
    const [quantity,setQuantity]= useState(1);
    return (<div>
        <img className="dish_picture" src = {`${dish.img}.jpeg`} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={()=>{dispatch (addItemToCart({dish,quantity}))}}> Add to Cart</button>
        </div>)
}
export default Dish;