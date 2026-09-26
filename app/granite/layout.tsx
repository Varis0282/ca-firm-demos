import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mehta & Associates — Chartered Accountants, Indore | Granite Demo",
  description: "ITR, GST, audit, company registration and bank loans in South Tukoganj, Indore. Book a consultation on WhatsApp.",
};

export default function GraniteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${plex.className} bg-[#14171C] text-[#9AA6B2]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
