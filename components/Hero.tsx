import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      {/* Hero container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left side */}
        <div className="space-y-6">
          {/* Small label */}
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">
            Software developer • ai ml enthusiast
          </p>

          {/* Main heading */}
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Hi, I'm Sagar
            </h1>

            <h2 className="text-4xl font-semibold text-yellow-400 md:text-5xl">
              I build software & intelligent systems
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-lg space-y-2 text-white/60">
            <p>
              I am an MCA student passionate about software development,
              artificial intelligence, and machine learning. I enjoy turning
              ideas into practical applications and exploring how AI can make
              software more capable.
            </p>

            <p>A short introduction about you and what you build.</p>

            <p>More supporting content can be placed here.</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              href="/projects"
              className="flex h-11 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 font-medium text-black transition-all duration-300 hover:bg-orange-400"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 font-medium text-white transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right side / Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-100 w-100 items-center justify-center rounded-3xl border border-white/10 bg-white/2">
            {/* Temporary visual placeholder */}
            <div className="flex h-60 w-60 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/5 text-center text-sm text-yellow-400">
              {/* Logo / Visual
              <br />
              Goes Here */}
              <img src="/images/sagar.jpeg" alt="" className="h-full w-full rounded-full hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
