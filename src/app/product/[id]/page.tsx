"use client";
import { useState } from "react";
import Image from "next/image";
// Mock product data
const mockProduct = {
  id: "1",
  name: "Acme Circles T-Shirt",
  price: 20,
  description: "60% combed ringspun cotton / 40% polyester jersey tee.",
  images: [
    "/images/shirt-black.png",
    "/images/shirt-white.png",
    "/images/shirt-blue.png",
  ],
  colors: ["Black", "White", "Blue"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
};

// Mock related products
const relatedProducts = [
  { id: "2", name: "Minimal Hoodie", price: 45, image: "/images/hoodie.png" },
  { id: "3", name: "Slim Fit Jeans", price: 60, image: "/images/jeans.png" },
  { id: "4", name: "Classic Cap", price: 25, image: "/images/cap.png" },
  { id: "5", name: "Sneakers", price: 80, image: "/images/sneakers.png" },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(mockProduct.images[0]);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[1]);

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      productId: mockProduct.id,
      color: selectedColor,
      size: selectedSize,
    });
    alert("Item added to cart!");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-start px-4 pb-24 md:pb-10">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-10">
        {/* Left: Product Image */}
        <div className="space-y-4">
          <div className="bg-neutral-900 rounded-xl p-6 flex items-center justify-center">
            <Image
              src={selectedImage}
              alt={mockProduct.name}
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 justify-center">
            {mockProduct.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-lg p-1 transition ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-neutral-700"
                }`}
              >
                <Image src={img} alt="thumb" className="w-16 h-16 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-6 max-w-md mx-auto">
          <h1 className="text-3xl font-bold">{mockProduct.name}</h1>
          <p className="text-blue-500 font-semibold text-lg">
            ${mockProduct.price.toFixed(2)} USD
          </p>
          <hr className="border-neutral-800" />

          {/* Colors */}
          <div>
            <h3 className="font-semibold mb-2">COLOR</h3>
            <div className="flex gap-2 flex-wrap">
              {mockProduct.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 text-sm rounded-full border transition ${
                    selectedColor === color
                      ? "bg-blue-600 border-blue-500 text-white"
                      : "bg-neutral-800 border-neutral-700 text-gray-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-semibold mb-2">SIZE</h3>
            <div className="flex gap-2 flex-wrap">
              {mockProduct.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-sm rounded-full border transition ${
                    selectedSize === size
                      ? "bg-blue-600 border-blue-500 text-white"
                      : "bg-neutral-800 border-neutral-700 text-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-400">{mockProduct.description}</p>

          {/* Desktop Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="hidden md:block w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-base transition"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="w-full max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-900 p-4 rounded-lg hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-blue-500 font-medium mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 md:hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-white font-semibold">
            ${mockProduct.price.toFixed(2)} USD
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-sm transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
