import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import DisplayCartPage from "./DisplayCartPage";

const CartPage = () => {
  const { removeAddToCart } = useContext(UserContext);
  const cart = useLoaderData();

  let totalPrice = 0;
  for (const cartPrice of cart) {
    const price = parseInt(cartPrice.reSellPrice);
    totalPrice = totalPrice + price;
  }

  return (
    <div className="w-1/2 mx-auto shadow-lg p-10">
      <div className="">
        {cart?.map((cartProduct) => (
          <DisplayCartPage
            cartProduct={cartProduct}
            key={cartProduct._id}
            removeAddToCart={removeAddToCart}
          ></DisplayCartPage>
        ))}
      </div>
      <div className="flex  justify-between">
        <h2 className="flex justify-end">Total Price : </h2>
        <p>$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default CartPage;
