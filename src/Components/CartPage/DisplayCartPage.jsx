import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DisplayCartPage = ({ cartProduct, removeAddToCart }) => {
  console.log(cartProduct);
  const { image, productName, reSellPrice } = cartProduct;
  return (
    <div>
      <div className="flex items-center gap-10 justify-between ">
        <div className="flex items-center gap-10">
          <img src={image} alt="" className="h-32" />
          <div>
            <h2 className="text-xl font-bold">{productName}</h2>
            <div className="flex items-center gap-2">
              <FaTrashAlt></FaTrashAlt>
              <h2
                onClick={() => removeAddToCart(cartProduct)}
                className="cursor-pointer"
              >
                Remove
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-16">
          <h2>$ {reSellPrice}</h2>
        </div>
      </div>

      <div className="mt-3">
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default DisplayCartPage;
