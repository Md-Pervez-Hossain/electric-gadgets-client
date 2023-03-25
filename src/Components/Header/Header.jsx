import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import {
  FaCarAlt,
  FaCartPlus,
  FaCircle,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Header = () => {
  const { cart, user, userLogout } = useContext(UserContext);
  const handleLogout = () => {
    userLogout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className=" sticky top-0 pb-4 z-10 mb-10 bg-white shadow-lg ">
      <div className=" w-9/12 mx-auto  ">
        <div className="flex justify-between items-center py-4 bg-green-500 text-white px-4 mb-5">
          <div>
            <h2 className="">Free Shipping For All Products</h2>
          </div>
          <div className="flex  gap-5 items-center">
            <Link
              className="hover:text-white transition duration-700 ease-out "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="hover:text-white transition duration-700 ease-out "
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="hover:text-white transition duration-700 ease-out "
              to="/addProducts"
            >
              Add Product
            </Link>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="basis-1/5 ">
            <Link to="/home/headPhone">
              <h2 className="font-bold text-xl">Smart Gadgets</h2>
            </Link>
          </div>
          <div className="flex gap-3 items-center basis-4/5 ">
            <input
              className="w-full py-3 border-2 border-green-500 px-5"
              placeholder="Search products "
            ></input>
            <button className="bg-green-500 ml-[-30px] px-4 py-3 text-white border-2 border-green-500">
              Submit
            </button>
            {user?.uid ? (
              <>
                {" "}
                <Link to="/cartPage">
                  <FaCartPlus></FaCartPlus>
                </Link>
                <Link to="/wishlist">
                  <FaHeart></FaHeart>
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/cartPage">
                  <FaCartPlus></FaCartPlus>
                </Link>
                <Link to="/wishlist">
                  <FaHeart></FaHeart>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
