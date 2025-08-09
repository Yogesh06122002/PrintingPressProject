// src/components/ProductGrid.jsx
import React from "react";
import { Products } from "../Data/Products"; // adjust path to your file

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-xl shadow hover:shadow-lg transition p-4"
          >
            {/* Product Image */}
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Read More Button */}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Read More
            </button>

            {/* Product Name */}
            <p className="mt-2 text-center font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
