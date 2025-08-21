import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Products } from "../Data/Products";
import { MdOutlineEditCalendar } from "react-icons/md";

const ProductDetail = () => {
  const { productName } = useParams();
  const [productDtl, setProductDtl] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let foundProduct = null;
    for (const categoryObj of Products) {
      const match = categoryObj.items.find(
        (item) =>
          item.name.toLowerCase() ===
          decodeURIComponent(productName).toLowerCase()
      );
      if (match) {
        foundProduct = { ...match, category: categoryObj.category };
      }
    }
    setProductDtl(foundProduct);
  }, [productName]);

  if (!productDtl) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="lg:flex gap-x-10 mt-10 mb-20 lg:px-20 px-5">
      <div className="border border-gray-300 lg:h-[600px] lg:w-[50%] flex justify-center ">
        <img src={productDtl.images[0]} alt="" className="h-64 lg:h-full " />
      </div>
      <div className="lg:w-[50%] space-y-5">
        <h1 className="text-3xl text-gray-800  font-semibold lg:mt-0 mt-5">
          {productDtl.name}
        </h1>
        <h2 className="text-lg font-medium text-gray-500">
          <span className="">Category :</span> {productDtl.category}
        </h2>
        <h2 className="underline text-xl font-medium text-green-800">
          Product Description
        </h2>
        <p className="mt-6 tracking-wide">{productDtl.disc}</p>
        <button
          className="my-3 px-4 py-1.5 flex items-center gap-3 text-white font-medium rounded 
                             bg-gradient-to-r from-[#00A183] to-[#00c9a7] 
                             shadow-md hover:shadow-lg transition-all duration-300 ease-in-out outline-none cursor-pointer"
        >
          <MdOutlineEditCalendar />
          <span>Enquiry</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
