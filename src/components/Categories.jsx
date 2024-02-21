import React, { useRef } from "react";
import { FLConverter } from "../utility/index";
import { NavLink } from "react-router-dom";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Categories = ({ categories }) => {
  const swiperRef = useRef();

  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      slidesPerView={5}
      slidesPerGroup={5}
      modules={[A11y]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="relative w-full sm:px-[4%] p-7"
    >
      <button
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
        className="absolute z-10 top-0 left-0 w-8 h-full flex items-center justify-center hover:text-[var(--blue)] bg-white cursor-pointer"
      >
        <FaAngleLeft />
      </button>

      {categories?.slice(0, 20).map((c, i) => (
        <SwiperSlide
          key={i}
          className="flex items-center text-sm cursor-pointer hover:text-[var(--blue)]"
        >
          <NavLink
            to={`/latest-products/${c}`}
            className={`active:text-[var(--blue)]`}
          >
            {FLConverter(c)}
          </NavLink>
        </SwiperSlide>
      ))}

      <button
        onClick={() => {
          swiperRef.current.slideNext();
        }}
        className="absolute z-10 top-0 right-0 w-8 h-full flex items-center justify-center hover:text-[var(--blue)] bg-white cursor-pointer"
      >
        <FaAngleRight />
      </button>
    </Swiper>
  );
};

export default Categories;
