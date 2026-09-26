"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { firm } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, DARK, GREEN, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
          <div id="book" className="scroll-mt-28 lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-4 lg:col-span-2">
            <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E4EDE1] text-[#5F7F6A]"><MapPin className="h-5 w-5" /></span>
              <div>
                <h3 className={`font-extrabold ${DARK}`}>{t.sections.visitTitle}</h3>
                <p className="mt-1 text-sm text-[#6B7568]">{lang === "en" ? firm.address : firm.addressHi}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4E6C8] text-[#B07E1F]"><Phone className="h-5 w-5" /></span>
              <div>
                <h3 className={`font-extrabold ${DARK}`}>{b.call}</h3>
                <a href={`tel:${firm.phoneRaw}`} className={`mt-1 block text-sm font-extrabold ${GREEN} hover:underline`}>{firm.phone}</a>
              </div>
            </div>
            <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E0E8E9] text-[#4E7A82]"><Mail className="h-5 w-5" /></span>
              <div>
                <h3 className={`font-extrabold ${DARK}`}>Email</h3>
                <p className="mt-1 text-sm text-[#6B7568]">{firm.email}</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-5 shadow-sm">
              <h3 className={`mb-2 flex items-center gap-2 font-extrabold ${DARK}`}><Clock className="h-4 w-4 text-[#D9A441]" /> {t.footer.hours}</h3>
              {firm.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#6B7568]"><span className={`font-extrabold ${DARK}`}>{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
            <div className="rounded-[2rem] bg-[#5F7F6A] p-5 text-white">
              <p className="text-sm font-extrabold text-[#F4E6C8]">{t.misc.emergency}</p>
              <a href={`tel:${firm.phoneRaw}`} className="mt-1 block text-xl font-extrabold">{firm.phone}</a>
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
