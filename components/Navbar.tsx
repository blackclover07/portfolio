"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="
            group flex h-13 w-13 items-center justify-center
            overflow-hidden rounded-full
            border border-white/10
            bg-white/5
            transition-all duration-300
            hover:border-yellow-400/60
            hover:bg-yellow-400/10
            hover:shadow-[0_0_18px_rgba(250,204,21,0.2)]
          "
        >
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-12 w-12 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Navigation */}
        <div className="mx-auto flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  rounded-lg px-4 py-2
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "text-white/70 hover:bg-yellow-400 hover:text-black"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Keeps navigation centered */}
        <div className="w-13" />
      </div>
    </nav>
  );
};

export default Navbar;
