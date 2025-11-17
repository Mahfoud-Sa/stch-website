// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import PageDivider from "./components/PageDivider.jsx";
import FilterComponent from "./components/FilterComponent.jsx";
import ProductGrid from "./components/ProductGrid.jsx";

import { getAllProductsFromContentful } from "./api/productsApi.js";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products once on app load
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getAllProductsFromContentful();
        setAllProducts(data);          // Save original list
        setFilteredProducts(data);     // Show all products initially
      } catch (err) {
        console.error("Error loading products:", err);
      }
    }

    loadProducts();
  }, []);

  // Filter logic
  const handleFilterChange = (filters) => {
    let filtered = allProducts;

    const maxPrice = filters.priceRange[1];
    filtered = filtered.filter(product => {
      const price = Math.floor(product.price * 100); // Fakestore uses numbers
      return price <= maxPrice;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header />
      <PageDivider>
        <div style={{ width: "75%" }}>
          <ProductGrid
            title="اجهزة الكمبيوترات المتوفره لدينا"
            description="تفقد مجموعتنا الرائعة"
            products={filteredProducts}
          />
        </div>

        <FilterComponent onFilterChange={handleFilterChange} />
      </PageDivider>
    </div>
  );
}

export default App;
