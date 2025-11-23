import { Search, MapPin, Home, DollarSign } from "lucide-react";

const SearchBar = () => {
  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#fff",
        marginTop: "-80px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "32px",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                <MapPin size={16} />
                Lokalizacja
              </label>
              <input
                type="text"
                placeholder="Warszawa, Kraków..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "15px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                <Home size={16} />
                Typ mieszkania
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "15px",
                }}
              >
                <option>Wszystkie</option>
                <option>Kawalerka</option>
                <option>2 pokoje</option>
                <option>3+ pokoje</option>
              </select>
            </div>
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                <DollarSign size={16} />
                Cena max
              </label>
              <input
                type="text"
                placeholder="3000 zł"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "15px",
                }}
              />
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <Search size={20} />
            Szukaj mieszkania
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
