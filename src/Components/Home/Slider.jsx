import React from "react";

const Slider = () => {
  return (
    <div className="carousel ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://www.careeraddict.com/uploads/article/60910/workplace-cool-office-gadgets.png"
          className="w-full h-72"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
