import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectT from "../assets/projectT.png";
import projectR from "../assets/projectR.png";
import projectS from "../assets/projectS.png";
import project2 from "../assets/project2.png";

const projects = [
  {
    number: "01",
    title: "Government Tender Management System",
    description:
      "A transparent platform connecting government, contractors and citizens with face recognition attendance, expense tracking, material verification and live project monitoring.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: projectT,
    codeLink: "https://github.com/saurbu/TenderTrace",
    liveLink: "https://tender-trace-gov.vercel.app/"
  },
  {
    number: "02",
    title: "Renterr Car Rental Platform",
    description:
      "Architected a dual-platform web application supporting separate login portals for customers and vehicle providers, optimizing access control and UX",
    tech: ["React", "Gemini", ],
    image: projectR,
    codeLink: "https://github.com/saurbu/renterr",
    liveLink: "https://saurbu.github.io/"
  },
  {
    number: "03",
    title: "AI ChatHub",
    description:
      "AI powered chatbot with Gemini integration, voice search, image understanding, conversation history and modern UI.",
    tech: ["React", "Gemini", ],
    image: project2,
    codeLink: "https://github.com/saurbu/ChatHub.Ai",
    liveLink: "https://saurbu.github.io/ChatHub.Ai/"
  },
  {
    number: "04",
    title: "Sticky Notes Social Platform",
    description:
      "Designed a social platform enabling users to create, share, and browse notes in a sticky-note-style dynamic UI, enhancing user engagement",
    tech: ["HTML", "CSS", "PHP", "JavaScript"],
    image: projectS,
    codeLink: "https://github.com/saurbu/sticky",  
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-[8%] py-32">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-red-500 tracking-[6px] mb-6"
      >
        SELECTED WORK
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[4rem] md:text-[6rem] font-black uppercase leading-[0.9] mb-24"
      >
        PROJECTS
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="min-h-[80vh] flex items-center border-t border-white/10 py-20"
        >
          <div className="grid lg:grid-cols-2 gap-20 w-full">

            <div>
              <span className="text-red-500 text-xl">
                {project.number}
              </span>

              <h3 className="text-[3rem] md:text-[4rem] font-black uppercase leading-none mt-4">
                {project.title}
              </h3>
            </div>

            <div>

              <div className="h-[280px] rounded-[30px] overflow-hidden border border-red-500/20 mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <p className="text-gray-400 text-lg leading-9">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 rounded-full border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-10">

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  View Code
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition"
                >
                  Live Demo
                </a>

              </div>
                
            </div>
                
          </div>
          
        </motion.div>
        
      ))}
      {/* <div className="flex justify-center mt-20">
        <Link
          to="/Allproject"
          className="px-8 py-4 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-black transition duration-300"
        >
          View All Projects →
          </Link>
        </div> */}
    </section>
  );
};

export default Projects;
