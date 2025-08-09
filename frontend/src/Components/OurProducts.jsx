import React from "react";
import HomeProducts from "./HomeProducts";

const OurProducts = () => {
  return (
    <div>
      <h1 className="text-center tracking-wider text-[#00A183] font-medium text-2xl md:text-3xl">
        Discover Our Products
      </h1>
      <p className="text-center font-normal tracking-wider text-base text-gray-500">
        Explore our best-selling and most interesting products
        <br />
        You’re sure to find exactly what you need.
      </p>
      <HomeProducts />
    </div>
  );
};

export default OurProducts;
