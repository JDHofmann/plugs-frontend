import '../styles/globals.css'
import Context from "../Context";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
const [ cart, setCart ] = useState([]);
const [ user, setUser ] = useState([]);
const [ products, setProducts ] = useState([]);

useEffect( async () => {
  const res1 = await fetch("http://localhost:3000/users/3")
  const user = await res1.json();
  const res2 = await fetch("http://localhost:3000/products")
  const products = await res2.json();
  setUser(user);
  setProducts(products);
}, [])

  return (
  <Context.Provider value={{
      user: user,
      setUser: setUser, 
      products: products,
      setProducts: setProducts,
      cart: cart,
      setCart: setCart
      }}>
    <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp;