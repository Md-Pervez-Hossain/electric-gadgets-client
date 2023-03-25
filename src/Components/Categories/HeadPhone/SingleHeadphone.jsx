import React, { useEffect, useState } from "react";
import { FaCartPlus, FaMinus, FaPlug, FaPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import DisplayAllProducts from "./DisplayAllProducts";

const SingleHeadphone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const singlePhoneInfo = useLoaderData();
  const {
    image,
    productName,
    reSellPrice,
    OriginalPrice,
    productDetails,
    _id,
  } = singlePhoneInfo;
  console.log(singlePhoneInfo);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

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

  return (
    <div className="  w-9/12 mx-auto  p-4">
      <div>
        <div className="p-6 py-12 mb-5 bg-green-500 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" />
                50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Plus free shipping! Use code:</span>
                <span className="font-bold text-lg">MAMBA</span>
              </div>
              <a
                href="#"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="basis-1/2">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="basis-1/2">
          <p className="text-4xl font-bold mb-3">{productName}</p>
          <p className="mb-3">{productDetails}</p>
          <p className="text-2xl font-bold mb-3">Price : $ {reSellPrice}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5 border-2 p-4">
              <p>
                <FaMinus></FaMinus>
              </p>
              <p className="font-bold">0</p>
              <p>
                <FaPlus></FaPlus>
              </p>
            </div>
            <div>
              <button className="bg-green-500 px-4 py-4 text-white">
                <div className="flex items-center gap-3">
                  <FaCartPlus></FaCartPlus>
                  <p onClick={() => handleAddToCart(singlePhoneInfo)}>
                    Add to cart
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mt-32">Some Best Selling Products</h2>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {products.map((product) => (
            <DisplayAllProducts product={product}></DisplayAllProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleHeadphone;
