"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [step, setStep] = useState<"information" | "shipping" | "payment">("information");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-black rounded-xl shadow-lg">
          {/* Left: Form Section */}
          <div className="px-6 md:px-12 py-10 border-r border-gray-800">
            {/* Breadcrumb Steps */}
            <nav className="text-sm mb-8 flex gap-2">
              <span className={step === "information" ? "text-white font-medium" : "text-gray-400"}>
                Information
              </span>
              <span className="text-gray-600">›</span>
              <span className={step === "shipping" ? "text-white font-medium" : "text-gray-400"}>
                Shipping
              </span>
              <span className="text-gray-600">›</span>
              <span className={step === "payment" ? "text-white font-medium" : "text-gray-400"}>
                Payment
              </span>
            </nav>

            {/* Contact */}
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input type="checkbox" className="accent-blue-600" />
                Email me with news and offers
              </label>
            </div>

            {/* Shipping */}
            <h2 className="text-lg font-semibold mt-10 mb-4">Shipping address</h2>
            <div className="grid grid-cols-2 gap-4">
              <select className="col-span-2 px-4 py-3 bg-black border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>United States</option>
                <option>Canada</option>
                <option>Malawi</option>
              </select>
              <input
                type="text"
                placeholder="First name (optional)"
                className="px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Last name"
                className="px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Address"
                className="col-span-2 px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="col-span-2 px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="City"
                className="px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
              />
              <select className="px-4 py-3 bg-black border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Alabama</option>
                <option>New York</option>
                <option>California</option>
              </select>
              <input
                type="text"
                placeholder="ZIP code"
                className="px-4 py-3 bg-black border border-gray-700 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-300 mt-4">
              <input type="checkbox" className="accent-blue-600" />
              Save this information for next time
            </label>

            {/* Next Button */}
            <div className="mt-8">
              <button
                onClick={() => setStep("shipping")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
              >
                Continue to shipping
              </button>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-black px-6 md:px-12 py-10">
            <div className="border-b border-gray-800 pb-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-800 relative">
                <img src="/images/bag.jpg" alt="Product" className="object-cover w-full h-full" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
                  1
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Acme Drawstring Bag</p>
                <p className="text-xs text-gray-400">Black / 10 × 15 inch</p>
              </div>
              <p className="text-sm font-semibold">$10.00</p>
            </div>

            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-gray-500">Calculated at next step</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center font-semibold">
              <span>Total</span>
              <span className="text-lg">$10.00 USD</span>
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-gray-500 py-6 border-t border-gray-800 mt-10">
          All rights reserved Dev Vercel Shop
        </footer>
      </div>
    </div>
  );
}
