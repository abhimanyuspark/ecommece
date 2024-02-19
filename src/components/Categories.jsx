import React, { useRef } from "react";
import { FLConverter } from "../utility/index";
import { Link } from "react-router-dom";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Categories = ({ categories }) => {
  const swiperRef = useRef();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      slidesPerGroup={5}
      modules={[A11y]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="relative w-full pl-[10%]"
    >
      <button
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
        className="absolute z-10 top-3 left-0 p-2 hover:text-[var(--blue)]"
      >
        <FaAngleLeft />
      </button>

      {categories?.slice(0, 20).map((c, i) => (
        <SwiperSlide
          key={i}
          className="flex items-center text-sm cursor-pointer hover:text-[var(--blue)]"
        >
          <Link to={`/latest-products/${c}`}>{FLConverter(c)}</Link>
        </SwiperSlide>
      ))}

      <button
        onClick={() => {
          swiperRef.current.slideNext();
        }}
        className="absolute z-10 top-3 right-0 p-2 hover:text-[var(--blue)]"
      >
        <FaAngleRight />
      </button>
    </Swiper>
  );
};

export default Categories;
