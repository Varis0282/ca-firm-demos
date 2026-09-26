"use client";

import { useLang } from "@/lib/lang";
import { industries, reviews } from "@/lib/content";
import { PageHero, SectionHead, LIGHT, STEEL, HAIR, IndustryRow, Stars, CTABand, StatsBand } from "../_ui";

export default function Clients() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.clients} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
      <section className={`border-b ${HAIR} bg-[#171B21] py-14`}>
        <div className="mx-auto max-w-6xl px-4">
          <p className={`text-2xl font-bold md:text-3xl ${STEEL}`}>{t.sections.claimTitle}</p>
          <p className="mt-2 text-[#8A96A3]">{t.sections.claimSub}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className={`grid gap-px border ${HAIR} bg-[#2A313B] sm:grid-cols-2 lg:grid-cols-3`}>
            {industries.map((_, i) => (
              <IndustryRow key={i} i={i} />
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.9 / 5" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className={`grid gap-px border ${HAIR} bg-[#2A313B] md:grid-cols-2 lg:grid-cols-3`}>
            {reviews.map((r) => (
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
      <CTABand />
    </>
  );
}
