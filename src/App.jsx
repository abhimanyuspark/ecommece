import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Home, Error, ProductDetails, Carts, Category } from "./pages/index";
import { Loader } from "./components/index";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts, getCategory } from "./redux/services/getProduct";
const Layout = lazy(() => import("./Layout/Layout"));
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader height="0px" />}>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category-products/:category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/carts" element={<Carts />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
