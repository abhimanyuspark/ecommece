import React, { useState } from "react";

const ImageMagnifier = ({ imageUrl = "", magnificationRatio = 2 }) => {
  const [magnify, setMagnify] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    let x = (e.clientX - left) / width;
    let y = (e.clientY - top) / height;

    // Ensure x and y values are within bounds [0, 1]
    x = Math.max(0, Math.min(1, x));
    y = Math.max(0, Math.min(1, y));

    setPosition({ x, y });
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMagnify(true)}
      onMouseLeave={() => setMagnify(false)}
    >
      {/* Image */}
      <img src={imageUrl} alt="Magnify" className="w-full aspect-square" />
      {/* Lens */}
      {magnify && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: `${200}px`,
            height: `${150}px`,
            transform: "translate(-50%, -50%)",
            left: `${position.x * 100}%`,
            top: `${position.y * 100}%`,
            zIndex: 10,
          }}
        ></div>
      )}
      {/* Magnified image window */}
      {magnify && (
        <div
          className="absolute border top-0 right-[-755px] border-gray-300 pointer-events-none"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
            backgroundSize: `${100 * magnificationRatio}% ${
              100 * magnificationRatio
            }%`,
            width: `${750}px`,
            height: `${485}px`,
            zIndex: 10,
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageMagnifier;
