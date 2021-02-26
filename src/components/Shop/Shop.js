import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const first10 = fakeData.slice(0, 15);
  const [products, setproducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handlerAddProduct = (product) => {
    console.log("Product Added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((pd) => (
          <Product handlerAddProduct={handlerAddProduct} product={pd}></Product>
        ))}
      </div>

      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
