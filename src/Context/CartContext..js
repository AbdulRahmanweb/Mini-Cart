import React, {useState, useEffect} from 'react';
import { createContext, useContext } from 'react';

const CartContext = createContext();//Creating a cart context to store global state

function CartProvider({children}) {//Creating provider component
	//if data found in storage get else start with an empty array
	const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
	const [cart, setCart] = useState(storedCart);

	useEffect(() => {//Save cart to local storage every time it changes
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	function addToCart(product) {//Adding item to cart
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {//If product exists increase it's quantity
				return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
			}
			//Otherwise add a new product with quantity 1
			return[...prevCart, {...product, quantity: 1}];
		});
	}

	//Function to remove an item from the cart
	function removeFromCart(id) {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	}

	//Function to clear the entire cart
	function clearCart() {
		setCart([]);
	}

	return(<div>
		<CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
			{children}
		</CartContext.Provider>
	</div>);
}

//Custom hook to use cart context easily in any component
export const useCart = () => useContext(CartContext);

export default CartProvider;