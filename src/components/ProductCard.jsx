import { useState } from "react";

function ProductCard({ product }) {
    if (!product) return null;

    const [expanded, setExpanded] = useState(false);

    const MAX_LENGTH = 120;

    const hasDescription = product.description && product.description.trim().length > 0;
    const isLong = hasDescription && product.description.length > MAX_LENGTH;

    const displayText = expanded
        ? product.description
        : hasDescription
            ? product.description.slice(0, MAX_LENGTH) + (isLong ? "..." : "")
            : "";

    // ------------------------------
    // ✅ WhatsApp Message
    // ------------------------------
    const phone = "736193873"; // WhatsApp number
    const fullMessage = `
مرحبا، أريد الاستفسار عن المنتج التالي:

الاسم: ${product.name}
الوصف: ${product.description || "لا يوجد وصف"}
السعر: ${product.price != null ? product.price + " ريال سعودي" : "غير متوفر"}

شكراً لكم.
    `;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    return (
        <article
            dir="rtl"
            style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 12,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                textAlign: "right",
            }}
            aria-labelledby={`prod-${product.id}-title`}
        >
            {/* Laptop Image */}
            {product.image && (
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 6 }}
                />
            )}

            {/* Laptop Name */}
            <h3
                id={`prod-${product.id}-title`}
                style={{ margin: 0, fontSize: 16, fontWeight: "600" }}
            >
                {product.name}
            </h3>

            {/* Starts at Price */}
            {product.price != null && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <strong style={{ color: "#111827", fontSize: 14 }}>
                        يبدأ من {product.price} ريال سعودي
                    </strong>
                </div>
            )}

            {/* Description */}
            {hasDescription && (
                <div style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
                    <p style={{ margin: 0 }}>
                        {displayText}
                    </p>

                    {isLong && (
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#2563eb",
                                cursor: "pointer",
                                padding: 0,
                                fontSize: 13,
                                marginTop: 4,
                                textAlign: "right",
                            }}
                        >
                            {expanded ? "عرض أقل" : "عرض المزيد"}
                        </button>
                    )}
                </div>
            )}

            {/* ------------------------------ */}
            {/* ✅ WhatsApp Button */}
            {/* ------------------------------ */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: 10,
                    background: "#25D366",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: 6,
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "600",
                    textDecoration: "none",
                    cursor: "pointer",
                }}
            >
                تواصل عبر واتساب
            </a>
        </article>
    );
}

export default ProductCard;
