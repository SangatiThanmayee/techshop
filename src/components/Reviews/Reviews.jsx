import reviewsData from "../../data/reviewsData";
import "./Reviews.css";

export default function Reviews() {
  return (
    <section className="reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-grid">
        {reviewsData.map(r => (
          <div key={r.id}>
            <h4>{r.name}</h4>
            <p>{r.review}</p>
            <span>{"⭐".repeat(r.rateCount)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
