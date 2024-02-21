import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Percentage, RuppessConverter } from "../utility/index";
import { Ruppess, RateBox } from "./index";

const ProductCard = ({ product }) => {
  const price = RuppessConverter(product?.price);
  const dis = Math.floor(product?.discountPercentage);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group/show w-full h-full p-8 flex gap-4 select-none border-b border-slate-200 sm:flex-row flex-col"
    >
      <img
        src={product?.thumbnail}
        loading="lazy"
        alt={product?.title}
        className="w-full aspect-square sm:w-52"
      />
      <div className="flex items-start gap-4">
        <div className="flex flex-col gap-2 items-start w-[30rem]">
          <div>
            <p className="text-slate-400 text-sm">Sponserd</p>
            <p className="group-hover/show:text-[var(--blue)] sm:w-full w-full text-xl font-semibold">
              {product.title}
            </p>
          </div>
          <RateBox rating={product?.rating} />
          <div>{product?.description}</div>
        </div>

        <div>
          <p className="flex items-center gap-1 font-bold text-xl">
            <FaRupeeSign size="20" />
            <span>{Percentage(price, dis)}</span>
          </p>
          <div className="flex items-center text-sm gap-4">
            <s className="flex items-center">
              <Ruppess />
              <p>{price}</p>
            </s>
            <p className="text-green-700 font-semibold">{dis}%off</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
