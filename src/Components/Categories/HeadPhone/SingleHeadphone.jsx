import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartPlus,
  FaMinus,
  FaPlug,
  FaPlus,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import DisplayAllProducts from "./DisplayAllProducts";

const SingleHeadphone = () => {
  const [count, setCount] = useState(1);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(4);

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
    fetch("https://electronic-gadgets-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const handleIncreement = () => {
    console.log("Clicked");
    const newCount = count - 1;
    if (newCount > 0) {
      setCount(newCount);
    }
  };

  const handleNext = () => {
    console.log("clicked next");
    setPrevious(previous + 4);
    setNext(next + 4);
  };
  const handlePrevious = () => {
    if (previous > 0) {
      setPrevious(previous - 4);
      setNext(next - 4);
    }
  };

  return (
    <div className="  md:w-9/12 mx-auto  p-4">
      <div className="flex flex-col md:flex-row  items-center justify-center gap-10">
        <div className="basis-1/2 ">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="basis-1/2 ">
          <p className="text-4xl font-bold mb-3">{productName}</p>
          <p className="mb-3">{productDetails}</p>
          <p className="text-2xl font-bold mb-3">
            Price : $ {reSellPrice * count}
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5 border-2 p-4">
              <p onClick={() => handleIncreement()}>
                <button>
                  <FaMinus></FaMinus>
                </button>
              </p>
              <p className="font-bold">{count}</p>
              <p onClick={() => setCount((previous) => previous + 1)}>
                <button>
                  {" "}
                  <FaPlus></FaPlus>
                </button>
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
        <div className="grid md:grid-cols-4 gap-5 mt-10  ">
          {products.slice(previous, next).map((product) => (
            <DisplayAllProducts product={product}></DisplayAllProducts>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 my-10">
          <button onClick={() => handlePrevious()}>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button
            onClick={() => handleNext()}
            disabled={next > products.length}
          >
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHeadphone;
