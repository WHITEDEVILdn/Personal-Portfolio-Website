/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMouse({ x, y });
        setPos({ x: e.clientX, y: e.clientY });
      }}
      style={mainStyle}
    >

      {/* GRID */}
      <div style={gridBg}></div>

      {/* CURSOR GLOW */}
      <motion.div
        animate={{ x: pos.x - 120, y: pos.y - 120 }}
        transition={{ type: "spring", stiffness: 50 }}
        style={cursorGlow}
      />

      <div style={container}>

        {/* HERO */}
        <motion.div style={hero} animate={{ x: mouse.x * 0.5, y: mouse.y * 0.5 }}>

          <div style={{ flex: 1, minWidth: "280px" }}>
            <h1 style={heading}>Hi, I'm Vaibhav 👋</h1>

            <p style={subText}>
              Building modern, high-performance web experiences
            </p>

            <ReactTyped
              strings={["Frontend Developer", "React Developer", "Freelancer"]}
              typeSpeed={50}
              backSpeed={30}
              loop
              style={typed}
            />

            <div style={btnContainer}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                style={btnPrimary}
                onClick={() =>
                  window.open("mailto:vaibhav9997258362@gmail.com", "_blank")
                }
              >
                Hire Me
              </motion.button>

              {/* ✅ FIXED PROJECT SECTION */}
              <div style={{ width: "100%" }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  style={btnOutline}
                  onClick={() => setShowProjects(!showProjects)}
                >
                  View Projects
                </motion.button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    showProjects
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={projectWrapper}>
                    <ProjectCard title="University Website" mouse={mouse} />
                    <ProjectCard title="Portfolio Website" mouse={mouse} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <motion.img
            src="/like.jpeg"
            style={image}
            animate={{ x: mouse.x, y: mouse.y }}
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* SERVICES */}
        <motion.div
          style={section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
        >
          <h2>Services</h2>
          <div style={grid}>
            <GlassCard title="Website Development" />
            <GlassCard title="Landing Pages" />
            <GlassCard title="UI Improvements" />
          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          style={section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
        >
          <h2>Experience</h2>
          <Timeline title="Frontend Developer" />
          <Timeline title="React Projects" />
        </motion.div>

        {/* CONTACT */}
        <motion.div
          style={section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
        >
          <h2>Contact</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            style={btnPrimary}
            onClick={() =>
              window.open("mailto:vaibhav9997258362@gmail.com", "_blank")
            }
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* FOOTER */}
        <div style={footer}>
          © 2026 Vaibhav Sharma • All rights reserved
        </div>

      </div>
    </div>
  );
}

////////////////////////////////////////////////////

function ProjectCard({ title, mouse }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(250,204,21,0.2)"
      }}
      animate={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
      style={glassCard}
    >
      <h3>{title}</h3>
      <motion.button whileHover={{ scale: 1.1 }} style={projectBtn}>
        View
      </motion.button>
    </motion.div>
  );
}

function GlassCard({ title }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(250,204,21,0.15)"
      }}
      style={glassCard}
    >
      {title}
    </motion.div>
  );
}

function Timeline({ title }) {
  return (
    <motion.div whileHover={{ x: 10 }} style={timeline}>
      {title}
    </motion.div>
  );
}

////////////////////////////////////////////////////

const mainStyle = {
  background: `
    radial-gradient(circle at top, #0b0f19, #020617),
    radial-gradient(circle at bottom, rgba(250,204,21,0.08), transparent)
  `,
  color: "white",
  minHeight: "100vh"
};

const container = {
  maxWidth: 1200,
  margin: "auto",
  padding: "40px 15px"
};

const hero = {
  display: "flex",
  gap: 40,
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center"
};

const section = { marginTop: 80 };

const heading = {
  fontSize: 42,
  fontWeight: "700"
};

const subText = {
  color: "#9ca3af",
  marginTop: "10px"
};

const typed = { color: "#facc15" };

const image = {
  width: "100%",
  maxWidth: "320px",
  borderRadius: 20,
  boxShadow: "0 0 60px rgba(250,204,21,0.5)"
};

const btnContainer = {
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const btnPrimary = {
  background: "linear-gradient(135deg, #facc15, #fbbf24)",
  padding: "10px 20px",
  borderRadius: "999px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};

const btnOutline = {
  border: "1px solid #9ca3af",
  padding: "10px 20px",
  borderRadius: "999px",
  background: "transparent",
  color: "white"
};

const projectWrapper = {
  display: "flex",
  gap: 15,
  flexWrap: "wrap",
  marginTop: 15,
  justifyContent: "center"
};

const grid = {
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
  justifyContent: "center"
};

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  padding: 20,
  borderRadius: 15,
  border: "1px solid rgba(255,255,255,0.1)",
  width: "100%",
  maxWidth: "280px",
  textAlign: "center"
};

const projectBtn = {
  background: "linear-gradient(135deg, #facc15, #fbbf24)",
  color: "black",
  padding: "8px 16px",
  borderRadius: "999px",
  border: "none",
  marginTop: 10,
  fontWeight: "bold"
};

const timeline = {
  borderLeft: "2px solid #facc15",
  padding: 10,
  marginTop: 10
};

const footer = {
  textAlign: "center",
  marginTop: 80,
  color: "#6b7280"
};

const cursorGlow = {
  position: "fixed",
  width: 240,
  height: 240,
  borderRadius: "50%",
  background: "rgba(250,204,21,0.15)",
  filter: "blur(100px)",
  pointerEvents: "none"
};

const gridBg = {
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "40px 40px"
};

export default App;