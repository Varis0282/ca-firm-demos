"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { firm } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, INKB, OX, DISPLAY, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero kicker={t.nav.contact} title={b.title} sub={b.sub} />
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div id="book" className="scroll-mt-28 lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-8 lg:col-span-2">
            <div className="flex gap-4 border-t-2 border-[#111111] pt-5">
              <MapPin className={`h-5 w-5 shrink-0 ${OX}`} />
              <div>
                <h3 className={`text-xl font-medium ${INKB} ${DISPLAY}`}>{t.sections.visitTitle}</h3>
                <p className="mt-1 text-sm text-[#6E6E6E]">{lang === "en" ? firm.address : firm.addressHi}</p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-[#E5E5E5] pt-5">
              <Phone className={`h-5 w-5 shrink-0 ${OX}`} />
              <div>
                <h3 className={`text-xl font-medium ${INKB} ${DISPLAY}`}>{b.call}</h3>
                <a href={`tel:${firm.phoneRaw}`} className={`mt-1 block font-semibold ${OX} underline underline-offset-4 hover:no-underline`}>{firm.phone}</a>
              </div>
            </div>
            <div className="flex gap-4 border-t border-[#E5E5E5] pt-5">
              <Mail className={`h-5 w-5 shrink-0 ${OX}`} />
              <div>
                <h3 className={`text-xl font-medium ${INKB} ${DISPLAY}`}>Email</h3>
                <p className="mt-1 text-sm text-[#6E6E6E]">{firm.email}</p>
              </div>
            </div>
            <div className="flex gap-4 border-t border-[#E5E5E5] pt-5">
              <Clock className={`h-5 w-5 shrink-0 ${OX}`} />
              <div>
                <h3 className={`text-xl font-medium ${INKB} ${DISPLAY}`}>{t.footer.hours}</h3>
                {firm.timings[lang].map((tm) => (
                  <p key={tm.days} className="mt-1 text-sm text-[#6E6E6E]"><span className={`font-semibold ${INKB}`}>{tm.days}:</span> {tm.hours}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C98A99]">{t.misc.emergency}</p>
              <a href={`tel:${firm.phoneRaw}`} className={`mt-2 block text-2xl font-medium ${DISPLAY}`}>{firm.phone}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <MapBlock />
      </section>
    </>
  );
}
