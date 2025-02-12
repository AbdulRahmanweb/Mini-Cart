import React from 'react';
import CartProvider from './Context/CartContext.';
import Navbar from './Components/Nvabar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;
