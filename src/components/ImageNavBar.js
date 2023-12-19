import React, { useState, useEffect } from "react";

const ImageNavBar = ({ products, onChange }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  useEffect(() => {
    setStartIndex(0);
  }, [products]);

  const handleScroll = (direction) => {
    const lastIndex = Math.max(0, products.length - itemsToShow);
    if (direction === "up" && startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (direction === "down" && startIndex < lastIndex) {
      setStartIndex((prevIndex) => Math.min(lastIndex, prevIndex + 1));
    }
  };

  return (
    <div className="flex flex-col flex-wrap w-[20%] items-center ">
      <div onClick={() => handleScroll("up")}>
        <svg
          className="h-8 w-8 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </div>
      {products?.length > 0
        ? products
            .slice(startIndex, startIndex + itemsToShow)
            .map((image, index) => (
              <div key={index} className="w-24 h-24 my-2 border shadow">
                <img
                  onClick={() => {
                    onChange(image);
                  }}
                  alt="product"
                  className="object-center w-full h-full block"
                  src={image}
                />
              </div>
            ))
        : null}
      <div onClick={() => handleScroll("down")}>
        <svg
          className="h-8 w-8 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default ImageNavBar;
