"use client";

import { useLang } from "@/lib/lang";
import { industries, reviews } from "@/lib/content";
import { PageHero, SectionHead, SERIF, TEAL, IndustryCard, Stars, CTABand, StatsBand } from "../_ui";

export default function Clients() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
      <section className="bg-[#C99846]/10 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className={`text-2xl font-bold text-[#155263] md:text-3xl ${SERIF}`}>{t.sections.claimTitle}</h2>
          <p className="mt-2 text-slate-600">{t.sections.claimSub}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((_, i) => (
              <IndustryCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.9" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-slate-600">&ldquo;{r[lang]}&rdquo;</p>
                <p className={`mt-4 font-bold ${TEAL}`}>{r.name}</p>
                <p className="text-xs text-slate-400">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
