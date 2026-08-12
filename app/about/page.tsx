import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { BrainCircuit } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ];

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <section className="mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-yellow-400">
            About Me
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            A little about
            <span className="text-yellow-400"> me.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            A short introduction about who I am, what I do, and what I'm
            passionate about.
          </p>
        </section>
        {/* Introduction */}
        <section className="grid gap-12 lg:grid-cols-2">
          {/* Photo / Visual */}
          <div className="flex min-h-112.5 items-center justify-center rounded-3xl border border-white/10 bg-white/2">
            {/* <div className="flex h-72 w-72 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/5 text-center text-sm text-yellow-400">
              Your Photo
              <br />
              Goes Here
              <img src="/images/sagar.jpeg" alt="" className="h-full w-full border-2 rounded-2xl" />
            </div> */}
            <img src="/images/sagar.jpeg" alt="" className="h-90 w-85 rounded-2xl "/>
          </div>

          {/* About Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-semibold">Who I Am</h2>

            <p className="leading-relaxed text-white/60">
              This is where your personal introduction will go. A few paragraphs
              about your background, interests, and journey into technology.
            </p>

            <p className="leading-relaxed text-white/60">
              This section can explain what you enjoy building, the areas you're
              interested in, and what you're currently working toward.
            </p>

            <p className="leading-relaxed text-white/60">
              More personal details can go here to make the portfolio feel more
              authentic.
            </p>
          </div>
        </section>
        {/* What I Do */}
        <section className="mt-28">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-yellow-400">
            What I Do
          </p>

          <h2 className="text-4xl font-bold">Things I enjoy building.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition-all duration-300 hover:border-yellow-400/40">
              <div className="mb-5 text-3xl text-yellow-400">01</div>

              <h3 className="text-xl font-semibold">Full Stack Development</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Building modern applications from the frontend to the backend.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition-all duration-300 hover:border-yellow-400/40">
              <div className="mb-5 text-3xl text-yellow-400">02</div>

              <h3 className="text-xl font-semibold">AI & Machine Learning</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Exploring intelligent systems, LLMs, agents, and machine
                learning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition-all duration-300 hover:border-yellow-400/40">
              <div className="mb-5 text-3xl text-yellow-400">03</div>

              <h3 className="text-xl font-semibold">Problem Solving</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Learning continuously and turning ideas into practical
                solutions.
              </p>
            </div>
          </div>
        </section>
        {/* Skills */}
        {/* Skills */}{" "}
        <section className="mt-28">
          {" "}
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-yellow-400">
            {" "}
            Skills{" "}
          </p>{" "}
          <h2 className="text-4xl font-bold">
            {" "}
            Technologies I work with.{" "}
          </h2>{" "}
          <div className="mt-8 flex flex-wrap gap-5">
            {" "}
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className=" group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300"
                  title={skill.name}
                >
                  {" "}
                  <Icon
                    className=" h-7 w-7 transition-all duration-300 group-hover:scale-110 "
                    style={{ color: skill.color }}
                  />{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </section>
      </div>
    </main>
  );
};

export default About;
