// src/components/FilterComponent.jsx
import React, { useState } from "react";

export default function FilterComponent({ onFilterChange }) {
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    sellers: [],
    availability: false,
    maxResolution: "",
    processorCount: [],
    newArrivals: "",
  });

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const sellerOptions = [
    "Desertcart SA",
    "Amazon US",
    "Amazon Global Store"
  ];

  const resolutionOptions = [
    "1024x600",
    "1280x720",
    "1280x800",
    "1366x768",
    "1440x900",
    "1536x1024",
    "1600x900",
    "1920x1080"
  ];

  const processorOptions = [32, 28, 24, 20, 16, 14, 12, 8, 6, 4];

  return (
    <div
      style={{
        width: "25%",
        backgroundColor: "#f9fafb",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h3 style={{ margin: "0 0 20px 0", color: "#111827" }}>Filters</h3>

      {/* Price Range Slider */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600" }}>
          Price Range
        </h4>
        <input
          type="range"
          min="0"
          max="5000"
          value={filters.priceRange[1]}
          onChange={(e) => handleFilterChange("priceRange", [0, parseInt(e.target.value)])}
          style={{ width: "100%" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>SAR 0</span>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>SAR {filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Seller Filter */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600" }}>
          Seller
        </h4>
        {sellerOptions.map((seller) => (
          <div key={seller} style={{ marginBottom: "8px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
              <input
                type="checkbox"
                checked={filters.sellers.includes(seller)}
                onChange={(e) => {
                  const newSellers = e.target.checked
                    ? [...filters.sellers, seller]
                    : filters.sellers.filter(s => s !== seller);
                  handleFilterChange("sellers", newSellers);
                }}
              />
              {seller}
            </label>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
          <input
            type="checkbox"
            checked={filters.availability}
            onChange={(e) => handleFilterChange("availability", e.target.checked)}
          />
          Include Out of Stock
        </label>
      </div>

      {/* New Arrivals */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600" }}>
          New Arrivals
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {["Last 30 days", "Last 90 days"].map((option) => (
            <label key={option} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
              <input
                type="radio"
                name="newArrivals"
                checked={filters.newArrivals === option}
                onChange={() => handleFilterChange("newArrivals", option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Max Resolution */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600" }}>
          Max Resolution
        </h4>
        <select
          value={filters.maxResolution}
          onChange={(e) => handleFilterChange("maxResolution", e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
          }}
        >
          <option value="">Select Resolution</option>
          {resolutionOptions.map((resolution) => (
            <option key={resolution} value={resolution}>
              {resolution}
            </option>
          ))}
        </select>
      </div>

      {/* Processor Count */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600" }}>
          Processor Count
        </h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {processorOptions.map((count) => (
            <label key={count} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px" }}>
              <input
                type="checkbox"
                checked={filters.processorCount.includes(count)}
                onChange={(e) => {
                  const newProcessors = e.target.checked
                    ? [...filters.processorCount, count]
                    : filters.processorCount.filter(p => p !== count);
                  handleFilterChange("processorCount", newProcessors);
                }}
              />
              {count}
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          const resetFilters = {
            priceRange: [0, 5000],
            sellers: [],
            availability: false,
            maxResolution: "",
            processorCount: [],
            newArrivals: "",
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
        }}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        اعاده ضبط
      </button>
    </div>
  );
}