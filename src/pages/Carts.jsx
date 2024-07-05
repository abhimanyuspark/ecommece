import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import { RuppessConverter, ParseFloat } from "../utility/index";
import {
  FaAngleLeft,
  FaDollarSign,
  FaRupeeSign,
  FaTimes,
} from "react-icons/fa";
import { removeCart } from "../redux/features/productSlice";
import { NotFound } from "../components/index";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Carts = () => {
  const { carts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [counters, setCounters] = useState({});
  const items = carts?.length;

  const shippingDiscount = () => items * "-2";
  const shipping = () => items * "4";
  const tax = () => items * "0";

  const handleCounterChange = (id, value) => {
    setCounters((prevCounters) => ({ ...prevCounters, [id]: value }));
  };

  const convert = (c) => {
    const float = (counters[c.id] || 1) * c.price;
    return ParseFloat(float);
  };

  const SubTotalPrice = () => {
    let totalPrice = 0;
    for (const c of carts) {
      totalPrice += convert(c);
    }
    return ParseFloat(totalPrice);
  };

  const TotalPrice = () => {
    return ParseFloat(
      SubTotalPrice() + Number(shipping() + tax() + shippingDiscount())
    );
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
      <div className="bg-white w-full p-4">
        <h1 className="text-[var(--blue)] text-4xl font-semibold">Your Cart</h1>
        <p>
          {items} item{items > 1 && "s"} ships at checkout
        </p>
      </div>

      <Link
        to="/ecommerce"
        className="flex gap-2 p-3 items-center font-semibold hover:text-[var(--blue)] border border-slate-200 bg-white"
      >
        <FaAngleLeft size={20} /> Continue Shopping
      </Link>

      <div className="relative flex gap-4 sm:flex-row flex-col-reverse items-start w-full">
        <div className="sm:w-[65%] w-full bg-white">
          {carts.length > 0 ? (
            carts.map((c) => (
              <div
                key={c.id}
                className="group/show flex justify-between py-8 px-4 border-b border-slate-300"
              >
                <div className="flex gap-6 h-auto">
                  <Link to={`/product/${c.id}`} className="w-[20%]">
                    <img
                      className="w-full aspect-square"
                      src={c?.thumbnail}
                      alt={c?.thumbnail}
                      loading="lazy"
                    />
                  </Link>

                  <div className="flex items-start justify-between flex-col w-[80%]">
                    <div>
                      <Link
                        className="group-hover/show:underline sm:w-full w-8"
                        to={`/product/${c.id}`}
                      >
                        {c.title}
                      </Link>
                      <p className="text-sm">1 item</p>
                    </div>

                    <Counter
                      id={c.id}
                      initialValue={counters[c.id] || 1}
                      counterFn={(value) => {
                        handleCounterChange(c.id, value);
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div
                    className="text-white bg-[var(--blue)] rounded-full w-6 aspect-square border flex items-center justify-center bg-black hover:bg-red-600 cursor-pointer"
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: `You want to remove ${c.title} from cart`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Remove",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          toast.success("Product has been removed from carts");
                          dispatch(removeCart(c?.id));
                        }
                      });
                    }}
                  >
                    <FaTimes size={12} />
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-sm flex gap-2 items-center">
                      <span>{counters[c.id] || 1}</span>
                      <span>x</span>
                      <span>{c?.price}</span>
                    </p>
                    <div className="flex items-center gap-1">
                      <FaDollarSign size={15} />
                      <p>{convert(c)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <NotFound />
          )}
        </div>

        <div className="sm:w-[35%] w-full h-auto flex flex-col gap-4 p-8 bg-white sm:sticky top-[100px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg">Summary</h2>
            <div className="flex flex-col gap-2 text-slate-400">
              <p className="text-sm flex justify-between">
                <span>Subtotal</span>
                <span className="flex gap-1 items-center">
                  <FaDollarSign />
                  {SubTotalPrice()}
                </span>
              </p>
              <p className="text-sm flex justify-between">
                <span>Shipping Discount</span>
                <span className="flex gap-1 items-center">
                  <FaDollarSign />
                  <span>{shippingDiscount()}</span>
                </span>
              </p>
              <p className="text-sm flex justify-between">
                <span>Shipping & handling</span>
                <span className="flex gap-1 items-center">
                  <FaDollarSign />
                  <span>{shipping()}</span>
                </span>
              </p>
              <p className="text-sm flex justify-between">
                <span>{"Tax (Calculated or checkout)"}</span>
                <span className="flex gap-1 items-center">
                  <FaDollarSign />
                  <span>{tax()}</span>
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-between font-bold">
            <div className="flex flex-col gap-2">
              <p className="text-lg ">Balance</p>
              <p className="text-sm">Convert to ruppess</p>
            </div>
            <div className="flex items-end flex-col gap-1">
              <div className="flex items-center gap-1 justify-end text-lg">
                <FaDollarSign />
                <p>{TotalPrice()}</p>
              </div>
              <div className="flex items-center gap-1 justify-end text-md">
                <FaRupeeSign />
                <p>{RuppessConverter(TotalPrice())}</p>
              </div>
            </div>
          </div>

          <button className="border bg-[var(--blue)] text-white p-3">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
