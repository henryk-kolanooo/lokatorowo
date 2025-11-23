import { Search, Home } from "lucide-react";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        padding: "120px 0 80px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "24px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: "1.2",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Znajdź swoje wymarzone
            <span style={{ color: "#10b981" }}> mieszkanie</span>
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "40px",
              color: "#f3f4f6",
              lineHeight: "1.8",
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            Tysiące ofert wynajmu w najlepszych lokalizacjach. Szybko, prosto i
            bezpiecznie.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-primary">
              <Search size={20} />
              Szukaj mieszkania
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#1a1a1a",
              }}
            >
              <Home size={20} />
              Dodaj ogłoszenie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
