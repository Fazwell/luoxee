"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Overview", href: "/account/overview" },
  { name: "Orders", href: "/account/orders" },
  { name: "Profile", href: "/account/profile" },
  { name: "Addresses", href: "/account/addresses" },
  { name: "Logout", href: "/account/logout" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 p-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">My Account</h2>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md ${
              pathname === link.href ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </aside>

      {/* Mobile navigation (buttons at top) */}
      <div className="md:hidden border-b border-gray-200 p-4 flex gap-2 overflow-x-auto">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${
              pathname === link.href
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
