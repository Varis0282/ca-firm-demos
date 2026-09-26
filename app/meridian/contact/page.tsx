"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { firm } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, FadeIn, INK, INDIGO, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  const cards = [
    { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? firm.address : firm.addressHi },
    { icon: Phone, title: b.call, body: firm.phone, href: `tel:${firm.phoneRaw}` },
    { icon: Mail, title: "Email", body: firm.email },
  ];
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="pb-16">
        <div id="book" className="scroll-mt-28 mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </FadeIn>
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-indigo-900/5 backdrop-blur">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#4338CA]"><c.icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className={`font-bold ${INK}`}>{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className={`mt-1 block text-sm font-semibold ${INDIGO} hover:underline`}>{c.body}</a>
                    ) : (
                      <p className="mt-1 text-sm text-slate-600">{c.body}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-indigo-900/5 backdrop-blur">
                <h3 className={`mb-2 flex items-center gap-2 font-bold ${INK}`}><Clock className={`h-4 w-4 ${INDIGO}`} /> {t.footer.hours}</h3>
                {firm.timings[lang].map((tm) => (
                  <p key={tm.days} className="text-sm text-slate-600"><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="rounded-2xl bg-gradient-to-br from-[#312E81] to-[#6D28D9] p-5 text-white shadow-xl">
                <p className="text-sm font-semibold text-indigo-200">{t.misc.emergency}</p>
                <a href={`tel:${firm.phoneRaw}`} className="mt-1 block text-xl font-bold">{firm.phone}</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
