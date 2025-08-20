import React from "react";
import HomeProducts from "./HomeProducts";

const OurProducts = () => {
  return (
    <div className="mt-5">
      <div className="bg-[#EBF7ED] text-center   p-5 px-10">
        <h1 className="text-[#10572F]  font-medium text-2xl md:text-3xl">
          Welcome to Sree Kalai Printing Press
        </h1>
        <p className="mt-5 text-lg">
          We have been in the printing field since 1977, using only{" "}
          <span className="font-medium">Oeko-Tex certified dyes</span> and{" "}
          <span className="font-medium">satin & taffeta roll materials</span>.{" "}
          Labels are produced with the{" "}
          <span className="font-medium">ultrasonic process</span> using quality
          plates for <span className="font-medium">PHD & fastness.</span> We use{" "}
          <span></span>
          <span className="font-medium">
            FSC certified and recycled boards, tested stickers, coated inner
            boards, tissue papers
          </span>{" "}
          , and source papers directly from dealers for consistent quality. Our
          capacity:
          <span className="font-medium">
            {" "}
            3.5 lakh double-side printed labels with cutting, 2 lakh center fold
            long labels, and 2 lakh size tags per day
          </span>
          . We also produce{" "}
          <span className="font-medium"> photo cards and metal boxes</span> as
          per size requirements. Our factory is
          <span className="font-medium"> audit-approved</span> and ensures
          strict quality checks at every stage.
        </p>
      </div>
      <h1 className="text-center tracking-wider text-[#00A183] font-medium text-2xl md:text-3xl">
        Discover Our Products
      </h1>
      <p className="text-center font-normal tracking-wider text-base text-gray-500">
        Explore our best-selling and interesting products
        <br />
        You’re sure to find exactly what you need.
      </p>
      <HomeProducts />
    </div>
  );
};

export default OurProducts;
