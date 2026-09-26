"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, INK, FadeIn, PageHero, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2">
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <FadeIn key={s.icon} delay={i * 0.04}>
                <motion.div whileHover={{ y: -5 }} className="flex h-full gap-5 rounded-3xl border border-white/70 bg-white/80 p-7 shadow-lg shadow-indigo-900/5 backdrop-blur">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4338CA] to-[#818CF8] text-white">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className={`text-lg font-bold ${INK}`}>{d.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
                    <Link href={`${BASE}/contact#book`} className="mt-3 inline-block text-sm font-bold text-[#4338CA] hover:text-[#6D28D9]">
                      {t.misc.bookWith} →
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
