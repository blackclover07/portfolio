import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white uppercase"
            >
              sagar dey<span className="text-yellow-400">.</span>
            </Link>

            <p className="mt-2 max-w-sm text-sm text-white/50">
              Building things, learning constantly, and turning ideas into
              reality.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6">
            <Link
              href="/"
              className="text-sm text-white/60 transition-colors hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm text-white/60 transition-colors hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-sm text-white/60 transition-colors hover:text-yellow-400"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-sm text-white/60 transition-colors hover:text-yellow-400"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-sm text-white/40">
            © 2026 Sagar Dey. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">

            <Link
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaGithub className="h-5 w-5" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>

            <Link
              href="mailto:your@email.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <Mail className="h-5 w-5" />
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
