// src/components/PageDivider.jsx
import React from "react";

export default function PageDivider({ children }) {
  return (
    <div
      className="flex flex-wrap lg:flex-nowrap"
      style={{
        gap: "20px",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}