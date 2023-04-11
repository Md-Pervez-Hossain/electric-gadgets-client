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
    <div className="md:w-9/12 mx-auto">
      <div>
        <Slider></Slider>
      </div>

      <div className="">
        <div className="pb-3">
          <h2 className="text-5xl font-semibold my-10">Gadgets Category</h2>
        </div>
        <div className="flex flex-row gap-5 justify-between  ">
          <div>
            <div className="font-semibold   gap-8 basis-3/12">
              <Link to="/home/headPhone">
                <div className="flex flex-wrap items-center gap-2 px-4 py-2  ">
                  <FaHeadphones></FaHeadphones>
                  <h2 className="">Headphone</h2>
                </div>
              </Link>
              <Link to="/home/router">
                <div className="flex items-center gap-2 pb-2 px-4 py-2 ">
                  <FaRoute></FaRoute>
                  <h2 className="">Router</h2>
                </div>
              </Link>
              <Link to="/home/videoPlayer">
                <div className="flex items-center gap-2 pb-2 px-4 py-2 ">
                  <FaViadeo></FaViadeo>
                  <h2 className="">Video Player</h2>
                </div>
              </Link>
            </div>
            <div className="mt-10">
              <div className=" h-96  carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full ">
                  <img src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="carousel-item h-full ">
                  <img src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="carousel-item h-full ">
                  <img src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-9/12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div>
        <FeaturedCategories></FeaturedCategories>
      </div>
    </div>
  );
};

export default Home;
