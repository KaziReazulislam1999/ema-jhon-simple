import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setproducts] = useState(first10);
  return (
    <div>
      <h1>This Is Shop</h1>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
