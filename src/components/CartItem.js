
import React from "react";
import {useDispatch } from "react-redux";
import { removeOneFromCart,removeAllFromCart } from "../features/shoppingCart";
const CartItem = ({data}) => {
     const dispatch = useDispatch();
      const {id, name, price, quantity}= data;
    return (
        <div>
            <h3>{name}</h3>
            <h4>$ {price} .00</h4>
            <h5>cantidad: {quantity}</h5>
            <h5>Totsl a pagar : $ {price*quantity}.00</h5>
            <button onClick={()=> dispatch(removeOneFromCart(id))}>Eliminar uno</button>
            <button onClick={()=> dispatch(removeAllFromCart(id))}>Eliminar todos</button>
        </div>
    )
}

export default CartItem
