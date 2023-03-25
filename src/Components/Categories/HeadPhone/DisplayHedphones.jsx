import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const DisplayHedphones = ({ router }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { image, productName, reSellPrice, _id } = router;

  const handleAddToCart = (router) => {
    console.log(router);
    fetch("http://localhost:5000/cartpage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(router),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleWishList = (router) => {
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(router),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className=" shadow-lg">
      <img src={image} alt="" className="h-72" />
      <h2 className="font-semibold text-xl my-3 text-center"> {productName}</h2>
      {isLoading ? (
        <>
          <FadeLoader
            color={"#000000"}
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          <div className="flex gap-3 justify-between">
            <Link to={`/product/${_id}`}>
              <button className="bg-green-500 px-4 py-2 font-bold text-white ">
                Details{" "}
              </button>
            </Link>
            <Link onClick={() => handleAddToCart(router)}>
              <button className="bg-green-500 px-4 py-2 font-bold text-white ">
                Cart
              </button>
            </Link>
            <Link onClick={() => handleWishList(router)}>
              <button className="bg-green-500 px-4 py-2 font-bold text-white ">
                WishList
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayHedphones;
