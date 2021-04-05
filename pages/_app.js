import '../styles/style.css'
import Context from "../Context";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
const [ contextCart, setContextCart ] = useState([]);
const [ user, setUser ] = useState([]);
const [ products, setProducts ] = useState([]);

const setCart = (newCart) => {
  setContextCart(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

useEffect( async () => {
  const res1 = await fetch("https://candgbackend.herokuapp.com/users/1")
  const user = await res1.json();
  const res2 = await fetch("https://candgbackend.herokuapp.com/products")
  const products = await res2.json();
  setUser(user);
  setProducts(products);
  localStorage.getItem('cart').length < 1 ? 
  setContextCart([])
  :
  setContextCart(JSON.parse(localStorage.getItem('cart')))
}, [])

  return (
  <Context.Provider value={{
      user: user,
      setUser: setUser, 
      products: products,
      setProducts: setProducts, 
      contextCart: contextCart,
      setContextCart: setContextCart,
      setCart: setCart
      }}>
        <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp;