import React from "react";

const cart = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  const formateNumber = (num) => {
    const pericision = num.toFixed(2);
    return Number(pericision);
  };

  let vat = total / 10;

  let shipping = 0;
  if (total >= 800) {
    shipping = 10;
  } else if (total > 20) {
    shipping = 5;
  }
  return (
    <div>
      <h4 className='bg btn-danger p-3 rounded'>Order Summery</h4>
      <p>Items Ordered:{cart.length}</p>
      <p>Product Price :{formateNumber(total)}</p>
      <p>
        <small>Shipping Cost : {formateNumber(shipping)}</small>
      </p>
      <p>Vat : {formateNumber(vat)}</p>
      <p>
        <strong>Total Price:{formateNumber(total + shipping + vat)}</strong>
      </p>
    </div>
  );
};

export default cart;
