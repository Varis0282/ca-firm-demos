"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Phone, Compass, Menu, X, ChevronDown, Star, MapPin, BadgeCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { faqs, stats, industries, team } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/meridian";
export const INDIGO = "text-[#4338CA]";
export const INK = "text-[#1E1B4B]";

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const [text, setText] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) { setText(value); return; }
    const prefix = "";
    const suffix = value.replace(/^[0-9,.]+/, "");
    const controls = animate(0, num, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setText(`${prefix}${num >= 100 ? Math.round(v).toLocaleString("en-IN") : v.toFixed(num % 1 ? 1 : 0)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]);
  return <p ref={ref} className="text-4xl font-bold text-[#4338CA]">{text}</p>;
}

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/services`, label: t.nav.services },
    { href: `${BASE}/team`, label: t.nav.team },
    { href: `${BASE}/clients`, label: t.nav.clients },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/60 bg-white/75 px-5 py-3 shadow-lg shadow-indigo-900/5 backdrop-blur-xl">
        <Link href={BASE} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4338CA] to-[#818CF8] text-white">
            <Compass className="h-5 w-5" />
          </span>
          <span className={`font-bold ${INK}`}>{lang === "en" ? firm.name : firm.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-500 transition-colors hover:text-[#4338CA]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-slate-400 hover:text-slate-600">← All demos</Link>
          <LangToggle className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 hover:border-[#4338CA] hover:text-[#4338CA]" />
          <Link href={`${BASE}/contact`} className="rounded-xl bg-gradient-to-r from-[#4338CA] to-[#6D28D9] px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-medium text-slate-700">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <LangToggle className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="rounded-xl bg-[#4338CA] px-5 py-2.5 font-semibold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#4338CA]">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? "text-white" : INK}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-indigo-200" : "text-slate-500"}`}>{sub}</p>}
    </FadeIn>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden py-20 text-center">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
        <h1 className={`text-4xl font-bold md:text-5xl ${INK}`}>{title}</h1>
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-slate-500">{sub}</p>}
      </motion.div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="px-4 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl shadow-indigo-900/5 backdrop-blur md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.value} delay={i * 0.08}>
            <Counter value={s.value} />
            <p className="mt-1 text-sm font-medium text-slate-500">{s[lang]}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function TeamCard({ i, detailed = false }: { i: number; detailed?: boolean }) {
  const { lang } = useLang();
  const m = team[i];
  const d = m[lang];
  return (
    <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-lg shadow-indigo-900/5 backdrop-blur">
      <img src={img.team[m.photo]} alt={d.name} className="h-60 w-full object-cover" />
      <div className="p-5">
        <h3 className={`text-lg font-bold ${INK}`}>{d.name}</h3>
        <p className={`text-sm font-semibold ${INDIGO}`}>{d.spec}</p>
        <p className="mt-1 text-xs text-slate-500">{d.qual} · {d.exp}</p>
        {detailed && <p className="mt-3 text-sm leading-relaxed text-slate-600">{d.bio}</p>}
        {detailed && <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{m.slots}</p>}
      </div>
    </motion.div>
  );
}

export function IndustryCard({ i }: { i: number }) {
  const { lang } = useLang();
  const item = industries[i];
  const d = pick(item, lang);
  return (
    <motion.div whileHover={{ y: -4 }} className="flex gap-4 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-indigo-900/5 backdrop-blur">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4338CA] to-[#818CF8] text-white">
        <Icon name={item.icon} className="h-6 w-6" />
      </span>
      <div>
        <h3 className={`font-bold ${INK}`}>{d.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{d.desc}</p>
      </div>
    </motion.div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <FadeIn key={i} delay={i * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-sm backdrop-blur">
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800">
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#4338CA] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="border-t border-slate-100 px-5 py-4 text-slate-600">{item.a}</p>}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <FadeIn className="lg:col-span-2">
        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-indigo-900/5 backdrop-blur">
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold ${INK}`}>
            <MapPin className={`h-5 w-5 ${INDIGO}`} /> {lang === "en" ? firm.name : firm.nameHi}
          </h3>
          <p className="mb-4 text-slate-600">{lang === "en" ? firm.address : firm.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-slate-600">
            {firm.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={firm.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl bg-[#4338CA] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3730A3]">
            {t.misc.getDirections} →
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="overflow-hidden rounded-3xl border border-white/70 shadow-lg lg:col-span-3">
        <iframe src={firm.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Office location map" />
      </FadeIn>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="px-4 py-16">
      <FadeIn className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#312E81] via-[#4338CA] to-[#6D28D9] p-10 text-center text-white shadow-2xl shadow-indigo-500/30 md:p-16">
        <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-violet-400/20 blur-2xl" />
        <h2 className="relative text-3xl font-bold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="relative mt-3 text-indigo-200">{t.sections.ctaSub}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-xl bg-white px-8 py-3.5 font-bold text-[#4338CA] shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 rounded-xl border border-white/50 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function TrustPoint({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
      <BadgeCheck className={`h-4 w-4 ${INDIGO}`} /> {text}
    </span>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/services`, label: t.nav.services },
    { href: `${BASE}/team`, label: t.nav.team },
    { href: `${BASE}/clients`, label: t.nav.clients },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="mt-10 bg-[#1E1B4B] pt-14 text-indigo-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4338CA] to-[#818CF8] text-white"><Compass className="h-5 w-5" /></span>
            <span className="font-bold text-white">{lang === "en" ? firm.name : firm.nameHi}</span>
          </div>
          <p className="text-sm text-indigo-300/70">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-indigo-300/70">
            <li>{lang === "en" ? firm.address : firm.addressHi}</li>
            <li><a href={`tel:${firm.phoneRaw}`} className="hover:text-white">{firm.phone}</a></li>
            <li>{firm.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-indigo-300/70">
            {firm.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-indigo-100">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-indigo-300/50">
        © {new Date().getFullYear()} {firm.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-indigo-900/5 backdrop-blur sm:p-8",
  label: "mb-1.5 block text-sm font-semibold text-[#1E1B4B]",
  input: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4338CA] focus:ring-2 focus:ring-indigo-100",
  select: "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 outline-none focus:border-[#4338CA] focus:ring-2 focus:ring-indigo-100",
  dayBtn: "rounded-xl border border-slate-200 bg-white py-2 text-center text-slate-600 transition-colors hover:border-[#4338CA]",
  dayBtnActive: "rounded-xl border border-[#4338CA] bg-gradient-to-b from-[#4338CA] to-[#3730A3] py-2 text-center text-white shadow-md shadow-indigo-500/30",
  slotBtn: "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-[#4338CA]",
  slotBtnActive: "rounded-xl border border-[#4338CA] bg-[#4338CA] px-4 py-2 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};
