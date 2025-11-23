import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Najemca",
      text: "Znalazłam wymarzone mieszkanie w centrum w zaledwie tydzień! Proces był prosty i bezpieczny. Polecam każdemu!",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      rating: 5,
    },
    {
      name: "Tomasz Nowak",
      role: "Właściciel",
      text: "Dzięki Lokatorowo wynająłem mieszkanie w rekordowym czasie. Platforma jest intuicyjna i skuteczna.",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      rating: 5,
    },
    {
      name: "Karolina Wiśniewska",
      role: "Najemca",
      text: "Świetna obsługa i mnóstwo ofert do wyboru. Znalazłam mieszkanie dokładnie takie, jakiego szukałam!",
      image:
        "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2 className="section-title">Co mówią nasi użytkownicy</h2>
        <p className="section-subtitle">
          Dołącz do tysięcy zadowolonych użytkowników, którzy znaleźli swoje
          wymarzone mieszkanie
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="img-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundImage: `url('${t.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      color: "#1a1a1a",
                    }}
                  >
                    {t.name}
                  </strong>
                  <div style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                    {t.role}
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "4px", marginBottom: "16px" }}
              >
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#10b981" color="#10b981" />
                ))}
              </div>
              <Quote
                size={32}
                color="#10b981"
                style={{ opacity: 0.2, marginBottom: "12px" }}
              />
              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "1.7",
                  fontSize: "0.95rem",
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
