"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, LIGHT, HAIR, PageHero, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-20">
        <div className={`mx-auto max-w-6xl border ${HAIR} px-0 md:mx-4 lg:mx-auto`}>
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <div key={s.icon} className={`grid gap-5 p-7 transition-colors hover:bg-[#171B21] md:grid-cols-[auto_auto_1fr_auto] md:items-center ${i > 0 ? `border-t ${HAIR}` : ""}`}>
                <span className="text-sm font-semibold text-[#5C6B7A]">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex h-12 w-12 items-center justify-center border border-[#2A313B] text-[#8FB6D9]">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className={`text-xl font-bold ${LIGHT}`}>{d.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-[#8A96A3]">{d.desc}</p>
                </div>
                <Link href={`${BASE}/contact#book`} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#8FB6D9] hover:underline">
                  {t.misc.bookWith} <ArrowRight className="h-4 w-4" />
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
