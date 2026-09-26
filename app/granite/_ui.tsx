"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Square, Menu, X, Plus, Star, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { faqs, stats, industries, team } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/granite";
export const STEEL = "text-[#8FB6D9]";
export const LIGHT = "text-[#E4EAF0]";
export const HAIR = "border-[#2A313B]";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8FB6D9]">
      <span className="h-px w-8 bg-[#8FB6D9]" /> {children}
    </p>
  );
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
    <header className={`sticky top-0 z-40 border-b ${HAIR} bg-[#14171C]/95 backdrop-blur`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center border border-[#8FB6D9] text-[#8FB6D9]">
            <Square className="h-4 w-4 fill-current" />
          </span>
          <span className="leading-tight">
            <span className={`block font-bold ${LIGHT}`}>{lang === "en" ? firm.name : firm.nameHi}</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-[#5C6B7A]">Chartered Accountants</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wider lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#8A96A3] transition-colors hover:text-[#8FB6D9]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs normal-case tracking-normal text-[#5C6B7A] hover:text-[#8A96A3]">← All demos</Link>
          <LangToggle className="border border-[#2A313B] px-3 py-1 text-xs font-semibold text-[#8A96A3] hover:border-[#8FB6D9] hover:text-[#8FB6D9]" />
          <Link href={`${BASE}/contact#book`} className="border border-[#8FB6D9] px-5 py-2.5 font-semibold text-[#8FB6D9] transition-colors hover:bg-[#8FB6D9] hover:text-[#14171C]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-[#E4EAF0] lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className={`border-t ${HAIR} bg-[#14171C] px-4 pb-4 lg:hidden`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block border-b ${HAIR} py-3 font-medium uppercase tracking-wider text-[#8A96A3]`}>
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <LangToggle className="border border-[#2A313B] px-3 py-1 text-xs font-semibold text-[#8A96A3]" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="border border-[#8FB6D9] px-5 py-2.5 font-semibold text-[#8FB6D9]">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl font-bold md:text-4xl ${LIGHT}`}>{title}</h2>
      {sub && <p className="mt-3 text-[#8A96A3]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub, eyebrow }: { title: string; sub?: string; eyebrow?: string }) {
  return (
    <section className={`border-b ${HAIR} py-16`}>
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className={`text-4xl font-bold md:text-5xl ${LIGHT}`}>{title}</h1>
        {sub && <p className="mt-4 max-w-xl text-[#8A96A3]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#8FB6D9] text-[#8FB6D9]" : "fill-[#2A313B] text-[#2A313B]"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className={`border-y ${HAIR} bg-[#171B21]`}>
      <div className={`mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#2A313B] md:grid-cols-4`}>
        {stats.map((s) => (
          <div key={s.value} className="bg-[#171B21] p-8 text-center">
            <p className="text-4xl font-bold text-[#8FB6D9]">{s.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5C6B7A]">{s[lang]}</p>
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
    <div className={`group border ${HAIR} bg-[#171B21] transition-colors hover:border-[#8FB6D9]/50`}>
      <img src={img.team[m.photo]} alt={d.name} className="h-60 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
      <div className="p-5">
        <h3 className={`text-lg font-bold ${LIGHT}`}>{d.name}</h3>
        <p className={`text-sm font-semibold ${STEEL}`}>{d.spec}</p>
        <p className="mt-1 text-xs text-[#5C6B7A]">{d.qual} · {d.exp}</p>
        {detailed && <p className="mt-3 text-sm leading-relaxed text-[#8A96A3]">{d.bio}</p>}
        {detailed && <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5C6B7A]">{m.slots}</p>}
      </div>
    </div>
  );
}

export function IndustryRow({ i }: { i: number }) {
  const { lang } = useLang();
  const item = industries[i];
  const d = pick(item, lang);
  return (
    <div className="flex gap-5 bg-[#171B21] p-6 transition-colors hover:bg-[#1B2027]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#2A313B] text-[#8FB6D9]">
        <Icon name={item.icon} className="h-5 w-5" />
      </span>
      <div>
        <h3 className={`font-bold ${LIGHT}`}>{d.title}</h3>
        <p className="mt-1 text-sm text-[#8A96A3]">{d.desc}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`mx-auto max-w-3xl border ${HAIR}`}>
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className={i > 0 ? `border-t ${HAIR}` : ""}>
            <button onClick={() => setOpen(isOpen ? null : i)} className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold ${LIGHT}`}>
              <span><span className="mr-4 text-[#5C6B7A]">{String(i + 1).padStart(2, "0")}</span>{item.q}</span>
              <Plus className={`h-5 w-5 shrink-0 text-[#8FB6D9] transition-transform ${isOpen ? "rotate-45" : ""}`} />
            </button>
            {isOpen && <p className="px-6 pb-5 pl-[4.5rem] text-[#8A96A3]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className={`grid border ${HAIR} lg:grid-cols-5`}>
      <div className={`border-b ${HAIR} bg-[#171B21] p-7 lg:col-span-2 lg:border-b-0 lg:border-r`}>
        <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold ${LIGHT}`}>
          <MapPin className={`h-5 w-5 ${STEEL}`} /> {lang === "en" ? firm.name : firm.nameHi}
        </h3>
        <p className="mb-4 text-[#8A96A3]">{lang === "en" ? firm.address : firm.addressHi}</p>
        <div className="mb-5 space-y-1 text-sm text-[#8A96A3]">
          {firm.timings[lang].map((tm) => (
            <p key={tm.days}><span className={`font-semibold ${LIGHT}`}>{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={firm.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#8FB6D9] px-5 py-2.5 text-sm font-semibold text-[#8FB6D9] transition-colors hover:bg-[#8FB6D9] hover:text-[#14171C]">
          {t.misc.getDirections} →
        </a>
      </div>
      <div className="lg:col-span-3">
        <iframe src={firm.mapEmbed} className="h-72 w-full opacity-90 [filter:invert(90%)_hue-rotate(180deg)] lg:h-full" loading="lazy" title="Office location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className={`border-t ${HAIR} bg-[#171B21] py-16`}>
      <div className="mx-auto max-w-6xl px-4 md:flex md:items-center md:justify-between md:gap-10">
        <div>
          <h2 className={`text-3xl font-bold md:text-4xl ${LIGHT}`}>{t.sections.ctaTitle}</h2>
          <p className="mt-3 text-[#8A96A3]">{t.sections.ctaSub}</p>
        </div>
        <div className="mt-8 flex shrink-0 flex-wrap gap-4 md:mt-0">
          <Link href={`${BASE}/contact#book`} className="bg-[#8FB6D9] px-8 py-3.5 font-bold text-[#14171C] transition-colors hover:bg-[#A9C8E4]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${firm.phoneRaw}`} className={`flex items-center gap-2 border ${HAIR} px-8 py-3.5 font-bold ${LIGHT} transition-colors hover:border-[#8FB6D9]`}>
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
    <footer className={`border-t ${HAIR} bg-[#101318] pt-14`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center border border-[#8FB6D9] text-[#8FB6D9]"><Square className="h-3.5 w-3.5 fill-current" /></span>
            <span className={`font-bold ${LIGHT}`}>{lang === "en" ? firm.name : firm.nameHi}</span>
          </div>
          <p className="text-sm text-[#5C6B7A]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#8FB6D9]">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-[#8A96A3] hover:text-[#8FB6D9]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#8FB6D9]">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#8A96A3]">
            <li>{lang === "en" ? firm.address : firm.addressHi}</li>
            <li><a href={`tel:${firm.phoneRaw}`} className="hover:text-[#8FB6D9]">{firm.phone}</a></li>
            <li>{firm.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#8FB6D9]">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#8A96A3]">
            {firm.timings[lang].map((tm) => (
              <li key={tm.days}><span className={`font-semibold ${LIGHT}`}>{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`border-t ${HAIR} py-5 text-center text-xs text-[#5C6B7A]`}>
        © {new Date().getFullYear()} {firm.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 border border-[#2A313B] bg-[#171B21] p-6 sm:p-8",
  label: "mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8FB6D9]",
  input: "w-full border border-[#2A313B] bg-[#14171C] px-4 py-2.5 text-[#E4EAF0] outline-none transition-colors placeholder:text-[#4A5560] focus:border-[#8FB6D9]",
  select: "w-full border border-[#2A313B] bg-[#14171C] px-4 py-2.5 text-[#E4EAF0] outline-none focus:border-[#8FB6D9]",
  dayBtn: "border border-[#2A313B] bg-[#14171C] py-2 text-center text-[#8A96A3] transition-colors hover:border-[#8FB6D9]",
  dayBtnActive: "border border-[#8FB6D9] bg-[#8FB6D9] py-2 text-center text-[#14171C]",
  slotBtn: "border border-[#2A313B] bg-[#14171C] px-4 py-2 text-sm font-semibold text-[#8A96A3] transition-colors hover:border-[#8FB6D9]",
  slotBtnActive: "border border-[#8FB6D9] bg-[#8FB6D9] px-4 py-2 text-sm font-semibold text-[#14171C]",
  groupTitle: "mb-2 mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5C6B7A]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 font-bold text-white transition-opacity hover:opacity-90",
  success: "border border-green-800 bg-green-950/40 px-4 py-3 text-sm font-semibold text-green-400",
  error: "border border-red-800 bg-red-950/40 px-4 py-3 text-sm font-semibold text-red-400",
};
