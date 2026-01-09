import servicesData from "../../data/servicesData";
import "./Services.css";

export default function Services() {
  return (
    <section className="advantages">
      <h2 className="advantages-title">Our Advantages</h2>

      <div className="advantages-row">
        {servicesData.map(item => (
          <div className="advantage-card" key={item.id}>
            <div className="advantage-icon">{item.icon}</div>

            <div className="advantage-text">
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
