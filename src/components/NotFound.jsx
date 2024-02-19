import React from "react";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center p-4">
    <img
      src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      className="w-64 h-52"
      alt="not-found"
    />
    <p className="text-[var(--blue)] font-sans">Empty Cart</p>
  </div>
);

export default NotFound;
