"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { firm } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, TEAL, SERIF, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-5 lg:col-span-2">
            <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#155263]/5 text-[#155263]"><MapPin className="h-5 w-5" /></span>
              <div>
                <h3 className={`font-bold ${TEAL} ${SERIF}`}>{t.sections.visitTitle}</h3>
                <p className="mt-1 text-sm text-slate-600">{lang === "en" ? firm.address : firm.addressHi}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#155263]/5 text-[#155263]"><Phone className="h-5 w-5" /></span>
              <div>
                <h3 className={`font-bold ${TEAL} ${SERIF}`}>{b.call}</h3>
                <a href={`tel:${firm.phoneRaw}`} className="mt-1 block text-sm font-semibold text-[#C99846] hover:underline">{firm.phone}</a>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#155263]/5 text-[#155263]"><Mail className="h-5 w-5" /></span>
              <div>
                <h3 className={`font-bold ${TEAL} ${SERIF}`}>Email</h3>
                <p className="mt-1 text-sm text-slate-600">{firm.email}</p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className={`mb-2 flex items-center gap-2 font-bold ${TEAL} ${SERIF}`}><Clock className="h-4 w-4 text-[#C99846]" /> {t.footer.hours}</h3>
              {firm.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-slate-600"><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
            <div className="rounded-lg bg-[#155263] p-5 text-white">
              <p className="text-sm font-semibold text-[#C99846]">{t.misc.emergency}</p>
              <a href={`tel:${firm.phoneRaw}`} className={`mt-1 block text-xl font-bold ${SERIF}`}>{firm.phone}</a>
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
