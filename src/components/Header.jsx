import React from "react";

function Header() {
  return (
    <header
      dir="rtl"
      className="bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========== MAIN HEADER ROW ========== */}
        <div className="flex items-center justify-between h-16">

          {/* ---------- Logo / Title (Right) ---------- */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            متجر نجم التقنية
          </h2>

          {/* ---------- Left Side (Search Only) ---------- */}
          <div className="flex items-center gap-4">

            {/* ---------- Search Bar (Hidden on mobile) ---------- */}
            <div className="hidden sm:block w-full max-w-xs">
              <input
                type="text"
                placeholder="البحث عن منتجات"
                className="w-full bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>
        </div>

        {/* ========== Mobile Search Bar ========== */}
        <div className="sm:hidden mt-2">
          <input
            type="text"
            placeholder="البحث عن منتجات..."
            className="w-full bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>
    </header>
  );
}

export default Header;
