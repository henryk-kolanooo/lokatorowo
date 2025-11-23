import { Link } from "react-router-dom";
import { Search, PlusCircle, User } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderBottom: "1px solid rgba(243, 244, 246, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "16px 24px",
          gap: "24px",
        }}
      >
        <Link
          to="/"
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
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
        </Link>
        <nav style={{ justifySelf: "center" }}>
          <ul
            style={{
              display: "flex",
              gap: "32px",
              listStyle: "none",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#6b7280",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "color 0.2s",
                }}
              >
                <Search size={18} />
                Szukaj
              </Link>
            </li>
            <li>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#6b7280",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <PlusCircle size={18} />
                Dodaj mieszkanie
              </Link>
            </li>
          </ul>
        </nav>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            justifySelf: "end",
          }}
        >
          <button className="btn btn-outline">
            <User size={18} />
            Zaloguj się
          </button>
          <button className="btn btn-primary">Zarejestruj się</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
