"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { services, whyUs, reviews, industries } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, INK, INDIGO, FadeIn, SectionHead, Stars, StatsBand, TeamCard, IndustryCard, FAQList, MapBlock, CTABand, TrustPoint } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-medium text-[#4338CA] shadow-sm">
              <span className="h-2 w-2 animate-pulseSoft rounded-full bg-[#4338CA]" /> {t.hero.badge}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={`mt-6 text-4xl font-bold leading-tight md:text-6xl ${INK}`}>
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-[#4338CA] to-[#8B5CF6] bg-clip-text text-transparent">{t.hero.titleAccent}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-lg text-lg text-slate-500">
              {t.hero.sub}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="rounded-xl bg-gradient-to-r from-[#4338CA] to-[#6D28D9] px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-700 transition-colors hover:border-[#4338CA] hover:text-[#4338CA]">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {whyUs.slice(0, 3).map((w) => (
                <TrustPoint key={w.icon} text={pick(w, lang).title} />
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
            <img src={img.hero} alt="Mehta & Associates office" className="w-full rounded-3xl object-cover shadow-2xl shadow-indigo-900/20" />
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -bottom-6 left-6 rounded-2xl border border-white/70 bg-white/90 px-5 py-3 shadow-xl backdrop-blur">
              <p className={`text-2xl font-bold ${INDIGO}`}>0</p>
              <p className="text-xs font-medium text-slate-500">{lang === "en" ? "Missed deadlines since 2007" : "2007 से चूकी डेडलाइन"}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsBand />

      {/* SERVICES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const d = pick(s, lang);
              return (
                <FadeIn key={s.icon} delay={i * 0.05}>
                  <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-indigo-900/5 backdrop-blur">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4338CA] to-[#818CF8] text-white">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h3 className={`font-bold ${INK}`}>{d.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{d.desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/services`} className={`font-bold ${INDIGO} underline decoration-2 underline-offset-4 hover:text-[#6D28D9]`}>
              {t.misc.viewAll} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <FadeIn key={w.icon} delay={i * 0.06} className="rounded-2xl bg-gradient-to-b from-indigo-50 to-white p-6 text-center">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#4338CA] shadow-md">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className={`font-bold ${INK}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{d.desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.clients} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((_, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <IndustryCard i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.team} title={t.sections.teamTitle} sub={t.sections.teamSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <TeamCard i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.9" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-indigo-900/5 backdrop-blur">
                  <Stars n={r.stars} />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">&ldquo;{r[lang]}&rdquo;</p>
                  <p className={`mt-4 font-bold ${INK}`}>{r.name}</p>
                  <p className="text-xs text-slate-400">{r.area}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
