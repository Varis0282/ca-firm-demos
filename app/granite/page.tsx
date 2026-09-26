"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { services, whyUs, reviews, industries } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, LIGHT, STEEL, HAIR, Eyebrow, SectionHead, Stars, StatsBand, TeamCard, IndustryRow, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className={`border-b ${HAIR}`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>{t.hero.badge}</Eyebrow>
            <h1 className={`text-4xl font-bold leading-tight md:text-6xl ${LIGHT}`}>
              {t.hero.title} <span className={STEEL}>{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#8A96A3]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="bg-[#8FB6D9] px-8 py-3.5 font-bold text-[#14171C] transition-colors hover:bg-[#A9C8E4]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${firm.phoneRaw}`} className={`flex items-center gap-2 border ${HAIR} px-8 py-3.5 font-bold ${LIGHT} transition-colors hover:border-[#8FB6D9]`}>
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
            <div className={`mt-10 grid grid-cols-3 divide-x divide-[#2A313B] border ${HAIR}`}>
              {[
                { v: "18+", l: lang === "en" ? "Years" : "वर्ष" },
                { v: "2,000+", l: lang === "en" ? "Clients" : "क्लाइंट्स" },
                { v: "0", l: lang === "en" ? "Missed deadlines" : "चूकी डेडलाइन" },
              ].map((s) => (
                <div key={s.l} className="p-4 text-center">
                  <p className={`text-2xl font-bold ${STEEL}`}>{s.v}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5C6B7A]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`border ${HAIR} p-3`}>
            <img src={img.heroAlt} alt="Financial documents and analysis at Mehta & Associates" className="w-full object-cover grayscale-[35%]" />
          </div>
        </div>
      </section>

      {/* SERVICES — numbered rows */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className={`border ${HAIR}`}>
            {services.map((s, i) => {
              const d = pick(s, lang);
              return (
                <Link key={s.icon} href={`${BASE}/services`} className={`group grid grid-cols-[auto_auto_1fr_auto] items-center gap-5 px-6 py-5 transition-colors hover:bg-[#171B21] ${i > 0 ? `border-t ${HAIR}` : ""}`}>
                  <span className="w-10 text-sm font-semibold text-[#5C6B7A]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-10 w-10 items-center justify-center border border-[#2A313B] text-[#8FB6D9]">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className={`block font-bold ${LIGHT}`}>{d.title}</span>
                    <span className="mt-0.5 hidden text-sm text-[#8A96A3] sm:block">{d.desc}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#5C6B7A] transition-all group-hover:translate-x-1 group-hover:text-[#8FB6D9]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <StatsBand />

      {/* WHY US — hairline grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className={`grid gap-px border ${HAIR} bg-[#2A313B] sm:grid-cols-2 lg:grid-cols-4`}>
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="bg-[#14171C] p-7">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center border border-[#2A313B] text-[#8FB6D9]">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className={`font-bold ${LIGHT}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A96A3]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLAIM */}
      <section className={`border-y ${HAIR} bg-[#171B21] py-14`}>
        <div className="mx-auto max-w-6xl px-4">
          <p className={`text-2xl font-bold md:text-3xl ${LIGHT}`}>
            <span className={STEEL}>{t.sections.claimTitle}</span>
          </p>
          <p className="mt-2 text-[#8A96A3]">{t.sections.claimSub}</p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.clients} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
          <div className={`grid gap-px border ${HAIR} bg-[#2A313B] sm:grid-cols-2 lg:grid-cols-3`}>
            {industries.map((_, i) => (
              <IndustryRow key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={`border-t ${HAIR} py-20`}>
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
      <section className={`border-t ${HAIR} bg-[#171B21] py-20`}>
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.9 / 5" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className={`grid gap-px border ${HAIR} bg-[#2A313B] md:grid-cols-3`}>
            {reviews.slice(0, 3).map((r) => (
              <div key={r.name} className="bg-[#14171C] p-7">
                <Stars n={r.stars} />
                <p className="mt-4 text-sm leading-relaxed text-[#8A96A3]">&ldquo;{r[lang]}&rdquo;</p>
                <p className={`mt-5 font-bold ${LIGHT}`}>{r.name}</p>
                <p className="text-xs text-[#5C6B7A]">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
