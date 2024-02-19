import React from "react";
import L from "./Loader.module.css";

const Loader = ({ height }) => {
  return (
    <div
      className={L.lds_ring}
      style={{
        height: height ? `calc(100vh - ${height})` : "calc(100vh - 70px)",
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
