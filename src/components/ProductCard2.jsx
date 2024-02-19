import React from "react";
import { Link } from "react-router-dom";
import { FLConverter, RuppessConverter, Percentage } from "../utility/index";
import { RateBox, Ruppess } from "./index";

const ProductCard2 = ({ product }) => {
  const price = RuppessConverter(product?.price);
  const dis = Math.floor(product?.discountPercentage);

  return (
    <Link
      to={`/product/${product?.id}`}
      className="group/show w-full h-full select-none grid gap-4 bg-white"
    >
      <img
        src={product?.thumbnail}
        loading="lazy"
        alt={product?.title}
        className="w-full aspect-square"
      />
      <div className="flex flex-col items-start">
        <h2 className="text-lg group-hover/show:text-[var(--blue)]">
          {FLConverter(product?.title)}
        </h2>
        <RateBox rating={product?.rating} />
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            <Ruppess />
            {Percentage(price, dis)}
          </p>
          <s className="text-sm flex gap-1 items-center">
            <Ruppess />
            {price}
          </s>
        </div>
        <p className="text-green-600 text-sm">{dis}% off</p>
      </div>
    </Link>
  );
};

export default ProductCard2;
