import React from "react";
import { Link } from "react-router-dom";

const DisplayShop = ({ product }) => {
  const { image, productName, reSellPrice, productDetails, _id } = product;
  console.log(product);
  return (
    <div className="shadow-lg  p-5">
      <div className="flex justify-center items-center">
        <img src={image} alt="" className="h-36" />
      </div>
      <div>
        <h2>{productName}</h2>
        <p>Price : $ {reSellPrice}</p>
        <Link to={`/product/${_id}`}>
          <button className="bg-green-500 px-4 py-2 text-white mt-2">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayShop;
