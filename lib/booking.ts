import { firm } from "./config";

export const SLOTS = {
  morning: ["11:00 AM", "11:45 AM", "12:30 PM", "01:15 PM"],
  evening: ["04:00 PM", "04:45 PM", "05:30 PM", "06:15 PM"],
};

const DAY_NAMES = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], hi: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] };
const MONTH_NAMES = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फर", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सितं", "अक्टू", "नवं", "दिसं"] };

export type BookableDay = { iso: string; day: string; dayHi: string; date: number; month: string; monthHi: string; isSunday: boolean };

/** Next 7 bookable days starting today — Sundays skipped (office closed) */
export function getNextDays(count = 7): BookableDay[] {
  const days: BookableDay[] = [];
  const now = new Date();
  for (let i = 0; days.length < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    if (d.getDay() === 0) continue;
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: DAY_NAMES.en[d.getDay()],
      dayHi: DAY_NAMES.hi[d.getDay()],
      date: d.getDate(),
      month: MONTH_NAMES.en[d.getMonth()],
      monthHi: MONTH_NAMES.hi[d.getMonth()],
      isSunday: false,
    });
  }
  return days;
}

export type BookingDetails = { name: string; phone: string; service: string; day?: BookableDay; slot: string; note: string };

/** Build a wa.me deep link with a pre-filled consultation request.
 *  Keep emoji to single code points (complex ZWJ emoji corrupted via heredoc once) — EMOJI_CHART is patched in via python3. */
export function whatsAppLink(b: BookingDetails): string {
  const lines = [
    `📊 *Consultation Request — ${firm.name}*`,
    ``,
    `*Name:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    `*Service:* ${b.service}`,
    b.day ? `*Date:* ${b.day.day}, ${b.day.date} ${b.day.month}` : "",
    b.slot ? `*Time:* ${b.slot}` : "",
    b.note ? `*Requirement:* ${b.note}` : "",
    ``,
    `Please confirm my consultation slot. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 8);
  return `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(`Hello ${firm.name}, I would like to book a consultation.`)}`;
}
