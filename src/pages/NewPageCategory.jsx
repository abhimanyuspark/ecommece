import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../redux/services/getProduct";
import { Loader } from "../components/index";

const NewPageCategory = () => {
  const { newCategory } = useParams();
  const { categoryProducts, loading } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newCategory) {
      dispatch(getCategoryProducts(newCategory));
    }
  }, [dispatch, newCategory]);

  if (loading) {
    return <Loader height={"0px"} />;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col gap-16">
        {categoryProducts?.map((d, i) => (
          <div key={i} className="flex gap-4 flex-col">
            <div className="relative">
              <Link to={`/product/${d?.id}`}>
                <img
                  className="w-full h-72 blur"
                  alt={d?.title}
                  src={d?.thumbnail}
                />
                <div className="absolute top-1/3 left-1/4">
                  <h2 className="text-2xl">{d?.title}</h2>
                  <p>{d?.description}</p>
                </div>
              </Link>
            </div>
            <div className="flex gap-4">
              {d?.images.map((img, index) => (
                <img
                  className="w-52 aspect-square rounded-md"
                  key={index}
                  alt={img}
                  src={img}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPageCategory;
