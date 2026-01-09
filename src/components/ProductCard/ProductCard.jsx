import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      {/* IMAGE */}
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>

      {/* RATING */}
      <div className="product-rating">
        {"★".repeat(product.rateCount)}
      </div>

      {/* TITLE */}
      <h4 className="product-title">{product.title}</h4>

      {/* INFO */}
      <p className="product-info">{product.info}</p>

      {/* DIVIDER */}
      <div className="product-divider"></div>

      {/* PRICE */}
      <div className="product-price">
        <span className="final-price">₹{product.finalPrice}</span>
        <span className="original-price">₹{product.originalPrice}</span>
      </div>

      {/* BUTTON */}
      <button
        className="add-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>

    </div>
  );
}
