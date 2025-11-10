import React from "react";
import ProductCard from "/src/compounts/productCard.jsx";

export default function ProductGrid({ title = "Products", description = "", products = [] }) {
    return (
        <section aria-label={title} style={{ padding: 20 }}>
            <header style={{ marginBottom: 16 }}>
                <h2 style={{ margin: 0 }}>{title}</h2>
                {description && <p style={{ margin: "6px 0 0", color: "#6b7280" }}>{description}</p>}
            </header>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: 16,
                }}
            >
                {products.length === 0 ? (
                    <div style={{ gridColumn: "1/-1", color: "#6b7280" }}>No products to display.</div>
                ) : (
                    products.map((p) => <ProductCard key={p.id ?? p.name} product={p} />)
                )}
            </div>
        </section>
    );
}