import Slider from "react-slick";
import productData from "../../data/productsData";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const featured = productData.filter(p => p.tag === "featured-product");

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,          // visible cards
    slidesToScroll: 1,        // move one by one
    infinite: true,           // loop all cards
    autoplay: true,           // AUTO SLIDE
    autoplaySpeed: 2500,      // timing
    speed: 600,               // animation speed
    arrows: false,
    dots: true,
    pauseOnHover: false,
    focusOnSelect: true,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="featured-slider">
      <h2 className="featured-title">Featured Products</h2>

      <Slider {...settings}>
        {featured.map(item => (
          <div key={item.id}>
            <div className="featured-slide">
              <img src={item.images[0]} alt={item.title} />
              <h4>{item.title}</h4>
              <p>
                ₹{item.finalPrice}
                <span> ₹{item.originalPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
