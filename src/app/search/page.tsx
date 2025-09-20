"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // ✅ lucide-react

const products = [
  { id: 1, name: "Acme Slip-On Shoes", price: 45, image: "https://images.unsplash.com/photo-1600185365926-3a2f42a4a3b0?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Acme Circles T-Shirt", price: 20, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Acme Drawstring Bag", price: 12, image: "https://images.unsplash.com/photo-1588854337236-6889d631faa5?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Acme Keyboard", price: 150, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" },
];

const categories = ["All", "Bags", "Drinkware", "Electronics", "Footwear", "Headwear", "Hoodies", "Jackets", "Kids", "Pets", "Shirts", "Stickers"];
const sorts = ["Relevance", "Trending", "Latest arrivals", "Price: Low to high", "Price: High to low"];

export default function SearchPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Relevance");
  const [openFilter, setOpenFilter] = useState<"category" | "sort" | null>(null);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar - Collections */}
      <aside className="hidden md:block w-48 p-4 border-r border-gray-800">
        <h2 className="mb-4 font-semibold">Collections</h2>
        <ul className="space-y-2 text-sm">
          {categories.map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-blue-400 ${
                category === item ? "font-bold text-blue-400" : "text-gray-400"
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Middle Content - Products */}
      <main className="flex-1 p-4 md:p-6">
        {/* Product Grid (2 columns mobile, 4 columns desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-lg overflow-hidden border border-gray-800"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-48 sm:h-64"
              />
              <div className="p-4 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1 text-sm font-medium">
                  <span className="text-gray-200">{product.name}</span>
                  <span className="text-blue-400 font-semibold">${product.price} USD</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Sidebar - Sort */}
      <aside className="hidden md:block w-48 p-4 border-l border-gray-800">
        <h3 className="mb-4 font-semibold text-sm">Sort by</h3>
        <ul className="space-y-2 text-sm">
          {sorts.map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-blue-400 ${
                sort === item ? "font-bold text-blue-400 underline" : "text-gray-400"
              }`}
              onClick={() => setSort(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Sticky Filters */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 flex justify-around p-2">
        {/* Category Selector */}
        <div className="relative w-1/2">
          <button
            onClick={() => setOpenFilter(openFilter === "category" ? null : "category")}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium"
          >
            {category} <ChevronDown size={16} />
          </button>
          {openFilter === "category" && (
            <ul className="absolute bottom-12 left-0 w-full bg-gray-800 border border-gray-700 rounded-lg max-h-48 overflow-y-auto z-50">
              {categories.map((c) => (
                <li
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setOpenFilter(null);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                    category === c ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sort Selector */}
        <div className="relative w-1/2">
          <button
            onClick={() => setOpenFilter(openFilter === "sort" ? null : "sort")}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium"
          >
            {sort} <ChevronDown size={16} />
          </button>
          {openFilter === "sort" && (
            <ul className="absolute bottom-12 left-0 w-full bg-gray-800 border border-gray-700 rounded-lg max-h-48 overflow-y-auto z-50">
              {sorts.map((s) => (
                <li
                  key={s}
                  onClick={() => {
                    setSort(s);
                    setOpenFilter(null);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                    sort === s ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}