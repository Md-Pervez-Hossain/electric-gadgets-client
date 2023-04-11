import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayHedphones from "./DisplayHedphones";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const HeadPhone = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(4);
  const routers = useLoaderData();
  console.log(routers);
  const handlePrevious = () => {
    if (previous > 0) {
      setPrevious(previous - 4);
      setNext(next - 4);
    }
  };
  const handleNext = () => {
    setPrevious(previous + 4);
    setNext(next + 4);
  };
  console.log(routers.length);

  return (
    <div className="">
      <div className="grid md:grid-cols-3 gap-5 px-4">
        {routers?.slice(previous, next).map((router) => (
          <DisplayHedphones router={router}></DisplayHedphones>
        ))}
      </div>
      <div className="flex justify-end items-center gap-4 my-10">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button onClick={() => handleNext()} disabled={next > routers.length}>
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default HeadPhone;
