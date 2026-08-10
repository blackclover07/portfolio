import React from "react";

const Skeleton = () => {
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
          <div className="h-5 w-32 rounded bg-white/10" />

          {/* Main heading */}
          <div className="space-y-3">
            <div className="h-14 w-3/4 rounded bg-white/10" />
            <div className="h-14 w-1/2 rounded bg-yellow-400/20" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full max-w-lg rounded bg-white/10" />
            <div className="h-4 w-5/6 max-w-lg rounded bg-white/10" />
            <div className="h-4 w-2/3 max-w-lg rounded bg-white/10" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="h-11 w-36 rounded-lg bg-yellow-400/20" />
            <div className="h-11 w-36 rounded-lg border border-white/10 bg-white/5" />
          </div>
        </div>

        {/* Right side / Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-100 w-100 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02]">
            {/* Temporary visual placeholder */}
            <div className="h-48 w-48 rounded-full border border-yellow-400/20 bg-yellow-400/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skeleton;
