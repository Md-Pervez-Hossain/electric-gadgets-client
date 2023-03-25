import React, { useContext } from "react";
import { FaHeadphones, FaRoute, FaViadeo } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import Slider from "./Slider";

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex flex-row   gap-5">
        <div className="basis-1/5 sticky ">
          <div className="pb-3">
            <h2 className="text-2xl font-bold bg-green-500 text-white px-2 py-2">
              Gadgets Category
            </h2>
          </div>
          <div className="font-semibold">
            <Link to="/home/headPhone">
              <div className="flex items-center gap-2 pb-2">
                <FaHeadphones></FaHeadphones>
                <h2 className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-green-500 duration-300">
                  Headphone
                </h2>
              </div>
            </Link>
            <Link to="/home/router">
              <div className="flex items-center gap-2 pb-2">
                <FaRoute></FaRoute>
                <h2 className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-green-500 duration-300">
                  Router
                </h2>
              </div>
            </Link>
            <Link to="/home/videoPlayer">
              <div className="flex items-center gap-2 pb-2">
                <FaViadeo></FaViadeo>
                <h2 className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-green-500 duration-300">
                  Video Player
                </h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="basis-4/5">
          <Slider></Slider>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <FeaturedCategories></FeaturedCategories>
      </div>
    </div>
  );
};

export default Home;
