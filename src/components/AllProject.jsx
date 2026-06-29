import React from "react";

import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import projectT from "../assets/projectT.png";
import projectG from "../assets/projectG.png";
import projectC from "../assets/projectC.png";
import projectR from "../assets/projectR.png";
import projectL from "../assets/projectL.png";
import projectS from "../assets/projectS.png";

const projects = [
  {
    title: "Government Tender System",
    description:
      "Transparent system with attendance, expense tracking and live monitoring.",
    tech: ["React", "Node.js", "MongoDB","Express.js"],
    image: projectT,
    code: "https://github.com/saurbu/TenderTrace",
    demo: "https://tender-trace-5uxb-eqdwju11b-ss0619963-5893s-projects.vercel.app/"
  },
  {
      title: "Renterr Car Rental Platform",
      description:
        "Architected a dual-platform web application supporting separate login portals for customers and vehicle providers, optimizing access control and UX",
      tech: ["React", "Gemini", ],
      image: projectR,
      code: "https://github.com/saurbu/renterr",
      demo: "https://saurbu.github.io/"
    },
  {
    title: "AI ChatHub",
    description:
      "AI chatbot with Gemini integration, voice input and image understanding.",
    tech: ["React", "Gemini"],
    image: project2,
    code:"https://github.com/saurbu/ChatHub.Ai",
    demo: "https://saurbu.github.io/ChatHub.Ai/"
  },
  {
    title: "GraphOne",
    description:
      "Responsive website with modern UI and animations.",
    tech: ["Nextjs", "Tailwindcss"],
    image: projectG,
    code: "https://github.com/saurbu/graphone",
    demo: "https://graphone-ilim-eem7pod67-ss0619963-5893s-projects.vercel.app/"
  },
  {
    title: "CollegeFind",
    description:
      "College Discovery Platform with Responsive website with modern UI and animations.",
    tech: ["React", "Gemini", "API"],
    image: projectC,
    code:"https://github.com/saurbu/College-Discovery-Platform",
    demo: "https://college-discovery-platform-five-phi.vercel.app/"
  },
  {
      title: "Sticky Notes Social Platform",
      description:
        "Designed a social platform enabling users to create, share, and browse notes in a sticky-note-style dynamic UI, enhancing user engagement",
      tech: ["HTML", "CSS", "PHP", "JavaScript"],
      image: projectS,
      code: "https://github.com/saurbu/sticky",  
    },
  {
    title: "StyleLane",
    description:
      "Responsive Ecom website with all pages product, cart, details, booking confermation and also have price calculations, modern UI and animations.",
    tech: [ "Javascript", "HTML", "Css"],
    image: projectL,
    code: "https://github.com/saurbu/STYLELANE-website",
    demo: "https://saurbu.github.io/STYLELANE-website/index.html"
  },
  {
    title: "College Website Clone",
    description:
      "Responsive website with modern UI and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: project3,
    code: "https://github.com/saurbu/KCC-Institute-clone",
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
                  href={p.code}
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