import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#e5e7eb",
        padding: "60px 0 30px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              className="logo"
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={logo}
                alt="Lokatorowo"
                style={{
                  height: "40px",
                  width: "auto",
                }}
              />
            </div>
            <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
              Najlepsza platforma do wynajmu mieszkań w Polsce. Znajdź swoje
              wymarzone miejsce już dziś.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#374151",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                <Facebook size={20} color="#10b981" />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#374151",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Twitter size={20} color="#10b981" />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#374151",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Instagram size={20} color="#10b981" />
              </a>
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#374151",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Linkedin size={20} color="#10b981" />
              </a>
            </div>
          </div>
          <div>
            <h4
              style={{
                color: "white",
                marginBottom: "16px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Dla najemców
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Szukaj mieszkania
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Jak to działa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Porady dla najemców
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                color: "white",
                marginBottom: "16px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Dla właścicieli
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Dodaj ogłoszenie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Cennik
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Porady dla właścicieli
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Weryfikacja
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                color: "white",
                marginBottom: "16px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              O nas
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  O firmie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Kariera
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #374151",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
            © 2025 Lokatorowo. Wszelkie prawa zastrzeżone.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a
              href="#"
              style={{
                color: "#9ca3af",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Regulamin
            </a>
            <a
              href="#"
              style={{
                color: "#9ca3af",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Polityka prywatności
            </a>
            <a
              href="#"
              style={{
                color: "#9ca3af",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
