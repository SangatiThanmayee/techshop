import { useParams } from "react-router-dom";
import productData from "../data/productsData";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-details">
      <img src={product.images[0]} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.info}</p>
        <h3>₹{product.finalPrice}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </section>
  );
}
