import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const first10 = fakeData.slice(0, 15);
  const [products, setproducts] = useState(first10);

  const handlerAddProduct = (product) => {
    console.log("Product Added", product);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((pd) => (
          <Product handlerAddProduct={handlerAddProduct} product={pd}></Product>
        ))}
      </div>

      <div className='cart-container'>
        <h1>This Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
