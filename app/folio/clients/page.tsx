"use client";

import { useLang, pick } from "@/lib/lang";
import { industries, reviews } from "@/lib/content";
import { PageHero, SectionHead, INKB, DISPLAY, Num, Stars, StatsRow, CTABand } from "../_ui";

export default function Clients() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.clients} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
      <section className="bg-[#7C2D3E] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className={`max-w-4xl text-3xl font-medium leading-snug md:text-4xl ${DISPLAY}`}>{t.sections.claimTitle}</p>
          <p className="mt-2 text-white/70">{t.sections.claimSub}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20">
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
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <StatsRow />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <SectionHead n={1} title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="border-l border-[#E5E5E5] pl-6">
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
      <CTABand />
    </>
  );
}
