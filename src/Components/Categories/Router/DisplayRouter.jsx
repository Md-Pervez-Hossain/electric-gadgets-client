import React from "react";
import { Link } from "react-router-dom";

const DisplayRouter = ({ router }) => {
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
  const { image, productName, reSellPrice, _id } = router;
  return (
    <div className=" shadow-lg">
      <img src={image} alt="" className="h-72" />
      <p className="text-center font-bold my-2">{productName}</p>
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
        <Link>
          <button
            onClick={() => handleWishList(router)}
            className="bg-green-500 px-4 py-2 font-bold text-white "
          >
            WishList
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayRouter;
