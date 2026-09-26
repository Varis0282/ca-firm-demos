"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Clock, Scale, Menu, X, ChevronDown, Star, MapPin, BadgeCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { faqs, stats, industries, team } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/ledger";
export const TEAL = "text-[#155263]";
export const SERIF = "[font-family:var(--font-serif)]";

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
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-[#155263] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4">
            <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5 text-[#C99846]" /> {firm.phone}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#C99846]" /> {t.hero.open}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#C99846] bg-[#155263] text-[#C99846]">
            <Scale className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className={`block text-lg font-bold ${TEAL} ${SERIF}`}>{lang === "en" ? firm.name : firm.nameHi}</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#C99846]">Chartered Accountants</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#155263]">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact#book`} className="rounded-md bg-[#C99846] px-5 py-2.5 text-white shadow-md shadow-amber-700/20 transition-colors hover:bg-[#b3833a]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="mt-3 block rounded-md bg-[#C99846] px-5 py-3 text-center font-semibold text-white">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C99846]">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold md:text-4xl ${SERIF} ${light ? "text-white" : TEAL}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-slate-300" : "text-slate-500"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-br from-[#155263] to-[#0E3A47] py-16 text-center text-white">
      <h1 className={`text-4xl font-bold md:text-5xl ${SERIF}`}>{title}</h1>
      <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C99846]" />
      {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-slate-300">{sub}</p>}
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
    <section className="border-y-4 border-[#C99846]/30 bg-[#155263] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value}>
            <p className={`text-4xl font-bold text-[#C99846] ${SERIF}`}>{s.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-300">{s[lang]}</p>
          </div>
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
    <div className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <img src={img.team[m.photo]} alt={d.name} className="h-60 w-full object-cover" />
      <div className="border-t-2 border-[#C99846] p-5">
        <h3 className={`text-lg font-bold ${TEAL} ${SERIF}`}>{d.name}</h3>
        <p className="text-sm font-semibold text-[#C99846]">{d.spec}</p>
        <p className="mt-1 text-xs text-slate-500">{d.qual} · {d.exp}</p>
        {detailed && <p className="mt-3 text-sm leading-relaxed text-slate-600">{d.bio}</p>}
        {detailed && <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">{m.slots}</p>}
      </div>
    </div>
  );
}

export function IndustryCard({ i }: { i: number }) {
  const { lang } = useLang();
  const item = industries[i];
  const d = pick(item, lang);
  return (
    <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-[#C99846]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#155263]/5 text-[#155263]">
        <Icon name={item.icon} className="h-6 w-6" />
      </span>
      <div>
        <h3 className={`font-bold ${TEAL}`}>{d.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{d.desc}</p>
      </div>
    </div>
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
          <div key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800">
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#C99846] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-slate-100 px-5 py-4 text-slate-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold ${TEAL} ${SERIF}`}>
            <MapPin className="h-5 w-5 text-[#C99846]" /> {lang === "en" ? firm.name : firm.nameHi}
          </h3>
          <p className="mb-4 text-slate-600">{lang === "en" ? firm.address : firm.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-slate-600">
            {firm.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={firm.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-[#155263] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0E3A47]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm lg:col-span-3">
        <iframe src={firm.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Office location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-to-r from-[#155263] to-[#0E3A47] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className={`text-3xl font-bold md:text-4xl ${SERIF}`}>{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-slate-300">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="rounded-md bg-[#C99846] px-8 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-[#b3833a]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 rounded-md border-2 border-white/60 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TrustPoint({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
      <BadgeCheck className="h-4 w-4 text-[#C99846]" /> {text}
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
    <footer className="bg-[#0E3A47] pt-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#C99846] text-[#C99846]"><Scale className="h-5 w-5" /></span>
            <span className={`font-bold text-white ${SERIF}`}>{lang === "en" ? firm.name : firm.nameHi}</span>
          </div>
          <p className="text-sm text-slate-400">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#C99846]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{lang === "en" ? firm.address : firm.addressHi}</li>
            <li><a href={`tel:${firm.phoneRaw}`} className="hover:text-[#C99846]">{firm.phone}</a></li>
            <li>{firm.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {firm.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-slate-200">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {firm.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#155263]",
  input: "w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#C99846] focus:ring-2 focus:ring-amber-100",
  select: "w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-800 outline-none focus:border-[#C99846] focus:ring-2 focus:ring-amber-100",
  dayBtn: "rounded-md border border-slate-200 bg-white py-2 text-center text-slate-600 transition-colors hover:border-[#C99846]",
  dayBtnActive: "rounded-md border border-[#C99846] bg-[#C99846] py-2 text-center text-white shadow-md shadow-amber-700/20",
  slotBtn: "rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-[#C99846]",
  slotBtnActive: "rounded-md border border-[#155263] bg-[#155263] px-4 py-2 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};
