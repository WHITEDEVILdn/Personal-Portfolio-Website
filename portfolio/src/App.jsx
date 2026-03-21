function App() {
  return (
    <div style={{
      background: "#0b0f19",
      color: "white",
      minHeight: "100vh",
      width: "100%",
      fontFamily: "sans-serif"
    }}>

      <div style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        {/* HERO */}
        <div style={{
          textAlign: "center",
          padding: "120px 20px"
        }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "bold",
            letterSpacing: "1px"
          }}>
            Vaibhav Sharma
          </h1>

          <p style={{ marginTop: "10px", color: "#9ca3af" }}>
            I build fast, responsive & modern web experiences
          </p>

          <p style={{
            marginTop: "15px",
            color: "#facc15",
            fontWeight: "bold"
          }}>
            Available for Freelance Work
          </p>

          {/* BUTTONS */}
          <div style={{ marginTop: "25px" }}>
            <a href="mailto:vaibhav9997258362@gmail.com">
              <button style={{
                background: "#facc15",
                color: "black",
                padding: "12px 24px",
                borderRadius: "10px",
                marginRight: "10px",
                border: "none",
                cursor: "pointer",
                transition: "0.3s"
              }}>
                Hire Me
              </button>
            </a>

            <button style={{
              border: "1px solid #9ca3af",
              padding: "12px 24px",
              borderRadius: "10px",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              transition: "0.3s"
            }}>
              View Projects
            </button>
          </div>
        </div>

        {/* PROJECTS */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>

          {/* CARD */}
          <div style={cardStyle}>
            <h3>SaaS Landing Page</h3>
            <p style={{ color: "#9ca3af" }}>
              Modern landing page for a startup product
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Landing Page</h3>
            <p style={{ color: "#9ca3af" }}>
              Business responsive design
            </p>
          </div>

          <div style={cardStyle}>
            <h3>E-commerce UI</h3>
            <p style={{ color: "#9ca3af" }}>
              Shopping interface design
            </p>
          </div>

        </div>

        {/* WHY ME */}
        <div style={{ padding: "70px 0" }}>
          <h2 style={{ fontSize: "30px" }}>Why Choose Me</h2>

          <ul style={{ marginTop: "20px", color: "#9ca3af", lineHeight: "1.8" }}>
            <li>✔ Clean and modern UI design</li>
            <li>✔ Fully responsive websites</li>
            <li>✔ Fast loading performance</li>
            <li>✔ Client-focused development</li>
          </ul>
        </div>

        {/* SKILLS */}
        <div style={{ padding: "40px 0" }}>
          <h2 style={{ fontSize: "30px" }}>Skills</h2>
          <p style={{ marginTop: "10px", color: "#9ca3af" }}>
            React • JavaScript • HTML • CSS • Responsive Design
          </p>
        </div>

        {/* CONTACT */}
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2 style={{ fontSize: "30px" }}>Contact</h2>
          <p style={{ color: "#9ca3af", marginTop: "10px" }}>
            vaibhav9997258362@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}

/* PREMIUM CARD STYLE */
const cardStyle = {
  background: "#111827",
  padding: "25px",
  borderRadius: "16px",
  width: "260px",
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: "0 0 0 transparent"
};

/* HOVER EFFECT (JS WAY) */
cardStyle.onMouseEnter = (e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
};

cardStyle.onMouseLeave = (e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
};

export default App;