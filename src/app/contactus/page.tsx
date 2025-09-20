"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUp, ShoppingCart } from "lucide-react";

function CartSummary() {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span>Acme Bag</span>
        <span>$20</span>
      </div>
      <div className="flex justify-between">
        <span>Acme Hoodie</span>
        <span>$35</span>
      </div>
      <div className="flex justify-between font-semibold border-t pt-2">
        <span>Total</span>
        <span>$55</span>
      </div>
    </div>
  );
}

function CheckoutForm() {
  const [step, setStep] = useState<"information" | "shipping" | "payment">(
    "information"
  );

  return (
    <div className="bg-white shadow rounded-lg p-6 w-full">
      {/* Breadcrumb */}
      <div className="flex justify-between mb-6 text-sm font-medium text-gray-500">
        <span className={step === "information" ? "text-black" : ""}>
          Information
        </span>
        <span className={step === "shipping" ? "text-black" : ""}>
          Shipping
        </span>
        <span className={step === "payment" ? "text-black" : ""}>Payment</span>
      </div>

      {/* Step 1: Information */}
      {step === "information" && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-md px-3 py-2"
          />
          <button
            onClick={() => setStep("shipping")}
            className="w-full bg-black text-white rounded-md py-2 mt-4"
          >
            Continue to Shipping
          </button>
        </div>
      )}

      {/* Step 2: Shipping */}
      {step === "shipping" && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Address"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full border rounded-md px-3 py-2"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setStep("information")}
              className="w-1/2 bg-gray-200 text-black rounded-md py-2"
            >
              Back
            </button>
            <button
              onClick={() => setStep("payment")}
              className="w-1/2 bg-black text-white rounded-md py-2"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === "payment" && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            placeholder="Expiry Date"
            className="w-full border rounded-md px-3 py-2"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setStep("shipping")}
              className="w-1/2 bg-gray-200 text-black rounded-md py-2"
            >
              Back
            </button>
            <button
              onClick={() => alert("Trigger PayChangu here 🚀")}
              className="w-1/2 bg-green-600 text-white rounded-md py-2"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Section: Checkout Form */}
      <div className="flex-1 flex justify-center items-start md:items-center p-4">
        <div className="w-full max-w-lg">
          {/* Mobile Cart Dropdown */}
          <div className="md:hidden mb-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                    <div className="flex items-center space-x-2">
                      <ShoppingCart size={18} />
                      <span>Cart Summary</span>
                    </div>
                    <ChevronUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2">
                    <CartSummary />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <CheckoutForm />
        </div>
      </div>

      {/* Right Section: Desktop Cart */}
      <div className="hidden md:block md:w-1/3 border-l p-6 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
        <CartSummary />
      </div>
    </div>
  );
}
