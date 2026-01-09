import { footMenu, footSocial } from "../../data/footerData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-top">

        {/* LEFT – BRAND & SUBSCRIBE */}
        <div className="footer-brand">
          <h2>Tech-Shop</h2>
          <p>
            Subscribe to our Email alerts to receive <br />
            early discount offers, and new products info.
          </p>

          <input
            type="email"
            placeholder="Email Address*"
          />
          <br />
          <button>Subscribe</button>
        </div>

        {/* RIGHT – MENUS */}
        <div className="footer-links">
          {footMenu.map(section => (
            <div key={section.id}>
              <h4>{section.title}</h4>
              {section.menu.map(item => (
                <p key={item.id}>{item.link}</p>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>2024 | All Rights Reserved. Built by | ADARSHA HELVAR</p>

        <div className="footer-social">
          {footSocial.map(item => (
            <span key={item.id}>{item.icon}</span>
          ))}
        </div>
      </div>

    </footer>
  );
}
