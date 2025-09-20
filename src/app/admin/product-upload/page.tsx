"use client";
import React, { useState } from "react";

interface Variant {
  color: string;
  size: string;
  price: string;
  warehouse: string;
  quantity: string;
  images: string[];
}

interface Product {
  name: string;
  description: string;
  variants: Variant[];
}

export default function AddProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    variants: [],
  });

  const [variant, setVariant] = useState<Variant>({
    color: "",
    size: "",
    price: "",
    warehouse: "",
    quantity: "",
    images: [],
  });

  const handleVariantChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVariant({ ...variant, [e.target.name]: e.target.value });
  };

  const addVariant = () => {
    setProduct({
      ...product,
      variants: [...product.variants, variant],
    });

    setVariant({
      color: "",
      size: "",
      price: "",
      warehouse: "",
      quantity: "",
      images: [],
    });
  };

  const handleSaveProduct = () => {
    console.log("Product created:", product);
    setIsModalOpen(false);

    // Reset product after saving
    setProduct({
      name: "",
      description: "",
      variants: [],
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Main Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
      >
        Create a Product
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4">Create New Product</h2>

            {/* Product Name */}
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
              className="w-full p-2 border rounded mb-3"
            />

            {/* Product Description */}
            <textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="w-full p-2 border rounded mb-3"
            />

            <h3 className="text-xl font-medium mt-4 mb-2">Add Variant</h3>

            {/* Variant Inputs */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="color"
                placeholder="Color"
                value={variant.color}
                onChange={handleVariantChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="size"
                placeholder="Size"
                value={variant.size}
                onChange={handleVariantChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={variant.price}
                onChange={handleVariantChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="warehouse"
                placeholder="Warehouse"
                value={variant.warehouse}
                onChange={handleVariantChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={variant.quantity}
                onChange={handleVariantChange}
                className="p-2 border rounded"
              />
            </div>

            <button
              onClick={addVariant}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Variant
            </button>

            {/* List of Variants */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Variants:</h4>
              {product.variants.length === 0 ? (
                <p className="text-gray-500">No variants added yet.</p>
              ) : (
                <ul className="space-y-2">
                  {product.variants.map((v, idx) => (
                    <li
                      key={idx}
                      className="p-2 border rounded flex justify-between items-center"
                    >
                      <span>
                        {v.color} | {v.size} | ${v.price} | {v.warehouse} | Qty:{" "}
                        {v.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Save Product */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveProduct}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
