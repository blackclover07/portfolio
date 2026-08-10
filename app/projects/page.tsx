import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Eshop Adviser",
    description:
      "A machine learning powered system that analyzes product reviews and predicts the best online store based on customer feedback.",
    tags: [
      "Python",
      "Django",
      "React",
      "Machine Learning",
      "NLP",
      "MySQL",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Agent",
    description:
      "An intelligent tool-using AI agent built with Python and Gemini, capable of interacting with external tools and handling real-world tasks.",
    tags: [
      "Python",
      "Gemini",
      "AI Agents",
      "Tool Calling",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "RAG Application",
    description:
      "An AI application that uses retrieval-augmented generation to provide answers based on external knowledge and documents.",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "LLM",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:py-32">

        {/* Header */}
        <section>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-yellow-400">
            Projects
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            Things I've
            <span className="text-yellow-400"> built.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            A collection of projects I've worked on while exploring
            software development, artificial intelligence, and machine
            learning.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-20 space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                transition-all duration-300
                hover:border-yellow-400/40
              "
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                {/* Project Visual */}
                <div
                  className="
                    relative flex min-h-72
                    items-center justify-center
                    overflow-hidden
                    border-b border-white/10
                    bg-white/[0.02]
                    lg:border-b-0
                    lg:border-r
                  "
                >
                  {/* Decorative number */}
                  <span
                    className="
                      absolute left-6 top-5
                      text-sm font-medium
                      text-yellow-400/60
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Project Placeholder */}
                  <div
                    className="
                      flex h-44 w-64
                      items-center justify-center
                      rounded-2xl
                      border border-yellow-400/20
                      bg-yellow-400/5
                      text-center
                      text-sm text-yellow-400/70
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  >
                    Project Preview
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col justify-between p-8 md:p-10">

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {project.featured && (
                          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-yellow-400">
                            Featured Project
                          </p>
                        )}

                        <h2 className="text-3xl font-semibold">
                          {project.title}
                        </h2>
                      </div>

                      <ArrowUpRight
                        className="
                          h-6 w-6 shrink-0
                          text-white/30
                          transition-all duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-yellow-400
                        "
                      />
                    </div>

                    <p className="mt-5 max-w-xl leading-relaxed text-white/50">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/5
                          px-3 py-1.5
                          text-xs text-white/50
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-sm font-medium
                        text-white/60
                        transition-colors duration-300
                        hover:text-yellow-400
                      "
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-sm font-medium
                        text-white/60
                        transition-colors duration-300
                        hover:text-yellow-400
                      "
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <p className="text-sm text-white/30">
            More projects coming soon.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Projects;

