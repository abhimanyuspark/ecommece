import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../redux/services/getProduct";
import {
  Error,
  Loader,
  CategoryProducts,
  ProductCard2,
  RateBox,
  Ruppess,
  Rating_Reviews,
} from "../components/index";
import { RuppessConverter, Percentage } from "../utility/index";
import { addCart } from "../redux/features/productSlice";
import { FaCartPlus, FaRupeeSign, FaCheck, FaTag } from "react-icons/fa";
import { discount } from "../data/someData.json";
import SuperCoin from "../assets/SuperCoin.webp";
import ImageMagnifier from "../components/ImageMagnifier";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productDetails, loading, carts } = useSelector(
    (state) => state.products
  );
  const [image, setImage] = useState("");
  const added = carts?.some((cartItem) => cartItem?.id === productDetails?.id);

  useEffect(() => {
    dispatch(getProductDetails(id));
    setImage("");
  }, [dispatch, id]);

  const addProductToCarts = async (p) => {
    if (!added) {
      await dispatch(addCart(p));
      toast.success(p.title + " Added Successfully!");
      navigate("/carts");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (
    productDetails &&
    productDetails !== null &&
    productDetails !== undefined
  ) {
    const {
      title,
      thumbnail,
      description,
      price,
      brand,
      category,
      images,
      rating,
      discountPercentage,
    } = productDetails;

    const pri = RuppessConverter(price);
    const dis = Math.floor(discountPercentage);

    return (
      <div className="p-4 flex gap-10 flex-col">
        <div className="grid sm:grid-cols-[40%_1fr] grid-rows-[auto_auto] grid-cols-1  p-2 gap-4 items-start sm:flex-row flex-col bg-white">
          <div className="flex sm:sticky top-2">
            {images?.length > 0 && (
              <div className="flex flex-col cursor-pointer">
                {images?.map((img) => (
                  <img
                    key={img}
                    className={` ${
                      image === img
                        ? "border-2 border-[var(--blue)]"
                        : "border border-slate-200"
                    } w-[80px] aspect-square`}
                    alt={img}
                    loading="lazy"
                    src={img}
                    onMouseEnter={() => {
                      setImage(img);
                    }}
                  />
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2">
              {/* <img
                className="w-[450px] aspect-square border border-slate-200"
                alt={image || thumbnail}
                loading="lazy"
                src={image || thumbnail}
              /> */}
              <ImageMagnifier imageUrl={image || thumbnail} />
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    addProductToCarts(productDetails);
                  }}
                  className={`w-full flex items-center justify-center gap-2 py-2 text-white ${
                    added ? "bg-green-700" : "bg-yellow-500"
                  }`}
                >
                  {added ? <FaCheck size="18" /> : <FaCartPlus size="18" />}
                  <span className="font-bold text-lg">
                    {added ? "Added" : "Add Cart"}
                  </span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-orange-500 w-full py-2 text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start flex-col gap-4">
            <h1 className="text-2xl">{title}</h1>

            <div className="flex gap-2">
              <RateBox rating={rating} />{" "}
              <span className="text-slate-500 text-sm">Rating</span>
            </div>

            <div className="flex gap-4 items-center">
              <h2 className="text-3xl flex items-center gap-1">
                <FaRupeeSign size="25" />
                {Percentage(pri, dis)}
              </h2>
              <s className="text-slate-500">
                <Ruppess />
                {pri}
              </s>
              <p className="text-green-600">{dis}% off</p>
            </div>

            <h3 className="text-xl">Available offers</h3>
            <DiscountComponent />

            <div className="flex gap-4 items-center">
              <div className="border border-slate-300 rounded-sm py-1 px-3">
                {brand}
              </div>
              <p className="text-slate-500 text-base">1 Year Warranty</p>
            </div>

            <div className="w-[350px] flex gap-1 items-center">
              <img src={SuperCoin} alt={SuperCoin} className="w-48 h-20" />
              <div className="flex gap-2 flex-col">
                <p className="font-bold text-sm">
                  For every year <Ruppess />
                  100 Spent, you earn 200 supercoins
                </p>
                <span className="text-sm text-slate-400">
                  Max 50 coins per order
                </span>
              </div>
            </div>

            <div className="flex gap-10 text-sm ">
              <p className="text-slate-400">Description</p>
              <p>{description}</p>
            </div>

            <div className="border border-slate-300 p-4 w-full">
              <h1 className="text-xl">Ratings & Reviews</h1>

              <div>
                <Rating_Reviews />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col bg-white p-4">
          <h2 className="text-2xl">Similar products</h2>
          <div className="grid gap-4 sm:grid-cols-4 grid-cols-2 lg:grid-cols-5">
            <CategoryProducts title={title} category={category}>
              <ProductCard2 />
            </CategoryProducts>
          </div>
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

const DiscountComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const remainingItems = showAll ? 0 : Math.max(0, discount.length - 2);

  return (
    <div className="flex gap-4 flex-col items-start">
      {discount.slice(0, showAll ? discount.length : 2).map((d, i) => (
        <p key={i} className="text-sm flex gap-2 items-center">
          <FaTag className="text-green-600" size="15" />
          {d}
          <span className="text-indigo-600">T&C</span>
        </p>
      ))}
      {discount.length > 2 && (
        <button onClick={handleClick} className="text-sm text-blue-600">
          {showAll ? `less` : `${remainingItems} more offers`}
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
