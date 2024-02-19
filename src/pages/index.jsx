import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Category = lazy(() => import("./Category"));
const NewPageCategory = lazy(() => import("./NewPageCategory"));
const Carts = lazy(() => import("./Carts"));
const ProductDetails = lazy(() => import("./ProductDetails"));
const Error = lazy(() => import("../components/Error"));

export { Home, Category, ProductDetails, Carts, Error, NewPageCategory };
