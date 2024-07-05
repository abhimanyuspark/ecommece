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
      <div className="flex flex-col sm:gap-16 gap-4">
        {categoryProducts?.map((d, i) => (
          <div key={i} className="flex gap-4 flex-col">
            <Link to={`/product/${d?.id}`} className="group/show">
              <div
                className="text-white bg-blue-500 h-52 flex items-center justify-center w-full bg-no-repeat"
                style={{
                  backgroundImage: `url(${d?.thumbnail})`,
                }}
              >
                <div className="w-[600px] grid gap-2">
                  <h2 className="text-2xl group-hover/show:underline">
                    {d?.title}
                  </h2>
                  <p>{d?.description}</p>
                </div>
              </div>
            </Link>

            <div className="flex gap-4 flex-wrap">
              {d?.images?.map((img, index) => (
                <img
                  loading="lazy"
                  className="sm:w-52 w-20 aspect-square"
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
