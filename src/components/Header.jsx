import React from "react";
import { ShoppingCart } from "lucide-react"; // Basket icon

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========== MAIN HEADER ROW ========== */}
        <div className="flex items-center justify-between h-16">

          {/* ---------- Logo / Title ---------- */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            متجر نجم التقنية
          </h2>

          {/* ---------- Right Side (Search + Cart Icon) ---------- */}
          <div className="flex items-center gap-4">

            {/* ---------- Search Bar (Hidden on mobile) ---------- */}
            <div className="hidden sm:block w-full max-w-xs">
              <input
                type="text"
                placeholder="البحث عن منتجات"
                className="w-full bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ---------- Basket Icon ---------- */}
            {/* Replace "3" with your cart item count state later */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-7 h-7 text-gray-700" />

              {/* Item count badge */}
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

          </div>
        </div>

        {/* ========== Mobile Search Bar ========== */}
        <div className="sm:hidden mt-2">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>
    </header>
  );
}

export default Header;
