// src/App.js
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import PageDivider from "./components/PageDivider.jsx";
import FilterComponent from "./components/FilterComponent.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
function App() {
 
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Create sample products data
  const allProducts = [
    {
      id: 1,
      name: "Dell Latitude 7490 Laptop | 14\" 1920x1080 FHD | Core i5-8250U - 1TB SSD - 32GB RAM | 4 cores @ 3.4 GHz",
      price: "SAR 950.00",
      originalPrice: "SAR 1,758.00",
      image: "https://image.made-in-china.com/2f0j00TgpcEhlmJUqZ/Second-Hand-HP-Mini-PC-Netbook-UMPC-Laptops-Laptop-Computer-Products-OEM.jpg",
      description: "Dell Latitude 7490 business laptop with high performance specs including 32GB RAM and 1TB SSD storage.",
      rating: "4.0",
      reviews: 5,
      delivery: "FREE delivery 27 - 30 Nov",
      shipsFrom: "Ships from outside KSA"
    },
    {
      id: 2,
      name: "HP Stream 14\" Laptop for Students & Business, Intel Processor N150, 16GB RAM, 1.12TB Storage",
      price: "SAR 1,507.85",
      image: "https://th.bing.com/th/id/R.e446511c64742e02f6216710e75d5391?rik=LqsFLY8fy4TwiQ&pid=ImgRaw&r=0",
      description: "Perfect laptop for students and business users with ample storage and memory.",
      rating: "4.4",
      reviews: 123
    },
    {
      id: 3,
      name: "MSI Cyborg 15 Gaming Laptop, Intel Core i7-15620H, 15.6\" FHD 144Hz, 1TB NVMe SSD",
      price: "SAR 3,599.00",
      originalPrice: "SAR 4,528.60",
      image: "https://th.bing.com/th/id/R.375a0d5e0cfdf89d0a20c0a0412c943f?rik=mjq%2bBoGQZjtL%2bQ&pid=ImgRaw&r=0",
      description: "High-performance gaming laptop with latest Intel processor and high refresh rate display.",
      rating: "3.8",
      reviews: 52,
      popular: "50+ bought in past month",
      delivery: "FREE delivery Wed, 12 Nov"
    },
    {
      id: 4,
      name: "Lenovo IdeaPad 1, 15.6\" HD Display, Celeron N4020, 4GB RAM, 256GB SSD",
      price: "SAR 798.00",
      originalPrice: "SAR 899.00",
      image: "https://th.bing.com/th/id/R.8fca937c6341917b6f726902ff97dc1a?rik=l90%2fp7RYFaSASQ&riu=http%3a%2f%2fnivo.co.za%2fgallery%2f00%2f07%2f74%2f00077496_00460496.jpg&ehk=j1Yj7GqnPmlOUsEiNPiD3uNaIFBX6ggdsVppxYcQR3c%3d&risl=&pid=ImgRaw&r=0",
      description: "Budget-friendly laptop ideal for basic computing tasks and everyday use.",
      rating: "3.6",
      reviews: 36,
      delivery: "FREE delivery Wed, 12 Nov",
      stock: "Only 2 left in stock"
    }
  ];

  const handleFilterChange = (filters) => {
    // Simple filtering logic - you can enhance this based on your needs
    let filtered = allProducts;
    
    // Filter by price (simple example)
    const maxPrice = filters.priceRange[1];
    filtered = filtered.filter(product => {
      const price = parseInt(product.price.replace(/[^\d]/g, ''));
      return price <= maxPrice;
    });

    setFilteredProducts(filtered);
  };

  // Initialize with all products
  React.useEffect(() => {
    setFilteredProducts(allProducts);
  }, []);

  return (
    <div>
      <Header/>
      { <PageDivider>
        <div style={{ width: "75%" }}>
          <ProductGrid 
            title="اجهزة الكمبيوترات المتوفره لدينا"
            description="تفقد مجموعتنا الرائعة"
            products={filteredProducts}
          />
        </div>
        <FilterComponent onFilterChange={handleFilterChange} />
      </PageDivider> }
    </div>
  );
}

export default App;