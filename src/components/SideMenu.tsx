"use client"

import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

export default function SideMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        {/* Panel */}
        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative w-64 max-w-xs bg-white h-full shadow-xl p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <ul className="flex flex-col gap-6 mt-8">
                {Object.entries(SideMenuItems).map(([name, href]) => (
                  <li key={name}>
                    <Link href={href} onClick={onClose} className="text-lg hover:text-gray-600">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
