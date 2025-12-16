export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-slate-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 py-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/30 px-4 py-1 text-xs font-medium tracking-wide uppercase shadow-lg shadow-sky-900/40 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
          <span>Welcome to OpenBookings</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight drop-shadow-lg">
          Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200">playful world</span>!
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-100/90 max-w-md mx-auto">
          This page is styled with Tailwind CSS. Tweak the colors, shadows, and animations to make it feel uniquely yours.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-6 py-2.5 text-sm font-semibold shadow-xl shadow-slate-900/50 ring-2 ring-sky-300/70 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-emerald-300">
            <span className="absolute -inset-px rounded-full bg-gradient-to-r from-sky-400/40 via-indigo-400/40 to-emerald-400/40 opacity-0 blur-sm transition group-hover:opacity-100" />
            <span className="relative">Get started</span>
            <span className="relative text-lg leading-none group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </button>

          <span className="text-xs sm:text-sm text-slate-100/80">
            Try editing <code className="rounded bg-slate-900/40 px-2 py-1 text-[0.7rem] font-mono">app/page.tsx</code> to see instant changes.
          </span>
        </div>

        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-32 left-10 h-56 w-56 rounded-full bg-sky-300/40 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-300/40 blur-3xl" />
        </div>
      </div>
    </main>
  );
}