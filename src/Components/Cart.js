import React from 'react';
import { useCart } from '../Context/CartContext.';

function Cart() {
	const {cart, removeFromCart, clearCart} = useCart();

	return(<div id='cart'>
		<h2 style={{color : "black"}}>Your Cart</h2>
		{cart.length === 0 ? (<p style={{color : "black"}}>Cart is empty</p>)
		: (<>
		{cart.map((item) => (
			<div id='cart-item' key={item.id}>
				<h4>{item.name}</h4> <p style={{fontSize : "0.7rem", padding : "2px"}}>Price: Rs{item.price}</p> <p style={{fontSize : "0.6rem"}}>Quantity:{item.quantity}</p>
				<button onClick={() => removeFromCart(item.id)}>Remove</button>
			</div>))}
			<h3 style={{padding : "2px", color : "black"}}>Total: Rs{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
			<button style={{backgroundColor : "rgb(167, 40, 40)", color : "white"}} onClick={() => clearCart()}>Clear Cart</button>
		</>)}
	</div>)
}

export default Cart;