import React from 'react';
import { useCart } from '../Context/CartContext.';

const products = [
	{id : 1, name : "Laptop", price : 15000},
	{id : 2, name : "Smartphone", price : 32000},
	{id : 3, name : "Headphone", price : 5000}
];

function ProductList() {
	const {addToCart} = useCart();//Getting addToCart from context

	return(<div id='product-list'>
		{products.map((product) => (
			<div id='product' key={product.id}>
				<h4 style={{padding : "2px"}}>{product.name}</h4>
				<p style={{fontSize : "0.7rem", marginTop : "2px"}}>Price: Rs{product.price}</p>
				<button style={{backgroundColor : "green", color : "white"}} onClick={() => addToCart(product)}>Add to Cart</button>
				</div>))}
	</div>);
}

export default ProductList;