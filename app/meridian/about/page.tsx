"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, FadeIn, INK, INDIGO, CTABand, StatsBand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <FadeIn className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`rounded-2xl bg-indigo-50 p-5 font-medium ${INK}`}>{a.story3}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img src={img.about} alt="Partners of Mehta & Associates" className="w-full rounded-3xl object-cover shadow-2xl shadow-indigo-900/20" />
          </FadeIn>
        </div>
      </section>
      <section className="px-4 py-12">
        <FadeIn className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#312E81] to-[#6D28D9] p-10 text-center text-white shadow-2xl md:p-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">{a.missionTitle}</p>
          <p className="text-2xl font-bold leading-relaxed md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
        </FadeIn>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={lang === "en" ? "How We Work" : "हम कैसे काम करते हैं"} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06} className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-indigo-900/5 backdrop-blur">
                <p className={`mb-3 text-3xl font-bold ${INDIGO}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`font-bold ${INK}`}>{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{v.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <FadeIn key={g} delay={i * 0.04}>
                <img src={g} alt={`Office photo ${i + 1}`} className="h-44 w-full rounded-2xl object-cover transition-transform hover:scale-[1.03] md:h-56" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
