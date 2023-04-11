import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductsData } from "../../Components/ProductsData/ProductsData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
// import "./styles.css";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {ProductsData.map((product) => {
          return (
            <SwiperSlide>
              <div className="flex flex-wrap items-center  flex-wrape justify-around  ">
                <div className="relative">
                  <img src={product.image} alt="" className="brightness-50 " />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white ">
                    <h2 className="text-5xl ">{product.title}</h2>
                    <p>{product.description}</p>
                    <Link to="/shop">
                      <button className="bg-white text-black px-4 py-2 my-4">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
