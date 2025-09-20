"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const navLinks = [
  { name: "Overview", href: "/accounts" },
  { name: "Orders", href: "/accounts/orders" },
  { name: "Profile", href: "/accounts/profile" },
  { name: "Address", href: "/accounts/address" },
  { name: "Logout", href: "/accounts/logout" },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-lg font-semibold mb-6">My Account</h2>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded ${
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
