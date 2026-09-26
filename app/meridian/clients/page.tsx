"use client";

import { useLang } from "@/lib/lang";
import { industries, reviews } from "@/lib/content";
import { PageHero, SectionHead, FadeIn, INK, IndustryCard, Stars, CTABand, StatsBand } from "../_ui";

export default function Clients() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
      <section className="px-4 pb-12">
        <FadeIn className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-indigo-50 to-violet-50 p-8 text-center md:p-10">
          <h2 className={`text-2xl font-bold md:text-3xl ${INK}`}>{t.sections.claimTitle}</h2>
          <p className="mt-2 text-slate-500">{t.sections.claimSub}</p>
        </FadeIn>
      </section>
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((_, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <IndustryCard i={i} />
            </FadeIn>
          ))}
        </div>
      </section>
      <StatsBand />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.9" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.05}>
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
      <CTABand />
    </>
  );
}
