import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import sketch from "../assets/saurav-sketch.png";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section min-h-screen relative overflow-hidden">

      <div className="hero-bg"></div>

      <div className="hero-container">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-left"
        >
          <span className="hero-tag">FULL STACK DEVELOPER</span>

          <h1 className="hero-title">SAURAV</h1>
          <h1 className="hero-outline">SHARMA</h1>

          <p className="hero-desc">
            Building modern web applications, AI powered platforms and immersive experiences.
          </p>

          <div className="hero-buttons">

            {/* FIXED ROUTE */}
            <button
              className="primary-btn"
              onClick={() => navigate("/allproject")}
            >
              View Work
            </button>

            {/* <button
              className="secondary-btn"
              onClick={scrollToContact}
            >
              Contact Me
            </button> */}

          </div>

          <div className="hero-socials">
            <a href="https://github.com/saurbu" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <FaArrowRight />
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-right"
        >
          <div className="image-glow"></div>

          <img src={sketch} alt="Saurav" className="hero-image " />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;