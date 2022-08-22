import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from "../features/shoppingCart"

import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const stateShoppingCart = useSelector(state=> state.shoppingCart)
  const dispatch = useDispatch();
  const { products, cart } =stateShoppingCart;

 
  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product}/>
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box grid-responsive">
        {cart.length > 0
          ? cart.map((item, index) => (
              <CartItem key={index} data={item} />
            ))
          : "No hay productos en tu carrito"}
      </article>
        {cart.length > 0 && (
          <button onClick={()=> dispatch(clearCart())}>Limpiar Carrito</button>
        )}
    </div>
  );
};

export default ShoppingCart;
