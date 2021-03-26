import CategoryContainer from "../components/CategoryContainer"
import Header from "../components/header"
import Context from "../Context";
import { useState } from "react";

export default function Home({user, products}) {

const [ cart, setCart ] = useState([{name: "testItem"}]);

  const renderProductByCategory = (category) => {
    // let filteredProducts = products.filter( p => p.category === category)
    // return filteredProducts.map(fp => <p>{fp.name}</p>)
    return products.filter( p => p.category === category)
  }
  
  return (
    <Context.Provider value={{
      user: user, 
      products: products,
      cart: cart,
      setCart: setCart
      }}>
      <div>
        <Header />
        <h1>Home</h1>
        <CategoryContainer title="Phones" products={renderProductByCategory("phone")}/>
        <CategoryContainer title="Tablets" products={renderProductByCategory("tablet")}/>
        <CategoryContainer title="Laptops" products={renderProductByCategory("laptop")}/>
        <CategoryContainer title="Smart Watches" products={renderProductByCategory("smart watch")}/>
        <CategoryContainer title="TV's" products={renderProductByCategory("tv")}/>
        <CategoryContainer title="Accessories" products={renderProductByCategory("accessory")}/>
      </div>
    </Context.Provider>
  )
}

export async function getStaticProps(){
  const res1 = await fetch("http://localhost:3000/users/3")
  const user = await res1.json();
  const res2 = await fetch("http://localhost:3000/products")
  const products = await res2.json()
  return {
    props: {
      user,
      products
    }
  }
}

