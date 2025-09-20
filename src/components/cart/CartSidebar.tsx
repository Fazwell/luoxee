"use client"

import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

type CartItem = {
  id: string
  name: string
  variant: string
  price: string
  quantity: number
  image: string
}

interface CartSidebarProps {
  open: boolean
  onClose: () => void
  items: CartItem[]
  subtotal: string
  taxes: string
  shipping: string
  total: string
}

export default function CartSidebar({
  open,
  onClose,
  items,
  subtotal,
  taxes,
  shipping,
  total,
}: CartSidebarProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Panel */}
        <div className="fixed inset-0 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-full max-w-md bg-black text-white shadow-xl flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-800 px-6 py-4">
                <Dialog.Title className="text-lg font-semibold">
                  My Cart
                </Dialog.Title>
                <button onClick={onClose}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                    <ShoppingCartIcon className="h-12 w-12 mb-3" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex gap-4 border-b border-gray-800 pb-4"
                      >
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span>{item.price}</span>
                          </div>
                          <span className="text-sm text-gray-400">
                            {item.variant}
                          </span>

                          {/* Qty controls */}
                          <div className="flex items-center mt-2">
                            <button className="px-2 py-1 border rounded-l">
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button className="px-2 py-1 border rounded-r">
                              +
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer (only if cart has items) */}
              {items.length > 0 && (
                <div className="border-t border-gray-800 px-6 py-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Taxes</span>
                    <span>{taxes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shipping}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{total}</span>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full mt-4 bg-blue-600 text-center text-white py-3 rounded-lg hover:bg-blue-700"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
