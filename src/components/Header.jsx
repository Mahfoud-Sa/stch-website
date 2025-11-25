import React from "react";

function Header({ isFilterOpen, setIsFilterOpen }) {
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

          {/* ---------- Left Side (Search + Filter Toggle) ---------- */}
          <div className="flex items-center gap-4">

            {/* ---------- Search Bar (Hidden on mobile) ---------- */}
            <div className="hidden sm:block w-full max-w-xs">
              <input
                type="text"
                placeholder="البحث عن منتجات"
                className="w-full bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ---------- Filter Toggle Button (Mobile Only) ---------- */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 flex items-center gap-2"
              aria-label="Toggle filters"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              الفلاتر
            </button>

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
