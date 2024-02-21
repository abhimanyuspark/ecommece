import React from "react";
import { useSelector } from "react-redux";
import { NotFound, CategoryCard } from "./index";

const AllCategory = ({ products }) => {
  const { category } = useSelector((state) => state.category);

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {category?.map((c) => {
        // Find the first product in the current category
        const firstProduct = products?.find(
          (product) => product.category === c
        );
        if (!firstProduct) return null; // If no product found in this category, skip rendering

        return <CategoryCard key={c} product={firstProduct} category={c} />;
      })}
    </div>
  );
};

export default AllCategory;
