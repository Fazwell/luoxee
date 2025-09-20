"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/cards/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/**
 * NOTE:
 * If you haven't installed react-multi-carousel:
 * npm install react-multi-carousel
 */

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function HomePage() {
  // mock data with external sample images
  const products = useMemo(
    () => [
      {
        id: "1",
        title: "Acme Circles T-Shirt",
        price: "$20.00",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        title: "Acme Drawstring Bag",
        price: "$12.00",
        image:
          "https://images.unsplash.com/photo-1598300059294-fc4b88e3b3e3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        title: "Acme Cup",
        price: "$15.00",
        image:
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "4",
        title: "Acme Onesie",
        price: "$15.00",
        image:
          "https://images.unsplash.com/photo-1606813909793-c02b50a2d6b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "5",
        title: "Acme Hat",
        price: "$15.00",
        image:
          "https://images.unsplash.com/photo-1593032465175-4d3a0f1727b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "6",
        title: "Acme Jacket",
        price: "$45.00",
        image:
          "https://images.unsplash.com/photo-1602810312641-3e79a4b4e820?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "7",
        title: "Acme Socks",
        price: "$5.00",
        image:
          "https://images.unsplash.com/photo-1602810312619-7e9edbcd9d65?auto=format&fit=crop&w=800&q=80",
      },
    ],
    []
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Section: Large left + two stacked right */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left: Large hero (spans 2 cols on large screens) */}
        <div className="lg:col-span-2">
          <Link href={`/product/${products[0].id}`} className="block">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={products[0].image}
                alt={products[0].title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
              <div className="absolute left-6 bottom-6 text-white">
                <h2 className="text-2xl font-bold drop-shadow">{products[0].title}</h2>
                <p className="text-lg drop-shadow">{products[0].price}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Right: two smaller stacked images */}
        <div className="lg:col-span-1 grid grid-rows-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-sm h-44">
            <ProductCard
              id={products[1].id}
              title={products[1].title}
              price={products[1].price}
              image={products[1].image}
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm h-44">
            <ProductCard
              id={products[2].id}
              title={products[2].title}
              price={products[2].price}
              image={products[2].image}
            />
          </div>
        </div>
      </section>

      {/* Carousel Section (flat: no arrows, no dots) */}
      <section>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows={false}
          showDots={false}
          draggable
          ssr
        >
          {products.slice(3).map((p) => (
            <div key={p.id} className="p-3">
              <ProductCard id={p.id} title={p.title} price={p.price} image={p.image} />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
