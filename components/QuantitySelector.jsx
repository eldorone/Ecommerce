import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuantitySelector = ({ decQty, incQty, qty }) => {
  return (
    <p className="quantity-desc">
      <span className="minus" onClick={decQty}>
        <AiOutlineMinus />
      </span>
      <span className="num">{qty}</span>
      <span className="plus" onClick={incQty}>
        <AiOutlinePlus />
      </span>
    </p>
  );
};

export default QuantitySelector;
