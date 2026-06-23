const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-[8%] bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-5xl font-black tracking-tight">
              SAURAV
              <span className="text-red-500">.</span>
            </h2>

            <p className="text-gray-500 mt-3">
              Full Stack Developer • MERN Stack • AI Applications
            </p>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-lg">
              Building modern digital experiences.
            </p>

            <p className="text-gray-600 mt-2">
              New Delhi, India
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-600">
            © 2026 Saurav Sharma. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-500">
            <a
              href="#about"
              className="hover:text-red-500 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-red-500 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-red-500 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-red-500 transition"
            >
              Contact
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;