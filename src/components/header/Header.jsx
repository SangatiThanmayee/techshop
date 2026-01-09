import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

export default function Header() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // TEMP AUTH CHECK (we’ll improve this later)
  const isAuthenticated = localStorage.getItem("user");

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Tech-Shop</Link>

      <div className="icons">
        {/* SEARCH */}
        <Link to="/search">
          <FaSearch />
        </Link>

        {/* CART */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          {cart.length > 0 && <span>{cart.length}</span>}
        </Link>

        {/* USER */}
        <FaUser onClick={handleUserClick} style={{ cursor: "pointer" }} />
      </div>
    </header>
  );
}
