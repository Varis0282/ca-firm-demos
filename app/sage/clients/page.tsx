"use client";

import { useLang } from "@/lib/lang";
import { industries, reviews } from "@/lib/content";
import { PageHero, SectionHead, DARK, IndustryCard, Stars, CTABand, StatsBand } from "../_ui";

export default function Clients() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#F4E6C8] p-8 text-center md:p-10">
          <h2 className={`text-2xl font-extrabold md:text-3xl ${DARK}`}>{t.sections.claimTitle}</h2>
          <p className="mt-2 font-semibold text-[#8A6D3B]">{t.sections.claimSub}</p>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((_, i) => (
            <IndustryCard key={i} i={i} />
          ))}
        </div>
      </section>
      <StatsBand />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.9" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className={`rounded-[2rem] bg-[#FAF6EF] p-6 shadow-sm ${i % 2 ? "-rotate-1" : "rotate-1"} transition-transform hover:rotate-0`}>
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-[#6B7568]">&ldquo;{r[lang]}&rdquo;</p>
                <p className={`mt-4 font-extrabold ${DARK}`}>{r.name}</p>
                <p className="text-xs text-[#8A937F]">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
