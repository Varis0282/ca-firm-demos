"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, DARK, PageHero, CTABand } from "../_ui";

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
              <div key={s.icon} className="flex h-full gap-5 rounded-[2rem] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${["bg-[#E4EDE1] text-[#5F7F6A]", "bg-[#F4E6C8] text-[#B07E1F]", "bg-[#E0E8E9] text-[#4E7A82]", "bg-[#EBE3D2] text-[#8A6D3B]"][i % 4]}`}>
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h2 className={`text-lg font-extrabold ${DARK}`}>{d.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7568]">{d.desc}</p>
                  <Link href={`${BASE}/contact`} className="mt-3 inline-block text-sm font-extrabold text-[#D9A441] hover:text-[#5F7F6A]">
                    {t.misc.bookWith} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
