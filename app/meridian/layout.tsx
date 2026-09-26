import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehta & Associates — Chartered Accountants, Indore | Meridian Demo",
  description: "ITR, GST, audit, company registration and bank loans in South Tukoganj, Indore. Book a consultation on WhatsApp.",
};

export default function MeridianLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${sora.className} bg-[#F8FAFC] text-slate-600`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
