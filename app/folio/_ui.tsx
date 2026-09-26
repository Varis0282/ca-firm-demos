"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ArrowUpRight, Star, MapPin, Minus } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { faqs, stats, industries, team } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/folio";
export const OX = "text-[#7C2D3E]";
export const INKB = "text-[#111111]";
export const DISPLAY = "[font-family:var(--font-display)]";

export function Num({ n }: { n: number }) {
  return <span className="text-xs font-semibold tracking-[0.3em] text-[#7C2D3E]">{String(n).padStart(2, "0")}</span>;
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
    <header className="sticky top-0 z-40 border-b-2 border-[#111111] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="leading-tight">
          <span className={`block text-xl font-bold tracking-tight ${INKB}`}>
            {lang === "en" ? firm.name : firm.nameHi}<span className={OX}>.</span>
          </span>
          <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8A8A8A]">Chartered Accountants</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#5A5A5A] underline-offset-4 transition-colors hover:text-[#7C2D3E] hover:underline">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-[#9A9A9A] hover:text-[#5A5A5A]">← All demos</Link>
          <LangToggle className="border-2 border-[#111111] px-3 py-1 text-xs font-bold hover:bg-[#111111] hover:text-white" />
          <Link href={`${BASE}/contact`} className="bg-[#7C2D3E] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#5E2230]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#E5E5E5] bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#E5E5E5] py-3 font-medium">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <LangToggle className="border-2 border-[#111111] px-3 py-1 text-xs font-bold" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="bg-[#7C2D3E] px-5 py-2.5 font-semibold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ n, title, sub }: { n: number; title: string; sub?: string }) {
  return (
    <div className="mb-12 border-t-2 border-[#111111] pt-6">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className={`text-3xl font-medium md:text-5xl ${INKB} ${DISPLAY}`}>{title}</h2>
        <Num n={n} />
      </div>
      {sub && <p className="mt-3 max-w-xl text-[#6E6E6E]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub, kicker }: { title: string; sub?: string; kicker?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pt-24">
      {kicker && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#7C2D3E]">{kicker}</p>}
      <h1 className={`max-w-4xl text-5xl font-medium leading-[1.05] md:text-7xl ${INKB} ${DISPLAY}`}>{title}</h1>
      {sub && <p className="mt-6 max-w-xl text-lg text-[#6E6E6E]">{sub}</p>}
      <div className="mt-10 h-px w-full bg-[#111111]" />
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i <= n ? "fill-[#7C2D3E] text-[#7C2D3E]" : "fill-[#E0E0E0] text-[#E0E0E0]"}`} />
      ))}
    </div>
  );
}

export function StatsRow() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-2 border-t-2 border-[#111111] md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.value} className={`border-b border-[#E5E5E5] px-2 py-8 text-center md:border-b-0 ${i > 0 ? "md:border-l md:border-[#E5E5E5]" : ""}`}>
          <p className={`text-4xl font-medium md:text-5xl ${INKB} ${DISPLAY}`}>{s.value}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">{s[lang]}</p>
        </div>
      ))}
    </div>
  );
}

export function TeamRow({ i, detailed = false }: { i: number; detailed?: boolean }) {
  const { lang } = useLang();
  const m = team[i];
  const d = m[lang];
  return (
    <div className={`grid gap-6 border-t border-[#E5E5E5] py-8 md:grid-cols-[180px_1fr_auto] md:items-start`}>
      <img src={img.team[m.photo]} alt={d.name} className="h-44 w-36 object-cover grayscale" />
      <div>
        <h3 className={`text-2xl font-medium ${INKB} ${DISPLAY}`}>{d.name}</h3>
        <p className={`mt-0.5 font-semibold ${OX}`}>{d.spec}</p>
        <p className="mt-1 text-sm text-[#8A8A8A]">{d.qual} · {d.exp}</p>
        {detailed && <p className="mt-3 max-w-xl text-[#5A5A5A]">{d.bio}</p>}
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] md:text-right">{m.slots}</p>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-[#E5E5E5]">
            <button onClick={() => setOpen(isOpen ? null : i)} className={`flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium ${INKB}`}>
              <span className="flex items-baseline gap-5"><Num n={i + 1} /> {item.q}</span>
              <Minus className={`h-5 w-5 shrink-0 text-[#7C2D3E] transition-transform ${isOpen ? "" : "rotate-90"}`} />
            </button>
            {isOpen && <p className="max-w-3xl pb-6 pl-12 text-[#6E6E6E]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid border-2 border-[#111111] lg:grid-cols-5">
      <div className="border-b-2 border-[#111111] p-8 lg:col-span-2 lg:border-b-0 lg:border-r-2">
        <h3 className={`mb-4 flex items-center gap-2 text-2xl font-medium ${INKB} ${DISPLAY}`}>
          <MapPin className={`h-5 w-5 ${OX}`} /> {lang === "en" ? firm.name : firm.nameHi}
        </h3>
        <p className="mb-4 text-[#5A5A5A]">{lang === "en" ? firm.address : firm.addressHi}</p>
        <div className="mb-6 space-y-1 text-sm text-[#5A5A5A]">
          {firm.timings[lang].map((tm) => (
            <p key={tm.days}><span className={`font-semibold ${INKB}`}>{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={firm.mapLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 font-semibold ${OX} underline underline-offset-4 hover:no-underline`}>
          {t.misc.getDirections} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="lg:col-span-3">
        <iframe src={firm.mapEmbed} className="h-72 w-full grayscale lg:h-full" loading="lazy" title="Office location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#111111] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className={`max-w-3xl text-4xl font-medium leading-tight md:text-6xl ${DISPLAY}`}>
          {t.sections.ctaTitle}
        </h2>
        <p className="mt-4 max-w-xl text-[#B5B5B5]">{t.sections.ctaSub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={`${BASE}/contact`} className="bg-[#7C2D3E] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#93384C]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 border-2 border-white px-8 py-4 font-semibold transition-colors hover:bg-white hover:text-[#111111]">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
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
    <footer className="border-t-2 border-[#111111] pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <p className={`text-xl font-bold ${INKB}`}>{lang === "en" ? firm.name : firm.nameHi}<span className={OX}>.</span></p>
          <p className="mt-2 text-sm text-[#8A8A8A]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#7C2D3E]">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-[#5A5A5A] underline-offset-4 hover:text-[#7C2D3E] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#7C2D3E]">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#5A5A5A]">
            <li>{lang === "en" ? firm.address : firm.addressHi}</li>
            <li><a href={`tel:${firm.phoneRaw}`} className="underline-offset-4 hover:text-[#7C2D3E] hover:underline">{firm.phone}</a></li>
            <li>{firm.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#7C2D3E]">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#5A5A5A]">
            {firm.timings[lang].map((tm) => (
              <li key={tm.days}><span className={`font-semibold ${INKB}`}>{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E5E5E5] py-5 text-center text-xs text-[#9A9A9A]">
        © {new Date().getFullYear()} {firm.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border-2 border-[#111111] p-6 sm:p-10",
  label: "mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#111111]",
  input: "w-full border-0 border-b-2 border-[#111111] bg-transparent px-0 py-2.5 text-[#111111] outline-none transition-colors placeholder:text-[#B5B5B5] focus:border-[#7C2D3E]",
  select: "w-full border-0 border-b-2 border-[#111111] bg-transparent px-0 py-2.5 text-[#111111] outline-none focus:border-[#7C2D3E]",
  dayBtn: "border border-[#D5D5D5] bg-white py-2 text-center text-[#5A5A5A] transition-colors hover:border-[#111111]",
  dayBtnActive: "border border-[#7C2D3E] bg-[#7C2D3E] py-2 text-center text-white",
  slotBtn: "border border-[#D5D5D5] bg-white px-4 py-2 text-sm font-semibold text-[#5A5A5A] transition-colors hover:border-[#111111]",
  slotBtnActive: "border border-[#111111] bg-[#111111] px-4 py-2 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8A8A8A]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-bold text-white transition-opacity hover:opacity-90",
  success: "border-l-4 border-green-600 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800",
  error: "border-l-4 border-[#7C2D3E] bg-red-50 px-4 py-3 text-sm font-semibold text-[#7C2D3E]",
};
