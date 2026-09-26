import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Mehta & Associates — Chartered Accountants, Indore | Ledger Demo",
  description: "ITR, GST, audit, company registration and bank loans in South Tukoganj, Indore. Book a consultation on WhatsApp.",
};

export default function LedgerLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} ${serif.variable} bg-white text-slate-700`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
