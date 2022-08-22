import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/shoppingCart";




const ProductItem = ({data}) => {
    const dispatch = useDispatch();
    const {id, name, price} = data;

    return (
        <div style={{border: "thin solid gray", padding: "1rem"}}>
            <h4>{name}</h4>
            <h5>{`price: $${price}.00`}</h5>
            <button onClick={()=> dispatch(addToCart(id))}>Add to Card</button>
            
        </div>
    )
}

export default ProductItem
