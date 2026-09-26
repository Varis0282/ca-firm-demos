import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehta & Associates — Chartered Accountants, Indore | Sage Demo",
  description: "ITR, GST, audit, company registration and bank loans in South Tukoganj, Indore. Book a consultation on WhatsApp.",
};

export default function SageLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${karla.className} bg-[#FAF6EF] text-[#4A5248]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
