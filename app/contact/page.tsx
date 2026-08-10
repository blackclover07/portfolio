import { Mail, MapPin, ArrowUpRight } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      href: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
    },
  ];
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:py-32">
        {/* Header */}
        <section>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-yellow-400">
            Contact
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            Let's
            <span className="text-yellow-400"> connect.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            Have a project in mind, want to collaborate, or just want to say
            hello? Feel free to reach out.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-20 grid gap-6 md:grid-cols-2">
          {/* Contact Links */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              You can reach me through any of the platforms below.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex items-center justify-between
                      rounded-2xl border border-white/10
                      bg-black/20 p-4
                      transition-all duration-300
                      hover:border-yellow-400/50
                      hover:bg-yellow-400/5
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-11 w-11 items-center justify-center
                          rounded-xl border border-white/10
                          text-white/50
                          transition-all duration-300
                          group-hover:border-yellow-400
                          group-hover:bg-yellow-400
                          group-hover:text-black
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm text-white/40">{contact.label}</p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {contact.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="
                        h-5 w-5 text-white/30
                        transition-all duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-yellow-400
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Location / Availability */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl border border-yellow-400/20
                  bg-yellow-400/5 text-yellow-400
                "
              >
                <MapPin className="h-6 w-6" />
              </div>

              <h2 className="mt-8 text-2xl font-semibold">Based in India.</h2>

              <p className="mt-4 max-w-md leading-relaxed text-white/50">
                I'm interested in building useful software, exploring new
                technologies, and working on interesting projects.
              </p>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-sm text-white/40">Currently open to</p>

              <p className="mt-2 text-lg font-medium">
                Projects, collaborations & opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Message */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <p className="text-sm text-white/30">
            Have something interesting in mind?
          </p>

          <a
            href="mailto:your@email.com"
            className="
              mt-2 inline-flex items-center gap-2
              text-xl font-medium
              text-white
              transition-colors duration-300
              hover:text-yellow-400
            "
          >
            Drop me a message
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </section>
      </div>
    </main>
  );
};

export default Contact;
