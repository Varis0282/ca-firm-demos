"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, TEAL, SERIF, PageHero, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-6 px-4">
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <div key={s.icon} className="group grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#C99846] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-md bg-[#155263] text-[#C99846]">
                  <Icon name={s.icon} className="h-8 w-8" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99846]">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className={`mt-1 text-xl font-bold ${TEAL} ${SERIF}`}>{d.title}</h2>
                  <p className="mt-2 max-w-2xl text-slate-600">{d.desc}</p>
                </div>
                <Link href={`${BASE}/contact#book`} className="justify-self-start rounded-md border-2 border-[#155263] px-5 py-2 text-sm font-bold text-[#155263] transition-colors hover:bg-[#155263] hover:text-white sm:justify-self-end">
                  {t.misc.bookWith} →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
