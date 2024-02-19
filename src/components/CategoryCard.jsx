import React from "react";
import { Link } from "react-router-dom";
import { FLConverter } from "../utility/index";

const CategoryCard = ({ product, category }) => {
  return (
    <Link
      to={`/category-products/${category}`}
      className="w-full h-full select-none grid gap-4 bg-white p-4"
    >
      <h2 className="text-2xl">{FLConverter(category)}</h2>
      <img
        src={product?.thumbnail}
        loading="lazy"
        alt={product?.title}
        className="w-full aspect-square hover:scale-[1.02]"
      />
    </Link>
  );
};

export default CategoryCard;
