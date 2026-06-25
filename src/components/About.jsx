import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-left justify-left px-[8%] py-32 relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-red-600 blur-[180px] opacity-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-red-500 tracking-[8px] mb-8 text-left"
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[4rem] md:text-[6rem]  font-black uppercase leading-[0.9] text-left">
          I BUILD DIGITAL
          <br />
          EXPERIENCES.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" text-gray-400 max-w-3xl mt-10 text-xl leading-10 text-left">
          I'm Saurav Sharma, a Computer Science student and
          Full Stack Developer passionate about building
          modern web applications, AI-powered products and
          scalable digital solutions using React, Node.js,
          Express and MongoDB.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-red-500 text-5xl font-black">
              B.Tech
            </h3>
            <p className="mt-4 text-gray-400">
              Computer Science
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-red-500 text-5xl font-black">
              MERN
            </h3>
            <p className="mt-4 text-gray-400">
              Full Stack Development
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-red-500 text-5xl font-black">
              AI
            </h3>
            <p className="mt-4 text-gray-400">
              Gemini Integration
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-red-500 text-5xl font-black">
              10+
            </h3>
            <p className="mt-4 text-gray-400">
              Major Projects
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;