// components/SearchModal.tsx
"use client"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useRouter } from "next/navigation"

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      onClose()
    }
  }

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

        {/* Modal Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
              <Dialog.Title className="text-lg font-medium mb-4">
                Search Products
              </Dialog.Title>
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  Go
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
