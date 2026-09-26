"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, DARK, GREEN, Blob, CTABand, StatsBand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="relative overflow-hidden py-12">
        <Blob className="-right-24 top-24 h-72 w-72 bg-[#E4EDE1]/70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-[#6B7568]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`rounded-[1.5rem] bg-[#E4EDE1] p-5 font-bold ${DARK}`}>{a.story3}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -rotate-2 rounded-[2.5rem] bg-[#F4E6C8]" aria-hidden />
            <img src={img.about} alt="Our partners with a client" className="relative w-full rounded-[2rem] object-cover shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-[#D9A441]">{a.missionTitle}</p>
          <p className={`text-2xl font-extrabold leading-relaxed md:text-3xl ${GREEN}`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={lang === "en" ? "How We Work" : "हम कैसे काम करते हैं"} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className={`rounded-[2rem] p-6 ${["bg-[#E4EDE1]", "bg-[#F4E6C8]", "bg-[#E0E8E9]", "bg-[#EBE3D2]"][i % 4]}`}>
                <p className={`mb-3 text-3xl font-extrabold ${DARK}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`font-extrabold ${DARK}`}>{v.title}</h3>
                <p className="mt-2 text-sm text-[#5C6658]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Office photo ${i + 1}`} className={`h-44 w-full rounded-[1.5rem] object-cover transition-all hover:rotate-0 hover:scale-[1.03] md:h-56 ${i % 2 ? "-rotate-1" : "rotate-1"}`} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
