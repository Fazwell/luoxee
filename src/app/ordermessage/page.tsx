"use client"

import Link from "next/link"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Success Icon */}
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />

        {/* Heading */}
        <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>

        {/* Message */}
        <p className="text-gray-300">
          Your order has been placed successfully. We’ll send you an email with your order details shortly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <Link
            href="/"
            className="bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/account/orders"
            className="bg-gray-800 text-white border border-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  )
}
