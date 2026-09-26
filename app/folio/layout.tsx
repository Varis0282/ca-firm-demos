import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const archivo = Archivo({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Mehta & Associates — Chartered Accountants, Indore | Folio Demo",
  description: "ITR, GST, audit, company registration and bank loans in South Tukoganj, Indore. Book a consultation on WhatsApp.",
};

export default function FolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${archivo.className} ${newsreader.variable} bg-white text-[#3D3D3D]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
