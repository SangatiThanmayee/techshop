import { useCart } from "../context/CartContext";
import '../styles/Cart.css'

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.title} />

            <div className="cart-details">
              <h4>{item.title}</h4>
              <p className="price">₹{item.finalPrice}</p>

              <div className="qty">
                <button onClick={() => updateQty(item.id, "dec")}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty(item.id, "inc")}>+</button>
              </div>

              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <h3>Total: ₹{total}</h3>
        <button className="checkout">Checkout</button>
      </div>
    </section>
  );
}
