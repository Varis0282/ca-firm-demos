"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { services, whyUs, reviews, industries } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, TEAL, SERIF, SectionHead, Stars, StatsBand, TeamCard, IndustryCard, FAQList, MapBlock, CTABand, TrustPoint } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#EDF3F5] to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C99846]/40 bg-white px-4 py-1.5 text-sm font-semibold text-[#155263] shadow-sm">
              <span className="h-2 w-2 animate-pulseSoft rounded-full bg-[#C99846]" /> {t.hero.badge}
            </span>
            <h1 className={`mt-5 text-4xl font-bold leading-tight text-[#155263] md:text-5xl ${SERIF}`}>
              {t.hero.title} <span className="text-[#C99846]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="rounded-md bg-[#C99846] px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-700/25 transition-colors hover:bg-[#b3833a]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 rounded-md border-2 border-[#155263] px-7 py-3.5 font-bold text-[#155263] transition-colors hover:bg-[#155263] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {whyUs.slice(0, 3).map((w) => (
                <TrustPoint key={w.icon} text={pick(w, lang).title} />
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Mehta & Associates office in Indore" className="w-full rounded-lg border-8 border-white object-cover shadow-2xl" />
            <div className="absolute -bottom-5 left-6 rounded-md border-l-4 border-[#C99846] bg-white px-5 py-3 shadow-xl">
              <p className={`text-2xl font-bold text-[#155263] ${SERIF}`}>18+</p>
              <p className="text-xs font-semibold text-slate-500">{lang === "en" ? "Years of practice" : "वर्षों की प्रैक्टिस"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* SERVICES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.icon} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C99846] hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#155263] text-[#C99846] transition-colors group-hover:bg-[#C99846] group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className={`font-bold ${TEAL}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/services`} className="font-bold text-[#155263] underline decoration-[#C99846] decoration-2 underline-offset-4 hover:text-[#C99846]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-lg border-t-4 border-[#C99846] bg-slate-50 p-6 text-center">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#155263] text-[#C99846]">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className={`font-bold ${TEAL}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLAIM BAND */}
      <section className="bg-[#C99846]/10 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className={`text-2xl font-bold text-[#155263] md:text-3xl ${SERIF}`}>{t.sections.claimTitle}</h2>
          <p className="mt-2 text-slate-600">{t.sections.claimSub}</p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.clients} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((_, i) => (
              <IndustryCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.team} title={t.sections.teamTitle} sub={t.sections.teamSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <TeamCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#155263] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead light eyebrow="4.9" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.name} className="rounded-lg bg-white p-6 shadow-lg">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-slate-600">&ldquo;{r[lang]}&rdquo;</p>
                <p className={`mt-4 font-bold ${TEAL}`}>{r.name}</p>
                <p className="text-xs text-slate-400">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
