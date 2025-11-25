import React, { useState } from "react";

export default function FilterComponent({ onFilterChange, isOpen, onClose }) {
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    company: "",
    processor: "",
    features: [],
  });

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // ================================
  // Options
  // ================================
  const companyOptions = [
    "Dell",
    "HP",
    "Lenovo",
    "Toshiba",
    "Asus",
    "Acer",
    "MSI",
    "Samsung",
  ];

  const processorOptions = ["Core i3", "Core i5", "Core i7", "Core i9"];

  const featureOptions = ["شاشة لمس", "قلم", "كيبورد مضيء", "بصمة"];

  return (
    <>
      {/* ========== Backdrop Overlay (Mobile Only) ========== */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          style={{ transition: "opacity 0.3s ease-in-out" }}
        />
      )}

      {/* ========== Filter Panel ========== */}
      <div
        dir="rtl"
        className={`
          w-80 max-w-[85vw] lg:w-1/4
          lg:static lg:translate-x-0
          fixed top-0 right-0 h-full
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          z-50 lg:z-auto
          overflow-y-auto
        `}
        style={{
          backgroundColor: "#f9fafb",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* ========== Header with Close Button (Mobile Only) ========== */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h3 style={{ margin: 0, color: "#111827" }}>الفلاتر</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 p-2"
            aria-label="Close filters"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ========== Title (Desktop Only) ========== */}
        <h3 className="hidden lg:block" style={{ margin: "0 0 20px 0", color: "#111827" }}>
          الفلاتر
        </h3>

      {/* ======================================
          Price Range
      ====================================== */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "600" }}>
          نطاق السعر
        </h4>

        <input
          type="range"
          min="0"
          max="5000"
          value={filters.priceRange[1]}
          onChange={(e) =>
            handleFilterChange("priceRange", [0, parseInt(e.target.value)])
          }
          style={{ width: "100%" }}
        />

        <div
          style={{
            marginTop: "8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "12px", color: "#6b7280" }}>0 ريال</span>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>
            {filters.priceRange[1]} ريال
          </span>
        </div>
      </div>

      {/* ======================================
          Company (Dropdown)
      ====================================== */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "600" }}>
          الشركة المصنعة
        </h4>

        <select
          value={filters.company}
          onChange={(e) => handleFilterChange("company", e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
          }}
        >
          <option value="">اختر شركة</option>
          {companyOptions.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* ======================================
          Processor (Radio Buttons)
      ====================================== */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "600" }}>
          المعالج
        </h4>

        {processorOptions.map((cpu) => (
          <label
            key={cpu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            <input
              type="radio"
              name="processor"
              checked={filters.processor === cpu}
              onChange={() => handleFilterChange("processor", cpu)}
            />
            {cpu}
          </label>
        ))}
      </div>

      {/* ======================================
          Features (Checkboxes)
      ====================================== */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "600" }}>
          الميزات
        </h4>

        {featureOptions.map((feature) => (
          <label
            key={feature}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            <input
              type="checkbox"
              checked={filters.features.includes(feature)}
              onChange={(e) => {
                const updated = e.target.checked
                  ? [...filters.features, feature]
                  : filters.features.filter((f) => f !== feature);

                handleFilterChange("features", updated);
              }}
            />
            {feature}
          </label>
        ))}
      </div>

      {/* ======================================
          Reset Button
      ====================================== */}
      <button
        onClick={() => {
          const reset = {
            priceRange: [0, 5000],
            company: "",
            processor: "",
            features: [],
          };
          setFilters(reset);
          onFilterChange(reset);
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
        إعادة ضبط الفلاتر
      </button>
    </div>
    </>
  );
}
