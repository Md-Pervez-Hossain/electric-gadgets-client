import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";

const DisplayRouter = ({ router }) => {
  const handleAddToCart = (router) => {
    console.log(router);
    fetch("https://electronic-gadgets-server.vercel.app/cartpage", {
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
    fetch("https://electronic-gadgets-server.vercel.app/wishlist", {
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
    <div className=" shadow-lg ">
      <div className="relative">
        <img src={image} alt="" className="h-36" />
        <div className="flex gap-3 absolute top-3 right-2">
          <Link onClick={() => handleAddToCart(router)}>
            <button className=" text-green-500">
              <FaCartPlus></FaCartPlus>
            </button>
          </Link>
          <Link onClick={() => handleWishList(router)}>
            <button className=" text-green-500">
              <FaHeart></FaHeart>
            </button>
          </Link>
        </div>
      </div>
      <div className="p-3">
        <h2 className="font-semibold my-2   "> {productName}</h2>
        <div className=" ">
          <Link to={`/product/${_id}`}>
            <button className=" font-bold transition ease-in-out delay-150 bg-green-500 px-4 py-1 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300   ">
              Quick view
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayRouter;
