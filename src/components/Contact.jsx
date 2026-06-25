import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-[8%] relative overflow-hidden"
    >
      <div className="absolute w-[700px] h-[700px] bg-red-600 blur-[250px] opacity-10 right-[-200px] top-0"></div>

      <div className="max-w-7xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-red-500 tracking-[6px] mb-8"
        >
          CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-[4rem] md:text-[6rem] font-black uppercase leading-[0.9]">
          LET'S WORK
          <br />
          TOGETHER.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" text-xl  text-gray-400 max-w-3xl mt-10 leading-10">
          Available for internships, freelance work,
          collaborations and exciting development projects.
          Let's create something impactful together.
        </motion.p>

        <div className="mt-16">

          <a
            href="mailto:yourmail@example.com"
            className=" text-2xl md:text-4xl font-bold text-red-500 hover:text-white transition">
            ss0619963@gmail.com
          </a>

          <p className="text-gray-500 mt-4">
            New Delhi, India
          </p>

        </div>

        <div className="flex gap-8 mt-14 text-4xl">

          <a href="https://github.com/saurbu">
            <FaGithub className="hover:text-red-500 transition duration-300" />
          </a>

          <a href="https://www.linkedin.com/in/saurav-sharma-606675275/">
            <FaLinkedin className="hover:text-red-500 transition duration-300" />
          </a>

          <a href="mailto:ss0619963@gmail.com">
            <FaEnvelope className="hover:text-red-500 transition duration-300" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;