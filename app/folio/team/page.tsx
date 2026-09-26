"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { team } from "@/lib/content";
import { BASE, PageHero, TeamRow, CTABand } from "../_ui";

export default function Team() {
  const { t } = useLang();
  return (
    <>
      <PageHero kicker={t.nav.team} title={t.sections.teamTitle} sub={t.sections.teamSub} />
      <section className="mx-auto max-w-6xl px-4 pb-16">
        {team.map((_, i) => (
          <TeamRow key={i} i={i} detailed />
        ))}
        <div className="mt-12">
          <Link href={`${BASE}/contact#book`} className="inline-block bg-[#7C2D3E] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#5E2230]">
            {t.nav.book} →
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
