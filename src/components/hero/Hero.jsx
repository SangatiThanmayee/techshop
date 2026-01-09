import Slider from "react-slick";
import productData from "../../data/productsData";
import "./Hero.css";

export default function Hero() {
  const heroProducts = productData.filter(
    p => p.tag === "hero-product"
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {heroProducts.map(item => (
          <div key={item.id}>
            <div className="hero">
              {/* LEFT CONTENT */}
              <div className="hero-content">
                <span className="hero-brand">{item.title}</span>

                <h1 className="hero-title">
                  {item.tagline}
                </h1>

                <div className="hero-price">
                  <span className="final">₹{item.finalPrice}</span>
                  <span className="original">₹{item.originalPrice}</span>
                </div>

                <button className="hero-btn">Shop Now</button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-image">
                <img src={item.heroImage} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
