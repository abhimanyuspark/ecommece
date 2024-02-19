import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RuppessConverter } from "../utility/index";

export const CarouselCard1 = ({ item }) => {
  return (
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
        <h2 className="text-xl font-bold group-hover/show:text-white">
          {item.title}
        </h2>
        <p className="flex gap-1 items-center font-bold text-lg">
          From <FaRupeeSign />
          {RuppessConverter(item?.price)}
        </p>
      </div>
    </Link>
  );
};

export const CarouselCard2 = ({ item }) => {
  return (
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
        <h2 className="text-xl font-bold group-hover/show:text-white">
          {item.title}
        </h2>
        <p className="flex gap-1 items-center font-bold text-lg">
          From <FaRupeeSign />
          {RuppessConverter(item?.price)}
        </p>
      </div>
    </Link>
  );
};
