"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { PageHero, SectionHead, SERIF, TEAL, CTABand, StatsBand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`border-l-4 border-[#C99846] pl-4 font-medium text-[#155263]`}>{a.story3}</p>
          </div>
          <div className="relative">
            <img src={img.about} alt="Partners of Mehta & Associates" className="w-full rounded-lg border-8 border-white object-cover shadow-2xl" />
            <img src={img.docs} alt="Tax documents on desk" className="absolute -bottom-10 -left-6 hidden w-48 rounded-lg border-4 border-white object-cover shadow-xl md:block" />
          </div>
        </div>
      </section>
      <section className="bg-[#C99846]/10 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C99846]">{a.missionTitle}</p>
          <p className={`text-2xl font-bold leading-relaxed text-[#155263] md:text-3xl ${SERIF}`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={lang === "en" ? "How We Work" : "हम कैसे काम करते हैं"} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className={`mb-3 text-3xl font-bold text-[#C99846] ${SERIF}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`font-bold ${TEAL}`}>{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Office photo ${i + 1}`} className="h-44 w-full rounded-lg object-cover transition-transform hover:scale-[1.03] md:h-56" />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
