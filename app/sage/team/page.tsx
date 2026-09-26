"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { team } from "@/lib/content";
import { BASE, PageHero, TeamCard, CTABand } from "../_ui";

export default function Team() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.teamTitle} sub={t.sections.teamSub} />
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2">
            {team.map((_, i) => (
              <TeamCard key={i} i={i} detailed />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`${BASE}/contact`} className="rounded-full bg-[#D9A441] px-8 py-3.5 font-extrabold text-white shadow-lg transition-transform hover:scale-105">
              {t.nav.book} →
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
