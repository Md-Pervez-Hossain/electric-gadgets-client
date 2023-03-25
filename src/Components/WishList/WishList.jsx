import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayWishList from "./DisplayWishList";

const WishList = () => {
  const wishListProducts = useLoaderData();
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-4 gap-5 ">
        {wishListProducts.map((wishlist) => (
          <DisplayWishList
            key={wishlist._id}
            wishlist={wishlist}
          ></DisplayWishList>
        ))}
      </div>
    </div>
  );
};

export default WishList;
