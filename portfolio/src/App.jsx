/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function App() {
  return (
    <div style={mainStyle}>

      {/* NAVBAR */}
      <div style={navbar}>
        <h3>Vaibhav</h3>
        <a href="#contact" style={navBtn}>Contact</a>
      </div>

      <div style={container}>

        {/* HERO */}
        <motion.div
          style={hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={heading}>
            I design & build <br /> modern web experiences
          </h1>

          <p style={subText}>
            Frontend Developer focused on clean UI & smooth interactions
          </p>

          <button
            style={btnPrimary}
            onClick={() =>
              window.open("https://wa.me/919997258362", "_blank")
            }
          >
            Let’s Work Together
          </button>
        </motion.div>

        {/* PROJECTS */}
        <div style={section}>
          <h2 style={sectionTitle}>Selected Work</h2>

          <div style={projectGrid}>

            <ProjectCard
              title="Portfolio Website"
              img="/personal.png"
              link="https://github.com/WHITEDEVILdn/Personal-Portfolio-Website"
            />

            <ProjectCard
              title="University Website"
              img="/website.png"
              link="https://github.com/WHITEDEVILdn/University-Website-UI"
            />

          </div>
        </div>

        {/* SERVICES */}
        <div style={section}>
          <h2 style={sectionTitle}>What I Do</h2>

          <div style={cardGrid}>
            <Card title="Website Development" />
            <Card title="Landing Pages" />
            <Card title="UI/UX Optimization" />
          </div>
        </div>

        {/* ABOUT */}
        <div style={section}>
          <h2 style={sectionTitle}>About Me</h2>
          <p style={aboutText}>
            I build modern, responsive and high-performance websites.
            I focus on clean design, smooth animations and user experience.
          </p>
        </div>

        {/* CONTACT */}
        <div id="contact" style={section}>
          <h2 style={sectionTitle}>Let’s Work Together</h2>

          <button
            style={btnPrimary}
            onClick={() =>
              window.open("mailto:vaibhav9997258362@gmail.com", "_blank")
            }
          >
            Contact Me
          </button>
        </div>

        {/* FOOTER */}
        <div style={footer}>
          © 2026 Vaibhav Sharma
        </div>

      </div>

      {/* 🔥 FLOATING CHAT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        style={floatingBtn}
        onClick={() =>
          window.open(
            "https://wa.me/919997258362?text=Hi%20Vaibhav%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
            "_blank"
          )
        }
      >
        💬 Chat with us
      </motion.button>

    </div>
  );
}

////////////////////////////////////////////////////

// PROJECT CARD
function ProjectCard({ title, img, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      style={projectCard}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={img} style={projectImg} alt={title} />

      <div style={overlay}>
        <h3>{title}</h3>
        <span style={viewBtn}>View Project →</span>
      </div>
    </motion.div>
  );
}

// SERVICE CARD
function Card({ title }) {
  return (
    <motion.div whileHover={{ y: -6 }} style={card}>
      {title}
    </motion.div>
  );
}

////////////////////////////////////////////////////

// STYLES

const mainStyle = {
  background: "#020617",
  color: "white",
  minHeight: "100vh"
};

const navbar = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "15px 20px",
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(2,6,23,0.7)",
  backdropFilter: "blur(10px)",
  zIndex: 1000
};

const navBtn = {
  color: "#facc15",
  textDecoration: "none"
};

const container = {
  maxWidth: 1000,
  margin: "auto",
  padding: "100px 20px"
};

const hero = {
  textAlign: "center"
};

const heading = {
  fontSize: "42px",
  fontWeight: "700"
};

const subText = {
  color: "#9ca3af",
  marginTop: 10
};

const section = {
  marginTop: "120px"
};

const sectionTitle = {
  fontSize: "26px",
  marginBottom: "20px"
};

const projectGrid = {
  display: "flex",
  flexDirection: "column",
  gap: "30px"
};

const projectCard = {
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer"
};

const projectImg = {
  width: "100%",
  display: "block"
};

const overlay = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "20px",
  background: "linear-gradient(transparent, rgba(0,0,0,0.8))"
};

const viewBtn = {
  color: "#facc15",
  fontSize: "14px"
};

const cardGrid = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap"
};

const card = {
  padding: "20px",
  background: "#111827",
  borderRadius: "12px"
};

const aboutText = {
  color: "#9ca3af",
  maxWidth: "600px"
};

const btnPrimary = {
  background: "#facc15",
  padding: "10px 20px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  marginTop: 20
};

const floatingBtn = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "#facc15",
  borderRadius: "999px",
  padding: "10px 16px",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  zIndex: 1000
};

const footer = {
  marginTop: "100px",
  textAlign: "center",
  color: "#6b7280"
};

export default App;