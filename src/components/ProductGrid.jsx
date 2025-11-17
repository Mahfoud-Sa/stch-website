import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ title = "Products", description = "", products = [] }) {
    return (
        <section aria-label={title} style={{ padding: 20 }}>
            
            {/* ======= Centered Header ======= */}
            <header style={{ 
                marginBottom: 16, 
                textAlign: "center" 
            }}>
                <h2 style={{ 
                    margin: 0, 
                    fontSize: "24px",
                    fontWeight: "700"
                }}>
                    {title}
                </h2>

                {description && (
                    <p style={{ 
                        margin: "6px 0 0", 
                        color: "#6b7280",
                        fontSize: "14px"
                    }}>
                        {description}
                    </p>
                )}
            </header>

            {/* ======= Product Grid ======= */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: 16,
                }}
            >
                {products.length === 0 ? (
                    <div style={{ 
                        gridColumn: "1/-1", 
                        color: "#6b7280",
                        textAlign: "center"
                    }}>
                        لا توجد منتجات متاحة حالياً.
                    </div>
                ) : (
                    products.map((p) => (
                        <ProductCard key={p.id ?? p.name} product={p} />
                    ))
                )}
            </div>
        </section>
    );
}
