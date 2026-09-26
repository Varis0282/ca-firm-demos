"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { team } from "@/lib/content";
import { BASE, FadeIn, PageHero, TeamCard, CTABand } from "../_ui";

export default function Team() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.teamTitle} sub={t.sections.teamSub} />
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((_, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <TeamCard i={i} detailed />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <Link href={`${BASE}/contact#book`} className="rounded-xl bg-gradient-to-r from-[#4338CA] to-[#6D28D9] px-8 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/30">
              {t.nav.book} →
            </Link>
          </FadeIn>
        </div>
      </section>
      <CTABand />
    </>
  );
}
