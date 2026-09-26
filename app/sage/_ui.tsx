"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Sprout, Menu, X, ChevronDown, Star, MapPin, HeartHandshake } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { faqs, stats, industries, team } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/sage";
export const GREEN = "text-[#5F7F6A]";
export const DARK = "text-[#3E4A42]";

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 ${className}`} fill="none" aria-hidden>
      <path d="M2 8c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 26 2" stroke="#D9A441" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-[45%_55%_60%_40%/50%_45%_55%_50%] ${className}`} />;
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
    <header className="sticky top-0 z-40 border-b border-[#5F7F6A]/10 bg-[#FAF6EF]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5F7F6A] text-[#FAF6EF]">
            <Sprout className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className={`block text-lg font-extrabold ${DARK}`}>{lang === "en" ? firm.name : firm.nameHi}</span>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#D9A441]">Chartered Accountants</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-[15px] font-bold lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#6B7568] transition-colors hover:text-[#5F7F6A]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs font-semibold text-[#9AA396] hover:text-[#5F7F6A]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#5F7F6A]/30 px-3 py-1 text-xs font-bold text-[#5F7F6A] hover:border-[#5F7F6A]" />
          <Link href={`${BASE}/contact`} className="rounded-full bg-[#D9A441] px-6 py-2.5 font-extrabold text-white shadow-md shadow-amber-600/20 transition-transform hover:scale-105">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#5F7F6A]/10 bg-[#FAF6EF] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#5F7F6A]/10 py-3 font-bold">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <LangToggle className="rounded-full border-2 border-[#5F7F6A]/30 px-3 py-1 text-xs font-bold text-[#5F7F6A]" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="rounded-full bg-[#D9A441] px-6 py-2.5 font-extrabold text-white">
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
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-[#D9A441]">{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-[#FAF6EF]" : DARK}`}>{title}</h2>
      <Squiggle className="mx-auto mt-3" />
      {sub && <p className={`mt-3 ${light ? "text-[#DCE5DA]" : "text-[#6B7568]"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden py-16 text-center">
      <Blob className="-left-20 -top-24 h-72 w-72 bg-[#E9DFC8]/70" />
      <Blob className="-right-16 top-4 h-64 w-64 bg-[#D6E2D2]/80" />
      <div className="relative">
        <h1 className={`text-4xl font-extrabold md:text-5xl ${DARK}`}>{title}</h1>
        <Squiggle className="mx-auto mt-4" />
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-[#6B7568]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#D9A441] text-[#D9A441]" : "fill-[#E5E0D3] text-[#E5E0D3]"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} className={`rounded-[2rem] p-6 text-center ${["bg-[#E4EDE1]", "bg-[#F4E6C8]", "bg-[#EBE3D2]", "bg-[#E0E8E9]"][i % 4]}`}>
            <p className={`text-4xl font-extrabold ${DARK}`}>{s.value}</p>
            <p className="mt-1 text-sm font-bold text-[#6B7568]">{s[lang]}</p>
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
  const tilt = i % 2 === 0 ? "rotate-1" : "-rotate-1";
  return (
    <div className={`rounded-[2rem] border-2 border-[#5F7F6A]/15 bg-white p-4 shadow-sm transition-all hover:rotate-0 hover:shadow-lg ${tilt}`}>
      <img src={img.team[m.photo]} alt={d.name} className="h-56 w-full rounded-[1.5rem] object-cover" />
      <div className="p-4">
        <h3 className={`text-lg font-extrabold ${DARK}`}>{d.name}</h3>
        <p className={`text-sm font-bold ${GREEN}`}>{d.spec}</p>
        <p className="mt-1 text-xs text-[#8A937F]">{d.qual} · {d.exp}</p>
        {detailed && <p className="mt-3 text-sm leading-relaxed text-[#6B7568]">{d.bio}</p>}
        {detailed && <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-[#D9A441]">{m.slots}</p>}
      </div>
    </div>
  );
}

export function IndustryCard({ i }: { i: number }) {
  const { lang } = useLang();
  const item = industries[i];
  const d = pick(item, lang);
  return (
    <div className="flex gap-4 rounded-[2rem] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E4EDE1] text-[#5F7F6A]">
        <Icon name={item.icon} className="h-6 w-6" />
      </span>
      <div>
        <h3 className={`font-extrabold ${DARK}`}>{d.title}</h3>
        <p className="mt-1 text-sm text-[#6B7568]">{d.desc}</p>
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
          <div key={i} className="overflow-hidden rounded-[1.5rem] border-2 border-[#5F7F6A]/10 bg-white">
            <button onClick={() => setOpen(isOpen ? null : i)} className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-extrabold ${DARK}`}>
              {item.q}
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "rotate-180 bg-[#5F7F6A] text-white" : "bg-[#E4EDE1] text-[#5F7F6A]"}`}>
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && <p className="border-t-2 border-dashed border-[#5F7F6A]/15 px-6 py-4 text-[#6B7568]">{item.a}</p>}
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
        <div className="rounded-[2rem] bg-white p-7 shadow-sm">
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-extrabold ${DARK}`}>
            <MapPin className="h-5 w-5 text-[#D9A441]" /> {lang === "en" ? firm.name : firm.nameHi}
          </h3>
          <p className="mb-4 text-[#6B7568]">{lang === "en" ? firm.address : firm.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-[#6B7568]">
            {firm.timings[lang].map((tm) => (
              <p key={tm.days}><span className={`font-extrabold ${DARK}`}>{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={firm.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#5F7F6A] px-6 py-2.5 text-sm font-extrabold text-white hover:bg-[#4E6B58]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-md lg:col-span-3">
        <iframe src={firm.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Office location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#5F7F6A] py-16">
      <Blob className="-left-16 -top-20 h-64 w-64 bg-white/10" />
      <Blob className="-bottom-24 -right-10 h-72 w-72 bg-[#D9A441]/20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-[#FAF6EF]">
        <HeartHandshake className="mx-auto mb-4 h-10 w-10 text-[#F4E6C8]" />
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-[#DCE5DA]">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-full bg-[#D9A441] px-8 py-3.5 font-extrabold text-white shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#FAF6EF]/60 px-8 py-3.5 font-extrabold text-[#FAF6EF] transition-colors hover:bg-white/10">
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
    <footer className="bg-[#3E4A42] pt-14 text-[#C9D2C4]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9A441] text-white"><Sprout className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? firm.name : firm.nameHi}</span>
          </div>
          <p className="text-sm text-[#A8B4A1]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#D9A441]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#A8B4A1]">
            <li>{lang === "en" ? firm.address : firm.addressHi}</li>
            <li><a href={`tel:${firm.phoneRaw}`} className="hover:text-[#D9A441]">{firm.phone}</a></li>
            <li>{firm.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#A8B4A1]">
            {firm.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-extrabold text-[#DCE5DA]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#8A937F]">
        © {new Date().getFullYear()} {firm.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-[2rem] bg-white p-6 shadow-md sm:p-8",
  label: "mb-1.5 block text-sm font-extrabold text-[#3E4A42]",
  input: "w-full rounded-2xl border-2 border-[#E5E0D3] bg-[#FDFBF7] px-4 py-2.5 text-[#3E4A42] outline-none transition-colors placeholder:text-[#B5AE9C] focus:border-[#5F7F6A]",
  select: "w-full rounded-2xl border-2 border-[#E5E0D3] bg-[#FDFBF7] px-4 py-2.5 text-[#3E4A42] outline-none focus:border-[#5F7F6A]",
  dayBtn: "rounded-2xl border-2 border-[#E5E0D3] bg-white py-2 text-center text-[#6B7568] transition-colors hover:border-[#D9A441]",
  dayBtnActive: "rounded-2xl border-2 border-[#D9A441] bg-[#D9A441] py-2 text-center text-white shadow-md shadow-amber-600/20",
  slotBtn: "rounded-full border-2 border-[#E5E0D3] bg-white px-4 py-2 text-sm font-bold text-[#6B7568] transition-colors hover:border-[#5F7F6A]",
  slotBtnActive: "rounded-full border-2 border-[#5F7F6A] bg-[#5F7F6A] px-4 py-2 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-extrabold uppercase tracking-wider text-[#B5AE9C]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-extrabold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600",
};
