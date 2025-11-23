import { Shield, Star, Zap, Clock, MapPin, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Szybkie wyszukiwanie",
      desc: "Znajdź idealne mieszkanie w kilka sekund dzięki zaawansowanym filtrom.",
    },
    {
      icon: <Shield size={32} />,
      title: "Bezpieczne transakcje",
      desc: "Weryfikujemy każde ogłoszenie i właściciela dla Twojego bezpieczeństwa.",
    },
    {
      icon: <Star size={32} />,
      title: "Sprawdzone opinie",
      desc: "System ocen i recenzji pomoże Ci wybrać najlepszą ofertę.",
    },
    {
      icon: <Clock size={32} />,
      title: "Dostępne 24/7",
      desc: "Przeglądaj oferty i kontaktuj się z właścicielami o każdej porze.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Najlepsze lokalizacje",
      desc: "Tysiące mieszkań w centrum miasta i spokojnych dzielnicach.",
    },
    {
      icon: <Heart size={32} />,
      title: "Bez prowizji",
      desc: "Dodawaj ogłoszenia i przeglądaj oferty całkowicie za darmo.",
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: "#fafafa" }}>
      <div className="container">
        <h2 className="section-title">Dlaczego Lokatorowo?</h2>
        <p className="section-subtitle">
          Wszystko czego potrzebujesz do znalezienia idealnego mieszkania w
          jednym miejscu
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feat, idx) => (
            <div key={idx} className="card">
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                {feat.icon}
              </div>
              <h3
                style={{
                  marginBottom: "12px",
                  color: "#1a1a1a",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                {feat.title}
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
