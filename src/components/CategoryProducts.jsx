import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, ProductCard } from "./index";
import { getCategoryProducts } from "../redux/services/getProduct";

const CategoryProducts = ({ category, title, children }) => {
  const { categoryProducts, loading } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    }
  }, [dispatch, category]);

  if (loading) {
    return <Loader height={"0px"} />;
  }

  if (categoryProducts) {
    let filteredProducts = categoryProducts;
    if (title) {
      // Filter products if title is provided
      filteredProducts = categoryProducts.filter(
        (product) => product.title !== title
      );
    }

    return filteredProducts.map((product) => {
      if (children) {
        // Render the child component if provided
        return React.cloneElement(children, { product, key: product.id });
      } else {
        // Render the default ProductCard component
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      }
    });
  } else {
    return <Error />;
  }
};

export default CategoryProducts;
