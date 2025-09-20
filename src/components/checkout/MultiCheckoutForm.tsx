"use client";

import { useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CheckoutProps {
  cartItems: CartItem[];
}

export default function MultiStepCheckout({ cartItems }: CheckoutProps) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePayChangu = () => {
    // This is where you'll integrate PayChangu
    alert("Redirecting to PayChangu for payment...");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Steps */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow space-y-6">
          {/* Stepper Indicator */}
          <div className="flex justify-between mb-6">
            <div className={`flex-1 text-center ${step >= 1 ? "font-bold" : "text-gray-400"}`}>Information</div>
            <div className={`flex-1 text-center ${step >= 2 ? "font-bold" : "text-gray-400"}`}>Shipping</div>
            <div className={`flex-1 text-center ${step >= 3 ? "font-bold" : "text-gray-400"}`}>Payment</div>
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
              <button
                onClick={handleNext}
                className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-green-700 transition"
              >
                Continue to Shipping
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={form.postalCode}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                  required
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={form.country}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                  required
                />
              </div>
              <button
                onClick={handleNext}
                className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-green-700 transition"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment</h2>
              <p className="text-gray-600">
                Click the button below to pay via PayChangu. Ensure your shipping information is correct.
              </p>
              <button
                onClick={handlePayChangu}
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
              >
                Pay with PayChangu
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
