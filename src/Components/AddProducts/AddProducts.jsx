import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const productName = event.target.productName.value;
    const OriginalPrice = event.target.originalPrice.value;
    const reSellPrice = event.target.reSellPrice.value;
    const image = event.target.image.files[0];
    const location = event.target.location.value;
    const sellerName = event.target.sellerName.value;
    const productCategory = event.target.productCategory.value;
    const productDetails = event.target.productDetails.value;
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const productsInfo = {
          productName,
          OriginalPrice,
          reSellPrice,
          location,
          sellerName,
          productCategory,
          productDetails,
          image: data.data.display_url,
          time,
        };
        console.log(productsInfo);
        fetch("http://localhost:5000/addProducts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productsInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/home");
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  return (
    <div className="w-9/12 mx-auto my-10">
      <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Type Your Product Name Here"
                className="input input-bordered w-full "
                required
              />
            </div>
          </div>
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="text"
                required
                name="originalPrice"
                placeholder="Type Your Product Price Here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Resell Price</span>
              </label>
              <input
                type="text"
                required
                name="reSellPrice"
                placeholder="Enter Your Product Resale price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                required
                name="location"
                placeholder="Enter Your Location Here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                required
                name="sellerName"
                placeholder="Enter Your Seller Name Here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <div>
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <select
                className="select select-bordered w-full  "
                name="productCategory"
              >
                <option>HeadPhone</option>
                <option>Router</option>
                <option>Scanner</option>
                <option>MobileCharger</option>
                <option>PowerBank</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="label ">
            <span className="label-text">Product Photo</span>
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="mt-5">
          <label className="label ">
            <span className="label-text">Product Details</span>
          </label>
          <textarea
            required
            name="productDetails"
            className="textarea textarea-bordered w-full "
            placeholder="Product Details"
          ></textarea>
        </div>
        <div className="mt-5">
          <button className="w-full bg-green-500 py-4 rounded-lg text-xl font-bold text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
