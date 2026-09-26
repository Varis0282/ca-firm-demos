"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, LIGHT, STEEL, HAIR, CTABand, StatsBand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero eyebrow={t.nav.about} title={a.title} sub={a.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-[#8A96A3]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`border-l-2 border-[#8FB6D9] pl-5 font-medium ${LIGHT}`}>{a.story3}</p>
          </div>
          <div className={`border ${HAIR} p-3`}>
            <img src={img.about} alt="Partners of Mehta & Associates" className="w-full object-cover grayscale-[35%]" />
          </div>
        </div>
      </section>
      <section className={`border-y ${HAIR} bg-[#171B21] py-16`}>
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8FB6D9]">{a.missionTitle}</p>
          <p className={`text-2xl font-bold leading-relaxed md:text-3xl ${LIGHT}`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={lang === "en" ? "How We Work" : "हम कैसे काम करते हैं"} />
          <div className={`grid gap-px border ${HAIR} bg-[#2A313B] sm:grid-cols-2 lg:grid-cols-4`}>
            {a.values.map((v, i) => (
              <div key={v.title} className="bg-[#14171C] p-7">
                <p className={`mb-4 text-3xl font-bold ${STEEL}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`font-bold ${LIGHT}`}>{v.title}</h3>
                <p className="mt-2 text-sm text-[#8A96A3]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px bg-[#2A313B] md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Office photo ${i + 1}`} className="h-44 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-56" />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
