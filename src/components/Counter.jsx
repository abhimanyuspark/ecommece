import React, { useEffect, useState, memo } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = memo(({ initialValue, counterFn }) => {
  const [counter, setCounter] = useState(initialValue || 1);
  const checkMinus = counter === 1;
  const checkPlus = counter === 100;

  useEffect(() => {
    counterFn && counterFn(counter);
  }, [counter]);

  return (
    <div className="flex items-center justify-between sm:gap-2 gap-1 border border-black w-auto px-2 py-1">
      <button
        disabled={checkMinus}
        className={`hover:text-indigo-400 ${checkMinus && "text-indigo-400"}`}
        onClick={() => {
          setCounter((p) => p - 1);
        }}
      >
        <FaMinus size="12" />
      </button>
      <input
        type="text"
        className="w-8 outline-0"
        value={counter}
        onChange={(e) => {
          const value = e.target.value;
          if (
            value === "" ||
            (!isNaN(value) && Number(value) >= 1 && Number(value) <= 100)
          ) {
            // If the value is empty or a non-negative number
            setCounter(value === "" ? 1 : Number(value));
          }
        }}
      />
      <button
        disabled={checkPlus}
        className={`hover:text-indigo-400 ${checkPlus && "text-indigo-400"}`}
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        <FaPlus size="12" />
      </button>
    </div>
  );
});

export default Counter;
