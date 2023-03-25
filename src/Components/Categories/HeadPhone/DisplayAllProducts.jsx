import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DisplayAllProducts = ({ product }) => {
  const { image, _id } = product;
  console.log(product);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="shadow-lg">
      <img src={image} alt="" className="h-72" />
      <Link to={`/product/${_id}`}>
        <button
          // onClick={handleClick}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="bg-green-500 px-4 py-2 font-bold text-white w-full"
        >
          Details{" "}
        </button>
      </Link>
    </div>
  );
};

export default DisplayAllProducts;
