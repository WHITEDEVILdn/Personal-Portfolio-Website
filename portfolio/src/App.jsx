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
            I help businesses build fast, modern & conversion-focused websites
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
                cursor: "pointer"
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
              cursor: "pointer"
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

          <div style={cardStyle}>
            <h3>University Website UI</h3>
            <p style={{ color: "#9ca3af" }}>
              Full responsive website for an educational institution
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Personal Portfolio Website</h3>
            <p style={{ color: "#9ca3af" }}>
              Modern portfolio website to showcase projects and skills
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Business Web App UI</h3>
            <p style={{ color: "#9ca3af" }}>
              Dashboard-style web application with clean UI
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Restaurant Website</h3>
            <p style={{ color: "#9ca3af" }}>
              Food business website with menu and contact section
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

        {/* WHAT I CAN DO */}
        <div style={{ padding: "40px 0" }}>
          <h2 style={{ fontSize: "30px" }}>What I Can Do For You</h2>

          <ul style={{ marginTop: "20px", color: "#9ca3af", lineHeight: "1.8" }}>
            <li>✔ Website design from scratch</li>
            <li>✔ Convert Figma to website</li>
            <li>✔ Fix website bugs</li>
            <li>✔ Improve website speed</li>
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

/* CARD STYLE */
const cardStyle = {
  background: "#111827",
  padding: "25px",
  borderRadius: "16px",
  width: "260px",
  cursor: "pointer",
  transition: "0.3s"
};

export default App;