import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 px-6 py-12 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo / Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-4">LUOXEE</h3>
          <p className="text-gray-600">
            Your trusted B2C store for quality products at the best prices.
          </p>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/offers">Special Offers</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h4 className="font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/customer-service">Help Center</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Email: support@luoxee.com</li>
            <li>Phone: +265 999 000 111</li>
            <li>
              <div className="flex space-x-4 mt-2">
                <Link href="https://facebook.com" target="_blank">FB</Link>
                <Link href="https://twitter.com" target="_blank">X</Link>
                <Link href="https://instagram.com" target="_blank">IG</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Luoxee. All rights reserved.
      </div>
    </footer>
  );
}
