import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    skills: "React • JavaScript • HTML • CSS • Tailwind",
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Development",
    skills: "Node.js • Express.js • REST APIs",
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    skills: "MongoDB • MySQL",
  },
  {
    icon: <FaJava />,
    title: "Programming",
    skills: "C/C++ • PHP • JavaScript • Python",
  },
  {
    icon: <FaGitAlt />,
    title: "Tools & AI",
    skills: "Git • GitHub • VS Code • Gemini API",
  },
  {
    icon: <FaGitAlt />,
    title: "Concepts",
    skills: "DSA • OOP",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-[8%] py-32"
    >
      <div className="max-w-7xl mx-auto w-full">

        <p className="text-red-500 tracking-[8px] mb-6">
          EXPERTISE
        </p>

        <h2
          className="
            text-[4rem]
            md:text-[6rem]
            font-black
            uppercase
            leading-[0.9]
            text-left
            "
        >
          MY SKILLS
        </h2>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-24">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-[30px]
            p-8
            transition-all
            duration-300
            "
          >
            <div className="text-5xl text-red-500 mb-6">
              {skill.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {skill.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {skill.skills}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;