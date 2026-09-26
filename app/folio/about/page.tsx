"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, INKB, OX, DISPLAY, Num, StatsRow, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero kicker={t.nav.about} title={a.title} sub={a.sub} />
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-[#5A5A5A]">
            <p><span className={`float-left mr-3 text-6xl font-medium leading-[0.85] ${OX} ${DISPLAY}`}>{a.story1.charAt(0)}</span>{a.story1.slice(1)}</p>
            <p>{a.story2}</p>
            <p className={`border-l-4 border-[#7C2D3E] pl-6 text-xl ${INKB} ${DISPLAY}`}>{a.story3}</p>
          </div>
          <img src={img.about} alt="Partners of Mehta & Associates" className="h-full max-h-[560px] w-full object-cover grayscale" />
        </div>
      </section>
      <section className="bg-[#111111] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C98A99]">{a.missionTitle}</p>
          <p className={`max-w-4xl text-3xl font-medium leading-snug md:text-5xl ${DISPLAY}`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead n={1} title={lang === "en" ? "How We Work" : "हम कैसे काम करते हैं"} />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {a.values.map((v, i) => (
            <div key={v.title} className="flex gap-6">
              <Num n={i + 1} />
              <div>
                <h3 className={`text-2xl font-medium ${INKB} ${DISPLAY}`}>{v.title}</h3>
                <p className="mt-2 max-w-md text-[#6E6E6E]">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <StatsRow />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <SectionHead n={2} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-px bg-[#E5E5E5] md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`Office photo ${i + 1}`} className="h-44 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-60" />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
