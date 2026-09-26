"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { team } from "@/lib/content";
import { BASE, PageHero, TeamCard, CTABand } from "../_ui";

export default function Team() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.team} title={t.sections.teamTitle} sub={t.sections.teamSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((_, i) => (
              <TeamCard key={i} i={i} detailed />
            ))}
          </div>
          <div className="mt-12">
            <Link href={`${BASE}/contact`} className="inline-block bg-[#8FB6D9] px-8 py-3.5 font-bold text-[#14171C] transition-colors hover:bg-[#A9C8E4]">
              {t.nav.book} →
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
