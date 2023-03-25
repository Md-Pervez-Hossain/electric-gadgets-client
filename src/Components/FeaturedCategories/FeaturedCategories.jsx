import React from "react";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  return (
    <div>
      <div className="  mx-auto mt-16 mb-10">
        <h2 className="font-bold"> Electric Gadgets Collections</h2>
        <p className="text-7xl font-bold mb-10">Fatured products</p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <Link to="/home/headPhone">
          <div className=" z-10  shadow-lg p-4 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            <div>
              <img
                src="https://c8.alamy.com/comp/H7AAG1/young-man-with-shopping-bags-H7AAG1.jpg"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </Link>
        <div className=" grid grid-cols-2 gap-4">
          <div className="shadow-lg p-4 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            <img
              src="https://static.mercusys.com/product-image/1_normal20221108011748.jpg"
              alt=""
            />
          </div>
          <div className="shadow-lg p-4 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            <img
              src="https://static-01.daraz.com.bd/p/8319bcf25dbd3b51c005c356d323a269.jpg"
              alt=""
            />
          </div>
          <div className="shadow-lg p-4 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="shadow-lg p-4 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            <img
              src="https://i.insider.com/63f9126e86669d00182482e7?width=1136&format=jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
