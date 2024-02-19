import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { ClickOutside } from "../utility/index";
import { setSearch } from "../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [show, setShow] = useState(false);
  const { search } = useSelector((state) => state.products);
  const inputRef = useRef(null);
  const parentRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  ClickOutside(() => {
    if (search === "") {
      setShow(false);
    }
  }, parentRef);

  return (
    <div
      ref={parentRef}
      style={{ transition: "0.3s ease" }}
      className={`flex items-center h-10 text-[var(--blue)] border-b-2 ${
        show ? "border-[var(--blue)]" : "border-transparent"
      }`}
    >
      <FaSearch
        size={20}
        onClick={() => {
          setShow(!show);
        }}
        className="cursor-pointer hover:text-indigo-400"
      />

      <input
        ref={inputRef}
        type="text"
        placeholder="Search name / category"
        value={search}
        style={{ transition: "0.3s ease" }}
        className={`${
          show ? "sm:w-72 w-40" : "w-0"
        } px-2 text-black focus:outline-0 border-0 bg-transparent`}
        onChange={(e) => {
          const value = e.target.value;
          dispatch(setSearch(value));
        }}
      />

      {show && (
        <FaTimes
          size={15}
          onClick={() => {
            dispatch(setSearch(""));
            setShow(false);
          }}
          className="cursor-pointer hover:text-red-500"
        />
      )}
    </div>
  );
};

export default Search;
