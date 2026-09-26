"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { firm, img } from "@/lib/config";
import { services, whyUs, reviews, industries } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, DARK, GREEN, Blob, Squiggle, SectionHead, Stars, StatsBand, TeamCard, IndustryCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blob className="-left-24 -top-20 h-96 w-96 bg-[#E4EDE1]" />
        <Blob className="-right-24 top-32 h-80 w-80 bg-[#F4E6C8]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E4EDE1] px-4 py-1.5 text-sm font-extrabold text-[#5F7F6A]">
              {t.hero.badge}
            </span>
            <h1 className={`mt-5 text-4xl font-extrabold leading-tight md:text-5xl ${DARK}`}>
              {t.hero.title}{" "}
              <span className="relative inline-block text-[#5F7F6A]">
                {t.hero.titleAccent}
                <Squiggle className="absolute -bottom-2 left-0 w-full" />
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#6B7568]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#D9A441] px-8 py-3.5 font-extrabold text-white shadow-lg shadow-amber-600/25 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${firm.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#5F7F6A] px-8 py-3.5 font-extrabold text-[#5F7F6A] transition-colors hover:bg-[#5F7F6A] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-[#D6E2D2]" aria-hidden />
            <img src={img.aboutAlt} alt="A warm handshake with our client" className="relative w-full rounded-[2rem] object-cover shadow-lg" />
            <div className="absolute -bottom-6 right-6 -rotate-2 rounded-[1.5rem] bg-white px-5 py-3 shadow-xl">
              <p className={`text-2xl font-extrabold ${GREEN}`}>2,000+</p>
              <p className="text-xs font-bold text-[#8A937F]">{lang === "en" ? "Families & businesses" : "परिवार व व्यापार"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* SERVICES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const d = pick(s, lang);
              return (
                <div key={s.icon} className="group rounded-[2rem] bg-white p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-md">
                  <span className={`mb-4 flex h-13 w-13 h-12 w-12 items-center justify-center rounded-2xl ${["bg-[#E4EDE1] text-[#5F7F6A]", "bg-[#F4E6C8] text-[#B07E1F]", "bg-[#E0E8E9] text-[#4E7A82]", "bg-[#EBE3D2] text-[#8A6D3B]"][i % 4]}`}>
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className={`font-extrabold ${DARK}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-[#6B7568]">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/services`} className="font-extrabold text-[#5F7F6A] underline decoration-[#D9A441] decoration-4 underline-offset-8 hover:text-[#D9A441]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-white py-16">
        <Blob className="-right-24 top-8 h-64 w-64 bg-[#F4E6C8]/60" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="+" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-[2rem] border-2 border-dashed border-[#5F7F6A]/25 p-6 text-center transition-colors hover:border-[#D9A441]">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#5F7F6A] text-white">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className={`font-extrabold ${DARK}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-[#6B7568]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLAIM */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-[2.5rem] bg-[#F4E6C8] p-8 text-center md:p-10">
            <h2 className={`text-2xl font-extrabold md:text-3xl ${DARK}`}>{t.sections.claimTitle}</h2>
            <p className="mt-2 font-semibold text-[#8A6D3B]">{t.sections.claimSub}</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.clients} title={t.sections.industriesTitle} sub={t.sections.industriesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((_, i) => (
              <IndustryCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.team} title={t.sections.teamTitle} sub={t.sections.teamSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <TeamCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#5F7F6A] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead light eyebrow="4.9" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={r.name} className={`rounded-[2rem] bg-[#FAF6EF] p-6 shadow-lg ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-[#6B7568]">&ldquo;{r[lang]}&rdquo;</p>
                <p className={`mt-4 font-extrabold ${DARK}`}>{r.name}</p>
                <p className="text-xs text-[#8A937F]">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
