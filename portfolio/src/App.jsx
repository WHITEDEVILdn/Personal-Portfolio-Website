/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  return (
    <div style={mainStyle}>

      {/* BACKGROUND */}
      <Glow />
      <Shapes />

      {/* NAVBAR */}
      <div style={navbar}>
        <h3></h3>
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
            <TypingText text="Hi, I am Vaibhav " />
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ display: "inline-block", marginLeft: "8px" }}
            >
              👋
            </motion.span>
          </h1>

          <p style={subText}>
            Frontend Developer focused on clean UI & smooth interactions
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={btnPrimary}
            onClick={(e) => {
              createRipple(e);
              window.open("https://wa.me/919997258362", "_blank");
            }}
          >
            💼 Hire Me
          </motion.button>
        </motion.div>

        {/* PROJECTS */}
        <div style={section}>
          <h2 style={sectionTitle}>Projects</h2>

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
          <h2 style={sectionTitle}>Services</h2>

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
            I focus on clean UI, animations and user experience.
          </p>
        </div>

        {/* CONTACT */}
        <div id="contact" style={section}>
          <h2 style={sectionTitle}>Contact</h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={btnPrimary}
            onClick={(e) => {
              createRipple(e);
              window.open("mailto:vaibhav9997258362@gmail.com", "_blank");
            }}
          >
            📩 Contact Me
          </motion.button>
        </div>

        {/* FOOTER */}
        <div style={footer}>
          © 2026 Vaibhav Sharma
        </div>

      </div>

      {/* CHAT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={floatingBtn}
        onClick={(e) => {
          createRipple(e);
          window.open(
            "https://wa.me/919997258362?text=Hi%20Vaibhav",
            "_blank"
          );
        }}
      >
        💬 Chat with us
      </motion.button>

    </div>
  );
}

////////////////////////////////////////////////////

// RIPPLE
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");

  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);
}

////////////////////////////////////////////////////

// TYPING
function TypingText({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}

////////////////////////////////////////////////////

// GLOW
function Glow() {
  return (
    <motion.div
      style={glow}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.6, 0.4]
      }}
      transition={{
        duration: 6,
        repeat: Infinity
      }}
    />
  );
}

// SHAPES
function Shapes() {
  return (
    <div style={bgContainer}>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          style={getShape()}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity
          }}
        />
      ))}
    </div>
  );
}

////////////////////////////////////////////////////

// PROJECT CARD WITH BUTTON
function ProjectCard({ title, img, link }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} style={projectCard}>
      <div style={imgWrapper}>
        <img src={img} style={projectImg} />

        <div style={overlay}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={projectBtn}
            onClick={(e) => {
              e.stopPropagation();
              createRipple(e);
              window.open(link, "_blank");
            }}
          >
            🔗 See Project
          </motion.button>
        </div>
      </div>

      <h3 style={{ marginTop: 10 }}>{title}</h3>
    </motion.div>
  );
}

// CARD
function Card({ title }) {
  return (
    <motion.div whileHover={{ y: -5 }} style={card}>
      {title}
    </motion.div>
  );
}

////////////////////////////////////////////////////

// STYLES

const mainStyle = {
  background: "#000",
  color: "white",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden"
};

const glow = {
  position: "fixed",
  width: 300,
  height: 300,
  background: "rgba(255,255,255,0.06)",
  filter: "blur(120px)",
  borderRadius: "50%",
  top: "40%",
  left: "40%",
  zIndex: 0
};

const bgContainer = {
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: 0
};

const getShape = () => ({
  position: "absolute",
  width: 40,
  height: 40,
  border: "1px solid rgba(255,255,255,0.2)",
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`
});

const navbar = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "15px 20px",
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(0,0,0,0.6)",
  zIndex: 1000
};

const navBtn = {
  color: "#ccc",
  textDecoration: "none"
};

const container = {
  maxWidth: 1000,
  margin: "auto",
  padding: "100px 20px",
  position: "relative",
  zIndex: 1
};

const hero = {
  textAlign: "center"
};

const heading = {
  fontSize: "42px",
  fontWeight: "700"
};

const subText = {
  color: "#aaa",
  marginTop: 10
};

const section = {
  marginTop: 100
};

const sectionTitle = {
  fontSize: 26
};

const projectGrid = {
  display: "flex",
  flexDirection: "column",
  gap: 30
};

const projectCard = {
  cursor: "pointer"
};

const projectImg = {
  width: "100%",
  borderRadius: 10
};

const imgWrapper = {
  position: "relative"
};

const overlay = {
  position: "absolute",
  bottom: 10,
  width: "100%",
  display: "flex",
  justifyContent: "center"
};

const projectBtn = {
  background: "#444",
  color: "white",
  padding: "8px 14px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: "bold",
  position: "relative",
  overflow: "hidden"
};

const cardGrid = {
  display: "flex",
  gap: 20,
  flexWrap: "wrap"
};

const card = {
  padding: 20,
  background: "#111",
  borderRadius: 10
};

const aboutText = {
  color: "#aaa",
  maxWidth: 600
};

const btnPrimary = {
  background: "#444",
  color: "white",
  padding: "10px 16px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  position: "relative",
  overflow: "hidden"
};

const floatingBtn = {
  position: "fixed",
  bottom: 20,
  right: 20,
  background: "#444",
  color: "white",
  padding: "10px 16px",
  borderRadius: 999,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  display: "flex",
  gap: "6px",
  zIndex: 1000,
  overflow: "hidden"
};

const footer = {
  marginTop: 100,
  textAlign: "center",
  color: "#777"
};

export default App;