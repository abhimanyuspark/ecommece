import React from "react";

const ProductsFilter = ({ category }) => {
  return (
    <div className="bg-white">
      <h2 className="text-xl font-boldt p-4 border-b border-slate-200">
        Filter
      </h2>
      <div className="h-auto">
        <div className="flex gap-2 p-4 flex-col text-sm border-b border-slate-200">
          <p>Category</p>
          <p className="pl-4 font-bold">{category}</p>
        </div>

        <div className="border-b border-slate-200 p-4"></div>
      </div>
    </div>
  );
};

export default ProductsFilter;
