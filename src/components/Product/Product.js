import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props.prouct);

  const { name, img, seller, price, stock } = props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt='' />
      </div>

      <div className='product-name'>
        <h4>{name}</h4>
        <p>by: {seller}</p>
        <p>${price}</p>
        <p>Only {stock} left in stack - Order soon</p>
        <button
          className='main-btn'
          onClick={() => props.handlerAddProduct(props.product)}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
