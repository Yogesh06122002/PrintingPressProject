// src/components/ProductGrid.jsx
import { Products } from "../Data/Products"; // adjust path to your file
import { FaCartShopping } from "react-icons/fa6";

export default function ProductGrid() {
  // Flatten all products into one array
  const allItems = Products.flatMap((category) => {
    if (category.category === "printedLabels") {
      return category.items.slice(0, 2); // only first 2 for printedLabels
    }
    return category.items;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-7">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  items-center transition-transform duration-300 hover:scale-105 rounded-lg shadow-xl/20  transition "
          >
            {/* Product Image */}
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Product Name */}
            <p className="mt-2 text-center font-medium">{item.name}</p>
            {/* Read More Button */}
            <button
              className="my-3 px-4 py-1.5 flex items-center gap-3 text-white font-medium rounded 
                     bg-gradient-to-r from-[#00A183] to-[#00c9a7] 
                     shadow-md hover:shadow-lg transition-all duration-300 ease-in-out outline-none"
            >
              <FaCartShopping />
              <span>Read More</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
