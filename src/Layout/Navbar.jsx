import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { carts } = useSelector((state) => state.products);

  return (
    <nav className="w-full bg-[var(--blue)] flex items-center justify-between px-6">
      <div className="flex gap-4 items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div className="flex flex-col items-center group/show">
          <Link to="/" className="text-lg font-bold text-white">
            Products
          </Link>
          <div
            style={{ transition: "0.2s linear" }}
            className="group-hover/show:w-full w-0 h-[2px] bg-white"
          ></div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-white">
        <Link
          to="/carts"
          className="relative rounded-full p-[0.6rem] active:bg-slate-100 active:outline outline-2 outline-slate-100 outline-offset-2 hover:text-[var(--blue)] hover:bg-white"
        >
          <FaCartPlus size={22} />

          {carts.length > 0 && (
            <span className="absolute top-0 right-0 w-5 aspect-square rounded-full bg-[var(--blue)] border border-white text-white text-xs flex items-center justify-center">
              {carts.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
