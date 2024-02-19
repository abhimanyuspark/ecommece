import React from "react";
import { FaStar } from "react-icons/fa";

const RateBox = ({ rating }) => {
  return (
    <div className="w-auto rounded-[0.2rem] bg-green-800 py-1 px-2 flex gap-1 items-center text-white text-xs">
      {rating} <FaStar size={10} />
    </div>
  );
};

export default RateBox;
