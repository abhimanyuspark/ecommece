import React from "react";
import { FLConverter } from "../utility/index";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <ul className="bg-white flex gap-2 overflow-auto w-full px-2 border-b border-slate-200">
      {categories?.map((c, i) => (
        <li
          key={i}
          className="flex items-center text-sm cursor-pointer hover:scale-[1.1]"
        >
          <Link to={`/category/${c}`} className="px-2">
            {FLConverter(c)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
