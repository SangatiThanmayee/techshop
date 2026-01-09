import { useState } from "react";
import productData from "../../data/productsData";
import ProductCard from "../ProductCard/ProductCard";
import "./TopProducts.css";

const tabs = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

export default function TopProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? productData
      : productData.filter(p => p.category === activeTab);

  return (
    <section className="top-products">
      <h2 className="top-title">Top Products</h2>

      {/* TABS */}
      <div className="top-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="top-grid">
        {filteredProducts.slice(0, 11).map(item => (
          <ProductCard key={item.id} product={item} />
        ))}

        {/* BROWSE CARD */}
        <div className="browse-card">
          <p>Browse All<br />Products →</p>
        </div>
      </div>
    </section>
  );
}
