"use client";

import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { services, whyUs, reviews, industries } from "@/lib/content";
import { BASE, INKB, OX, DISPLAY, Num, SectionHead, Stars, StatsRow, TeamRow, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#7C2D3E]">{t.hero.badge}</p>
        <h1 className={`max-w-5xl text-5xl font-medium leading-[1.02] md:text-8xl ${INKB} ${DISPLAY}`}>
          {t.hero.title} <em className={OX}>{t.hero.titleAccent}</em>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-[#6E6E6E]">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`${BASE}/contact#book`} className="bg-[#7C2D3E] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#5E2230]">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#111111] px-8 py-4 font-semibold text-[#111111] transition-colors hover:bg-[#111111] hover:text-white">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
        <img src={img.hero} alt="Mehta & Associates office" className="mt-12 h-72 w-full object-cover grayscale md:h-[460px]" />
        <div className="mt-12">
          <StatsRow />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead n={1} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
        <div>
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <Link key={s.icon} href={`${BASE}/services`} className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-t border-[#E5E5E5] py-5 transition-colors hover:bg-[#FAF7F5]">
                <Num n={i + 1} />
                <div className="md:flex md:items-baseline md:gap-8">
                  <h3 className={`text-xl font-medium md:w-72 md:shrink-0 ${INKB}`}>{d.title}</h3>
                  <p className="mt-1 hidden text-sm text-[#8A8A8A] md:mt-0 md:block">{d.desc}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#C5C5C5] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7C2D3E]" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionHead n={2} title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {whyUs.map((w, i) => {
            const d = pick(w, lang);
            return (
              <div key={w.icon} className="flex gap-6">
                <Num n={i + 1} />
                <div>
                  <h3 className={`text-2xl font-medium ${INKB} ${DISPLAY}`}>{d.title}</h3>
                  <p className="mt-2 max-w-md text-[#6E6E6E]">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLAIM */}
      <section className="bg-[#7C2D3E] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className={`max-w-4xl text-3xl font-medium leading-snug md:text-5xl ${DISPLAY}`}>{t.sections.claimTitle}</p>
          <p className="mt-3 text-white/70">{t.sections.claimSub}</p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead n={3} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
        <div className="grid gap-px border border-[#E5E5E5] bg-[#E5E5E5] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => {
            const d = pick(item, lang);
            return (
              <div key={i} className="bg-white p-7">
                <Num n={i + 1} />
                <h3 className={`mt-3 text-xl font-medium ${INKB} ${DISPLAY}`}>{d.title}</h3>
                <p className="mt-2 text-sm text-[#6E6E6E]">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionHead n={4} title={t.sections.teamTitle} sub={t.sections.teamSub} />
        {[0, 1, 2, 3].map((i) => (
          <TeamRow key={i} i={i} />
        ))}
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionHead n={5} title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="grid gap-10 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <figure key={r.name}>
              <Stars n={r.stars} />
              <blockquote className={`mt-4 text-xl leading-relaxed ${INKB} ${DISPLAY}`}>&ldquo;{r[lang]}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className={`font-semibold ${INKB}`}>{r.name}</span>
                <span className="text-[#8A8A8A]"> — {r.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionHead n={6} title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <SectionHead n={7} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </>
  );
}
