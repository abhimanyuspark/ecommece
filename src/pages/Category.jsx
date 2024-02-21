import React from "react";
import { useParams } from "react-router-dom";
import { CategoryProducts, ProductsFilter } from "../components/index";

const Category = () => {
  const { category } = useParams();
  return (
    <div className="grid sm:grid-cols-[18rem_1fr] grid-rows-[auto_1fr] grid-cols-1 p-4 gap-4">
      <div className="">
        <ProductsFilter category={category} />
      </div>
      <div className="bg-white">
        <CategoryProducts category={category} />
      </div>
    </div>
  );
};

export default Category;
