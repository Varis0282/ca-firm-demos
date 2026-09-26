/**
 * ─────────────────────────────────────────────────────────────
 *  REBRAND SPOT — change everything here to rebrand the demo
 *  for a real prospect in ~10 minutes before a meeting.
 * ─────────────────────────────────────────────────────────────
 */
export const firm = {
  name: "Mehta & Associates",
  fullName: "Mehta & Associates — Chartered Accountants",
  shortName: "M&A",
  nameHi: "मेहता एंड एसोसिएट्स",
  city: "Indore",
  address: "301, Business Bay, South Tukoganj, Indore, Madhya Pradesh 452001",
  addressHi: "301, बिज़नेस बे, साउथ तुकोगंज, इंदौर, मध्य प्रदेश 452001",
  phone: "+91 92024 20455",
  phoneRaw: "+919202420455",
  whatsapp: "919202420455",
  email: "office@mehtaca.in",
  established: 2007,
  mapEmbed: "https://www.google.com/maps?q=South+Tukoganj,+Indore,+Madhya+Pradesh&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=South+Tukoganj+Indore",
  timings: {
    en: [
      { days: "Monday – Saturday", hours: "10:30 AM – 7:00 PM" },
      { days: "Sunday", hours: "Closed (WhatsApp support available)" },
    ],
    hi: [
      { days: "सोमवार – शनिवार", hours: "सुबह 10:30 – शाम 7:00" },
      { days: "रविवार", hours: "अवकाश (WhatsApp सपोर्ट उपलब्ध)" },
    ],
  },
};

// Back-compat aliases so shared components keep working
export const inst = firm;
export const clinic = firm;

export const img = {
  team: [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  ],
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  heroAlt: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80",
  ],
  about: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  aboutAlt: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
  docs: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  signing: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
};
