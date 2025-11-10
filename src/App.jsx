import React from "react";
import Header from "./compounts/Header";
import ProductGrid from "./compounts/productGrid";
import ProductCard from "./compounts/productCard";

function App() {
  // Create sample products data
  const products = [
    {
      id: 1,
      name: "Dell Laptop",
      price: 99.99,
      image: "https://image.made-in-china.com/2f0j00TgpcEhlmJUqZ/Second-Hand-HP-Mini-PC-Netbook-UMPC-Laptops-Laptop-Computer-Products-OEM.jpg", // or URL
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero, laborum quae necessitatibus exercitationem repellendus, ex blanditiis incidunt voluptates ea debitis minima maxime repellat inventore voluptatum, aperiam nulla voluptatem quam?"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://th.bing.com/th/id/R.e446511c64742e02f6216710e75d5391?rik=LqsFLY8fy4TwiQ&pid=ImgRaw&r=0",
      description: "Feature-rich smartwatch"
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image: "https://th.bing.com/th/id/R.375a0d5e0cfdf89d0a20c0a0412c943f?rik=mjq%2bBoGQZjtL%2bQ&pid=ImgRaw&r=0",
      description: "Durable laptop backpack"
    },
    {
      id: 4,
      name: "Phone Case",
      price: 19.99,
      image: "https://th.bing.com/th/id/R.8fca937c6341917b6f726902ff97dc1a?rik=l90%2fp7RYFaSASQ&riu=http%3a%2f%2fnivo.co.za%2fgallery%2f00%2f07%2f74%2f00077496_00460496.jpg&ehk=j1Yj7GqnPmlOUsEiNPiD3uNaIFBX6ggdsVppxYcQR3c%3d&risl=&pid=ImgRaw&r=0", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero, laborum quae necessitatibus exercitationem repellendus, ex blanditiis incidunt voluptates ea debitis minima maxime repellat inventore voluptatum, aperiam nulla voluptatem quam?"
    }
  ];

  return (
    <div>
      <Header/>
      <ProductGrid 
        title="اجهزة الكمبيوترات المتوفره لدينا"
        description="تفقد مجموعتنا الرائعة"
        products={products} // Pass the products array here
      />
    </div>
  );
}

export default App;