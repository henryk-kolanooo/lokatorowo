import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactAgent = () => {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Skontaktuj się z nami</h2>
            <p className="section-subtitle">
              Masz pytania? Chętnie pomożemy Ci znaleźć idealne mieszkanie
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            <div>
              <div
                className="card"
                style={{ height: "100%", backgroundColor: "white" }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "24px",
                    color: "#1a1a1a",
                  }}
                >
                  Napisz do nas
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Twoje imię"
                    style={{
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      fontSize: "15px",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Twój email"
                    style={{
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      fontSize: "15px",
                    }}
                  />
                  <textarea
                    placeholder="Twoja wiadomość"
                    rows="5"
                    style={{
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      resize: "vertical",
                      fontSize: "15px",
                      fontFamily: "inherit",
                    }}
                  ></textarea>
                  <button
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Send size={20} />
                    Wyślij wiadomość
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card"
                style={{ height: "100%", backgroundColor: "white" }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "24px",
                    color: "#1a1a1a",
                  }}
                >
                  Informacje kontaktowe
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={24} color="#10b981" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: "600",
                          marginBottom: "4px",
                          color: "#1a1a1a",
                        }}
                      >
                        Email
                      </div>
                      <div style={{ color: "#6b7280" }}>
                        kontakt@lokatorowo.pl
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={24} color="#10b981" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: "600",
                          marginBottom: "4px",
                          color: "#1a1a1a",
                        }}
                      >
                        Telefon
                      </div>
                      <div style={{ color: "#6b7280" }}>+48 123 456 789</div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={24} color="#10b981" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: "600",
                          marginBottom: "4px",
                          color: "#1a1a1a",
                        }}
                      >
                        Adres
                      </div>
                      <div style={{ color: "#6b7280" }}>
                        ul. Przykładowa 123
                        <br />
                        00-001 Warszawa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAgent;
