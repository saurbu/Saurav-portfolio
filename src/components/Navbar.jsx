import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const links = ["About", "Skills", "Projects", "Contact"];

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const goHome = () => {
    setMenuOpen(false);

    if (!isHomePage) {
      navigate("/");
      return;
    }

    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    if (!isHomePage) return;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1
          onClick={goHome}
          className="text-3xl font-black text-red-500 cursor-pointer"
        >
          SAURAV.
        </h1>

        <ul className="hidden md:flex gap-10 font-medium items-center">

          <li>
            <button
              onClick={goHome}
              className={
                isHomePage && activeSection === "home"
                  ? "text-red-500"
                  : "hover:text-red-500"
              }
            >
              Home
            </button>
          </li>

          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link.toLowerCase())}
                className={
                  isHomePage && activeSection === link.toLowerCase()
                    ? "text-red-500"
                    : "hover:text-red-500"
                }
              >
                {link}
              </button>
            </li>
          ))}

          <li>
            <a
              href="/SauravResume.pdf"
              download
              className="px-5 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
            >
              Resume
            </a>
          </li>

        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-red-500/20">

          <button
            onClick={goHome}
            className="block px-8 py-4 w-full text-left text-red-500"
          >
            Home
          </button>

          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="block px-8 py-4 w-full text-left"
            >
              {link}
            </button>
          ))}

          <a
            href="/SauravResume.pdf"
            download
            className="block px-8 py-4 text-red-500 border-t border-red-500/20"
          >
            Download Resume
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;