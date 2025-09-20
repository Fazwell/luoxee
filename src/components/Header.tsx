"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import SideMenu from "@/components/SideMenu"
import CartSidebar from "@/components/cart/CartSidebar"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  // Mock cart items (later connect to backend)
  const cartItems = [
    {
      id: "1",
      name: "Acme Drawstring Bag",
      variant: "White / 7 x 9 inch",
      price: "$7.00 USD",
      quantity: 1,
      image: "/images/bag.jpg",
    },
  ]

  return (
    <header className="w-full border-b border-gray-200">
      <div className="flex justify-between items-center px-4 md:px-8 h-16">
        {/* Left - Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Menu button (mobile only) */}
          <button
            className="md:hidden p-2 hover:text-gray-600"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
          {/* Desktop links */}
          <Link href="/" className="hidden md:block hover:text-gray-600">
            Home
          </Link>
          <Link href="/store" className="hidden md:block hover:text-gray-600">
            Store
          </Link>
        </div>

        {/* Center - Logo */}
        <Link href="/" className="text-lg font-semibold">
          MY STORE
        </Link>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Search button */}
          <button className="p-2 hover:text-gray-600">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          {/* Account (desktop only) */}
          <Link
            href="/account/overview"
            className="hidden md:block hover:text-gray-600"
          >
            Account
          </Link>

          {/* Cart button */}
          <button
            className="relative p-2 hover:text-gray-600"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Side Menu Drawer */}
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Cart Sidebar */}
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        subtotal="$7.00 USD"
        taxes="$0.00 USD"
        shipping="Calculated at checkout"
        total="$7.00 USD"
      />
    </header>
  )
}
