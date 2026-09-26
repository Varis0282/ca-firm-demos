"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { firm } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, LIGHT, STEEL, HAIR, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero eyebrow={t.nav.contact} title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
          <div id="book" className="scroll-mt-28 lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className={`h-fit border ${HAIR} lg:col-span-2`}>
            <div className={`flex gap-4 border-b ${HAIR} bg-[#171B21] p-6`}>
              <MapPin className={`h-5 w-5 shrink-0 ${STEEL}`} />
              <div>
                <h3 className={`font-bold ${LIGHT}`}>{t.sections.visitTitle}</h3>
                <p className="mt-1 text-sm text-[#8A96A3]">{lang === "en" ? firm.address : firm.addressHi}</p>
              </div>
            </div>
            <div className={`flex gap-4 border-b ${HAIR} bg-[#171B21] p-6`}>
              <Phone className={`h-5 w-5 shrink-0 ${STEEL}`} />
              <div>
                <h3 className={`font-bold ${LIGHT}`}>{b.call}</h3>
                <a href={`tel:${firm.phoneRaw}`} className={`mt-1 block text-sm font-semibold ${STEEL} hover:underline`}>{firm.phone}</a>
              </div>
            </div>
            <div className={`flex gap-4 border-b ${HAIR} bg-[#171B21] p-6`}>
              <Mail className={`h-5 w-5 shrink-0 ${STEEL}`} />
              <div>
                <h3 className={`font-bold ${LIGHT}`}>Email</h3>
                <p className="mt-1 text-sm text-[#8A96A3]">{firm.email}</p>
              </div>
            </div>
            <div className={`flex gap-4 border-b ${HAIR} bg-[#171B21] p-6`}>
              <Clock className={`h-5 w-5 shrink-0 ${STEEL}`} />
              <div>
                <h3 className={`font-bold ${LIGHT}`}>{t.footer.hours}</h3>
                {firm.timings[lang].map((tm) => (
                  <p key={tm.days} className="mt-1 text-sm text-[#8A96A3]"><span className={`font-semibold ${LIGHT}`}>{tm.days}:</span> {tm.hours}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#8FB6D9] p-6 text-[#14171C]">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">{t.misc.emergency}</p>
              <a href={`tel:${firm.phoneRaw}`} className="mt-1 block text-xl font-bold">{firm.phone}</a>
            </div>
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
