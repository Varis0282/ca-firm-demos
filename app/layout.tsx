import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CA Firm Website Demos — 5 Styles",
  description:
    "One CA firm, five completely different websites. Consultation booking on WhatsApp, Hindi/English, services, team and client pages — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
