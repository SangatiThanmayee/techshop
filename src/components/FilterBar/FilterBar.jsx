import { useState } from "react";
import { sortMenu, brandsMenu, categoryMenu } from "../../data/filterBarData";
import "./FilterBar.css";

export default function FilterBar({ filters, setFilters }) {

  const toggleBrand = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const toggleCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  return (
    <aside className="filter-bar">

      {/* SORT BY */}
      <div className="filter-block">
        <h4>Sort By</h4>
        <div className="divider" />
        {sortMenu.map((item) => (
          <p
            key={item.id}
            className={`sort-item ${
              filters.sort === item.title ? "active" : ""
            }`}
            onClick={() =>
              setFilters((prev) => ({ ...prev, sort: item.title }))
            }
          >
            {item.title}
          </p>
        ))}
      </div>
          <br />
      {/* FILTER BY */}
      <div className="filter-block">
        <h4>Filter By</h4>
        <div className="divider" />
            <br />
        {/* BRANDS */}
        <div className="filter-group">
          <h5>Brands</h5>
          <br />
          {brandsMenu.map((item) => (
            <label key={item.id} className="checkbox">
              <input
                type="checkbox"
                checked={filters.brands.includes(item.label)}
                onChange={() => toggleBrand(item.label)}
              />
              <span className="custom-check"></span>
              {item.label}
            </label>
          ))}
          
        </div>
        

        {/* CATEGORY */}
        <div className="filter-group">
          <h5>Category</h5>
          <br />
          {categoryMenu.map((item) => (
            <label key={item.id} className="checkbox">
              <input
                type="checkbox"
                checked={filters.categories.includes(item.label)}
                onChange={() => toggleCategory(item.label)}
              />
              <span className="custom-check"></span>
              {item.label}
            </label>
          ))}
        </div>

        {/* PRICE */}
        <div className="filter-group">
          <h5>Price</h5>
          <input
            type="range"
            min="499"
            max="19990"
            value={filters.price}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }))
            }
            className="price-range"
          />
          <p className="price">Up to ₹{filters.price}</p>
        </div>
      </div>

    </aside>
  );
}
