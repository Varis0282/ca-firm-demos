"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import { BASE, INKB, OX, DISPLAY, Num, PageHero, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="mx-auto max-w-6xl px-4 pb-24">
        {services.map((s, i) => {
          const d = pick(s, lang);
          return (
            <div key={s.icon} className="grid gap-4 border-b border-[#E5E5E5] py-10 md:grid-cols-[auto_320px_1fr_auto] md:items-baseline md:gap-10">
              <Num n={i + 1} />
              <h2 className={`text-2xl font-medium md:text-3xl ${INKB} ${DISPLAY}`}>{d.title}</h2>
              <p className="leading-relaxed text-[#6E6E6E]">{d.desc}</p>
              <Link href={`${BASE}/contact`} className={`inline-flex items-center gap-1 font-semibold ${OX} underline underline-offset-4 hover:no-underline`}>
                {t.misc.bookWith} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </section>
      <CTABand />
    </>
  );
}
