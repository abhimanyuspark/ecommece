import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Error = () => {
  const loaction = useLocation();

  return (
    <div className="flex items-center justify-center flex-col gap-4 pt-10">
      <div>
        <h1 className="not-found not-found-text font-bold text-[200px]">
          Oops!
        </h1>
      </div>

      <h3 className="font-extrabold text-xl text-[var(--blue)]">
        404 - PAGE NOT FOUND
      </h3>
      <p className="w-[450px] text-center font-semibold">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      {loaction.pathname !== "/" && (
        <Link
          to="/"
          className="px-4 py-2 rounded-md flex items-center gap-2 not-found text-white"
        >
          <FaArrowLeft /> Back to home page
        </Link>
      )}
    </div>
  );
};

export default Error;
