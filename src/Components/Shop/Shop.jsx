import React, { useEffect, useState } from "react";
import DisplayShop from "./DisplayShop";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Shop = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevious = () => {
    console.log("clicked previous");

    if (previous > 0) {
      setPrevious(previous - 6);
      setNext(next - 6);
    }
  };

  const handleNext = () => {
    console.log("clicked next");
    setPrevious(previous + 6);
    setNext(next + 6);
  };
  return (
    <div className="">
      <div className="relative">
        <img
          src="https://www.shannonspringshotel.com/wp-content/uploads/2020/06/shopping-shannon-springs-2.jpg"
          alt=""
          className="w-full h-96 brightness-50"
        />
        <div className="absolute text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-semibold my-5">
            Welcome To Shoping Page
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            repudiandae eos praesentium illum excepturi fuga maiores quo
            facilis, maxime nesciunt.
          </p>
        </div>
      </div>
      <div className="md:w-9/12 mx-auto my-16  ">
        <div className=" flex flex-row ">
          <div className="basis-3/12 p-2 border-2 sticky  ">
            <h2 className="text-3xl font-semibold mb-5">
              Do Shoping With Filtering
            </h2>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              repudiandae eos praesentium illum excepturi fuga maiores quo
              facilis, maxime nesciunt.
            </p>
            <input
              type="text"
              placeholder="Product Name"
              className="px-4 py-2 border-2 border-gray-300 mb-3"
            />
            <input
              type="text"
              placeholder="Minimum Price"
              className="px-4 py-2 border-2 border-gray-300 mb-3"
            />
            <input
              type="text"
              placeholder="Maximum Price"
              className="px-4 py-2 border-2 border-gray-300 mb-3"
            />
            <br />
            <button className="bg-green-500 px-4 py-2 text-white">
              Filter
            </button>
          </div>
          <div className="basis-9/12">
            <div className="grid md:grid-cols-3 gap-5">
              {products.slice(previous, next).map((product) => (
                <DisplayShop product={product}></DisplayShop>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 my-5">
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

export default Shop;
