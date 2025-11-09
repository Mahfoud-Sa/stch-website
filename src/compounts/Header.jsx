import React from "react";

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Star Technology Website
          </h2>

          {/* Search Bar */}
          <div className="hidden sm:block w-full max-w-xs ml-4">
            <input
              type="text"
              placeholder="Search Product..."
              className="w-full bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Mobile search bar (only visible on small screens) */}
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
