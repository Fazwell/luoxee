"use client"

import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  id: string
  title: string
  price: string
  image: string
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/product/${id}`}>
        <div className="relative w-full h-60">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="mt-2 text-gray-700">{price}</p>
        </div>
      </Link>
    </div>
  )
}
