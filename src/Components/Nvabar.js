import React from 'react';
import { useCart } from '../Context/CartContext.';

function Navbar() {
	const {cart} = useCart();

	return(<div>
		<nav id='navbar'>
			<h1>Shopping Cart</h1>
			<p style={{padding : "5px"}}>Items in Cart: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
		</nav>
	</div>);
}

export default Navbar;