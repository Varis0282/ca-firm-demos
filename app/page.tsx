import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

const themes = [
  {
    href: "/ledger",
    name: "Ledger",
    style: "Classic Trust",
    desc: "Deep teal, brass and serif headings — the established firm every businessman trusts on sight.",
    swatches: ["#155263", "#C99846", "#F7F9FA", "#0E3A47"],
    nav: "#ffffff",
    hero: "linear-gradient(135deg,#EDF3F5,#F7F9FA)",
    accent: "#C99846",
    text: "#155263",
  },
  {
    href: "/meridian",
    name: "Meridian",
    style: "Modern Animated",
    desc: "Light, airy and quietly animated — indigo gradients and glass cards, dignified not flashy.",
    swatches: ["#4338CA", "#818CF8", "#F8FAFC", "#1E1B4B"],
    nav: "rgba(255,255,255,0.75)",
    hero: "linear-gradient(135deg,#EEF2FF,#F8FAFC)",
    accent: "#4338CA",
    text: "#1E1B4B",
  },
  {
    href: "/sage",
    name: "Sage",
    style: "Warm Approachable",
    desc: "Warm paper, sage green and mustard — the friendly neighbourhood CA who explains everything.",
    swatches: ["#5F7F6A", "#D9A441", "#FAF6EF", "#3E4A42"],
    nav: "#FAF6EF",
    hero: "linear-gradient(135deg,#F2EBDD,#FAF6EF)",
    accent: "#5F7F6A",
    text: "#3E4A42",
  },
  {
    href: "/granite",
    name: "Granite",
    style: "Dark Corporate",
    desc: "Charcoal, steel blue and hairline grids — the serious face of a firm that audits factories.",
    swatches: ["#8FB6D9", "#14171C", "#1E232B", "#C7CFD8"],
    nav: "#14171C",
    hero: "linear-gradient(135deg,#1A1F26,#14171C)",
    accent: "#8FB6D9",
    text: "#C7CFD8",
  },
  {
    href: "/folio",
    name: "Folio",
    style: "Minimal Editorial",
    desc: "White space, editorial serif and a single oxblood accent — calm, precise, premium.",
    swatches: ["#7C2D3E", "#111111", "#ffffff", "#F4EFEA"],
    nav: "#ffffff",
    hero: "#ffffff",
    accent: "#7C2D3E",
    text: "#111111",
  },
];

const features = [
  "Consultation booking on WhatsApp",
  "Hindi / English toggle",
  "All 8 services explained",
  "Partner & team profiles",
  "Industries + client proof",
  "Google Maps",
  "FAQ with straight answers",
  "Mobile-first & fast",
];

function MiniPreview({ t }: { t: (typeof themes)[number] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      <div className="flex items-center gap-1.5 bg-[#1a1d26] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 rounded bg-white/10" />
      </div>
      <div style={{ background: t.hero }} className="p-4">
        <div style={{ background: t.nav }} className="mb-4 flex items-center justify-between rounded-md px-3 py-2 backdrop-blur">
          <span style={{ background: t.accent }} className="h-2.5 w-12 rounded-full" />
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ background: t.text, opacity: 0.35 }} className="h-1.5 w-6 rounded-full" />
            ))}
          </span>
        </div>
        <div className="flex items-center gap-4 pb-2">
          <div className="flex-1">
            <div style={{ background: t.text }} className="mb-2 h-3 w-4/5 rounded-full opacity-90" />
            <div style={{ background: t.text }} className="mb-3 h-3 w-3/5 rounded-full opacity-50" />
            <div style={{ background: t.accent }} className="h-5 w-24 rounded-full" />
          </div>
          <div style={{ background: t.accent, opacity: 0.25 }} className="h-16 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className={`${grotesk.className} min-h-screen bg-[#0a0c12] text-white`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
          Live Demo Showcase
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          One CA firm.{" "}
          <span className="bg-gradient-to-r from-amber-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Five completely different websites.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Every demo below is a complete, working website for the same chartered-accountancy firm —
          same content, same features. You simply pick the design you love, we put your name on it.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <span key={f} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {themes.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] ${
                i === 4 ? "md:col-span-2 md:max-w-[calc(50%-12px)]" : ""
              }`}
            >
              <MiniPreview t={t} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{t.name}</h2>
                    <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-slate-300">{t.style}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.desc}</p>
                </div>
                <div className="flex shrink-0 gap-1.5 pt-2">
                  {t.swatches.map((c) => (
                    <span key={c} style={{ background: c }} className="h-4 w-4 rounded-full ring-1 ring-white/20" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
                View demo →
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          Built with Next.js · Hindi + English · WhatsApp consultation booking · Ready in 7 days for your firm
        </footer>
      </div>
    </div>
  );
}
