import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./style.scss";
const Slider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg"
            alt=""
          />
          <div  className="slider__content">
          <div className="slider__content__text">  
          <p>
          Book a table for yourself at a time convenient for you
          </p>
          <button>Book a Table</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg"
            alt=""
          />
           <div  className="slider__content">
          <div className="slider__content__text">  
          <p>
          Lorem ipsum dolor sit amet consectetur.
          </p>
          <button>Book a Table</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg"
            alt=""
          />
           <div  className="slider__content">
          <div className="slider__content__text">  
          <p>
         Lorem ipsum dolor sit.
          </p>
          <button>Book a Table</button>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="slider__content">
        <div className="slider__content__text"></div>
      </div>
    </section>
  );
};

export default Slider;
