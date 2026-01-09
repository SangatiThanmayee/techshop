import { useState } from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import ProductCard from "../components/ProductCard/ProductCard";
import productData from "../data/productsData";
import Services from "../components/Services/Services";
import "../styles/AllProducts.css";

export default function AllProducts() {
  const [filters, setFilters] = useState({
    brands: [],
    categories: [],
    price: 19990,
    sort: "",
  });

  let filteredProducts = productData.filter((product) => {
    const brandMatch =
      filters.brands.length === 0 ||
      filters.brands.includes(product.brand);

    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    const priceMatch = product.finalPrice <= filters.price;

    return brandMatch && categoryMatch && priceMatch;
  });

  // SORT
  if (filters.sort === "Price(Lowest First)") {
    filteredProducts.sort((a, b) => a.finalPrice - b.finalPrice);
  }

  if (filters.sort === "Price(Highest First)") {
    filteredProducts.sort((a, b) => b.finalPrice - a.finalPrice);
  }

  return (
    <>
      <section className="all-products">

        {/* ✅ THIS IS REQUIRED */}
        <aside className="all-products-filter">
          <FilterBar filters={filters} setFilters={setFilters} />
        </aside>

        <div className="all-products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

      <Services />
    </>
  );
}
