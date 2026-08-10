import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          YourName<span className="text-yellow-400">.</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-white transition-colors hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-white/70 transition-colors hover:text-yellow-400"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm text-white/70 transition-colors hover:text-yellow-400"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm text-white/70 transition-colors hover:text-yellow-400"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;