import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { CarouselCard1 } from "./CarouselCards";

const Carousel = ({ array, category, children }) => {
  const swiperRef = useRef();

  return (
    <div className="relative overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, A11y, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
      >
        <button
          className="absolute z-10 top-[35%] right-0 border border-slate-200 px-2 py-6 rounded-s-md hover:bg-white"
          onClick={() => swiperRef.current.slideNext()}
        >
          <FaAngleRight size={20} />
        </button>

        {array?.map((item, i) => {
          if (children) {
            // Render the child component if provided
            return (
              <SwiperSlide key={i} className="select-none bg-[var(--blue)]">
                {React.cloneElement(children, { item })}
              </SwiperSlide>
            );
          } else {
            // Render the default Carousel component
            return (
              item?.category === category && (
                <SwiperSlide key={i} className="select-none bg-[var(--blue)]">
                  <CarouselCard1 item={item} />
                </SwiperSlide>
              )
            );
          }
        })}

        <button
          className="absolute z-10 top-[35%] left-0 border border-slate-200 px-2 py-6 rounded-e-md hover:bg-white"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <FaAngleLeft size={20} />
        </button>
      </Swiper>
    </div>
  );
};

export default Carousel;
