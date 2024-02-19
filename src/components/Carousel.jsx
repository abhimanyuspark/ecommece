import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaRupeeSign } from "react-icons/fa";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { RuppessConverter } from "../utility/index";

const Carousel = ({ array, category }) => {
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

        {array?.map(
          (item, i) =>
            item.category === category && (
              <SwiperSlide key={i} className="select-none bg-[var(--blue)]">
                <Link
                  to={`/product/${item?.id}`}
                  className="flex items-center justify-center gap-8 group/show"
                >
                  <img
                    loading="lazy"
                    src={item?.thumbnail}
                    alt={item?.title}
                    className="sm:w-[14rem] w-52 aspect-square"
                  />
                  <div className="sm:flex gap-2 flex-col w-80 hidden py-5">
                    <h2 className="text-xl font-bold group-hover/show:text-[var(--blue)]">
                      {item.title}
                    </h2>
                    <p className="flex gap-1 items-center font-bold text-lg">
                      From <FaRupeeSign />
                      {RuppessConverter(item?.price)}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            )
        )}

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
