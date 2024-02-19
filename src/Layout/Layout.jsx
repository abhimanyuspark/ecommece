import React, { Suspense, useRef } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import {
  Categories,
  Loader,
  ScrollToTopOnPageChange,
} from "../components/index";
import { useSelector } from "react-redux";

const Layout = () => {
  const { category } = useSelector((state) => state.category);
  const divRef = useRef();

  return (
    <div className="grid grid-rows-[70px_60px_1fr] h-[100vh]">
      <ScrollToTopOnPageChange refs={divRef} />
      <Navbar />

      <Categories categories={category} />

      <div
        ref={divRef}
        className="h-[calc(100vh-130px)] overflow-auto scroll-smooth bg-slate-200"
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
