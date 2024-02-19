import React from "react";
import { FLConverter } from "../utility/index";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <ul className="bg-white flex justify-between overflow-auto w-full px-4 border-b border-slate-200">
      { categories?.slice(0, 10).map((c, i) => (
        <li
          key={ i }
          className="flex items-center text-sm cursor-pointer hover:scale-[1.1] px-2 hover:text-[var(--blue)] hover:font-bold"
        >
          <Link to={ `/latest-products/${c}` } >
            { FLConverter(c) }
          </Link>
        </li>
      )) }
    </ul>
  );
};

export default Categories;
