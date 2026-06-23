import React from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "Government Tender System",
    description:
      "Transparent system with attendance, expense tracking and live monitoring.",
    tech: ["React", "Node.js", "MongoDB","Express.js"],
    image: project1,
    link: "#",
    demo: "#",
  },
  {
    title: "AI ChatHub",
    description:
      "AI chatbot with Gemini integration, voice input and image understanding.",
    tech: ["React", "Gemini"],
    image: project2,
    link:"https://github.com/saurbu/ChatHub.Ai",
    demo: "https://saurbu.github.io/ChatHub.Ai/"
  },
  
  {
    title: "College Website Clone",
    description:
      "Responsive website with modern UI and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: project3,
    link: "https://github.com/saurbu/KCC-Institute-clone",
    demo: "https://saurbu.github.io/KCC-Institute-clone"
  },
  {
    title: "AI ChatHub",
    description:
      "AI chatbot with Gemini integration, voice input and image understanding.",
    tech: ["React", "Gemini"],
    image: project2,
    link:"https://github.com/saurbu/ChatHub.Ai",
    demo: "https://saurbu.github.io/ChatHub.Ai/"
  },
  
  {
    title: "College Website Clone",
    description:
      "Responsive website with modern UI and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: project3,
    link: "https://github.com/saurbu/KCC-Institute-clone",
    demo: "https://saurbu.github.io/KCC-Institute-clone"
  },
  {
    title: "College Discovery Platform",
    description:
      "Responsive website with modern UI and animations.",
    tech: ["React", "Tailwindcss"],
    image: project3,
    link: "https://github.com/saurbu/College-Discovery-Platform",
    demo: "https://saurbu.github.io/KCC-Institute-clone"
  },
];

const AllProject = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white px-[8%] py-24">

      <h1 className="text-5xl md:text-6xl mt-[35px] font-black uppercase mb-10">
        All Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-red-500 transition"
          >

            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-xl font-bold mb-2">{p.title}</h2>

              <p className="text-gray-400 text-sm mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 border border-white/10 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition text-sm"
                >
                  Code
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-black transition text-sm"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default AllProject;