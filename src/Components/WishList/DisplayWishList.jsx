import React from "react";
import { Link } from "react-router-dom";

const DisplayWishList = ({ wishlist }) => {
  const { image, productName, reSellPrice, _id } = wishlist;
  const handleAddToCart = (wishlist) => {
    fetch("http://localhost:5000/cartpage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="shadow-lg p-4">
      <img src={image} alt="" />
      <p>{productName}</p>
      <p>Price : $ {reSellPrice}</p>
      <div className="flex justify-between">
        <Link to={`/product/${_id}`}>
          <button className="bg-green-500 px-4 py-2 font-bold text-white ">
            Details{" "}
          </button>
        </Link>
        <Link onClick={() => handleAddToCart(wishlist)}>
          <button className="bg-green-500 px-4 py-2 font-bold text-white ">
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayWishList;
