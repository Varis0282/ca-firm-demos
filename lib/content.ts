// Shared bilingual content consumed by all 5 CA-firm themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const services = [
  { icon: "FileText", en: { title: "ITR Filing", desc: "Income-tax returns for salaried, business and capital-gains cases — filed accurately, on time, with maximum legal savings." }, hi: { title: "ITR फाइलिंग", desc: "नौकरीपेशा, व्यापारी और कैपिटल-गेन मामलों के इनकम-टैक्स रिटर्न — सटीक, समय पर और अधिकतम वैध बचत के साथ।" } },
  { icon: "Receipt", en: { title: "GST Registration & Returns", desc: "Same-week GST registration, monthly/quarterly returns, e-invoicing setup and notice replies — fully handled." }, hi: { title: "GST पंजीकरण व रिटर्न", desc: "उसी सप्ताह GST रजिस्ट्रेशन, मासिक/त्रैमासिक रिटर्न, ई-इनवॉइसिंग सेटअप और नोटिस के जवाब — पूरी ज़िम्मेदारी हमारी।" } },
  { icon: "Building2", en: { title: "Company & LLP Incorporation", desc: "Private limited, LLP, OPC and partnership setup — name approval to bank account, everything done for you." }, hi: { title: "कंपनी व LLP गठन", desc: "प्राइवेट लिमिटेड, LLP, OPC व पार्टनरशिप — नाम अनुमोदन से बैंक खाते तक, सब कुछ हम करते हैं।" } },
  { icon: "ShieldCheck", en: { title: "Audit & Assurance", desc: "Statutory, tax and internal audits by experienced partners — clean reports, practical recommendations." }, hi: { title: "ऑडिट व एश्योरेंस", desc: "अनुभवी पार्टनर्स द्वारा वैधानिक, टैक्स व आंतरिक ऑडिट — स्पष्ट रिपोर्ट, व्यावहारिक सुझाव।" } },
  { icon: "Users", en: { title: "TDS & Payroll Compliance", desc: "TDS returns, Form 16, PF/ESI and full payroll processing — your team paid right, your compliance spotless." }, hi: { title: "TDS व पेरोल अनुपालन", desc: "TDS रिटर्न, फॉर्म 16, PF/ESI और पूरी पेरोल प्रोसेसिंग — टीम को सही भुगतान, अनुपालन बेदाग।" } },
  { icon: "Landmark", en: { title: "Project Reports & Bank Loans", desc: "CMA data, project reports and CA certificates that banks actually accept — for CC limits, term loans and Mudra." }, hi: { title: "प्रोजेक्ट रिपोर्ट व बैंक लोन", desc: "CMA डेटा, प्रोजेक्ट रिपोर्ट और CA सर्टिफिकेट जो बैंक वास्तव में स्वीकारते हैं — CC लिमिट, टर्म लोन व मुद्रा के लिए।" } },
  { icon: "Stamp", en: { title: "Trademark & Licenses", desc: "Trademark registration, FSSAI, MSME/Udyam, import-export code and Gumasta — every license your business needs." }, hi: { title: "ट्रेडमार्क व लाइसेंस", desc: "ट्रेडमार्क रजिस्ट्रेशन, FSSAI, MSME/उद्यम, आयात-निर्यात कोड व गुमास्ता — व्यापार के हर लाइसेंस की व्यवस्था।" } },
  { icon: "TrendingUp", en: { title: "Tax Planning & Advisory", desc: "Year-round planning for businesses and HNIs — pay what the law asks, not a rupee more." }, hi: { title: "टैक्स प्लानिंग व सलाह", desc: "व्यापारियों व HNI के लिए सालभर की योजना — जितना कानून कहे उतना ही टैक्स, एक रुपया ज़्यादा नहीं।" } },
];

export const team = [
  { id: "rajiv", photo: 0, en: { name: "CA Rajiv Mehta", spec: "Managing Partner", qual: "FCA, DISA", exp: "18+ years experience", bio: "Founder of the firm. Direct-tax and audit specialist trusted by Indore's trading and manufacturing families for a generation. Known for straight answers and zero missed deadlines." }, hi: { name: "CA राजीव मेहता", spec: "मैनेजिंग पार्टनर", qual: "FCA, DISA", exp: "18+ वर्ष का अनुभव", bio: "फर्म के संस्थापक। डायरेक्ट टैक्स व ऑडिट विशेषज्ञ, जिन पर इंदौर के व्यापारी और उद्योगपति परिवार एक पीढ़ी से भरोसा करते हैं। सीधे जवाब और कभी न चूकने वाली डेडलाइन के लिए प्रसिद्ध।" }, slots: "Direct Tax · Audit · Advisory" },
  { id: "shalini", photo: 1, en: { name: "CA Shalini Mehta", spec: "Partner — Audit & Compliance", qual: "FCA", exp: "15+ years experience", bio: "Leads statutory audits and company-law compliance. Former Big-4 associate who brings metro-level process discipline to Indore businesses." }, hi: { name: "CA शालिनी मेहता", spec: "पार्टनर — ऑडिट व अनुपालन", qual: "FCA", exp: "15+ वर्ष का अनुभव", bio: "वैधानिक ऑडिट व कंपनी-लॉ अनुपालन की प्रमुख। पूर्व बिग-4 एसोसिएट, जो मेट्रो स्तर का अनुशासन इंदौर के व्यापारों तक लाती हैं।" }, slots: "Audit · Company Law · ROC" },
  { id: "nitin", photo: 2, en: { name: "Nitin Agrawal", spec: "Senior Associate — GST", qual: "M.Com, LL.B.", exp: "8+ years experience", bio: "Our GST department head — registrations, returns, refunds and notice replies. Businesses call him before they call their lawyer." }, hi: { name: "नितिन अग्रवाल", spec: "सीनियर एसोसिएट — GST", qual: "M.Com, LL.B.", exp: "8+ वर्ष का अनुभव", bio: "हमारे GST विभाग के प्रमुख — रजिस्ट्रेशन, रिटर्न, रिफंड व नोटिस के जवाब। व्यापारी वकील से पहले इन्हें कॉल करते हैं।" }, slots: "GST · Refunds · Notices" },
  { id: "pooja", photo: 3, en: { name: "Pooja Bhandari", spec: "Senior Associate — Accounts & Payroll", qual: "M.Com, CA-Inter", exp: "6+ years experience", bio: "Runs monthly accounting, TDS and payroll for 120+ businesses. Your books, always ready for the bank or the department." }, hi: { name: "पूजा भंडारी", spec: "सीनियर एसोसिएट — अकाउंट्स व पेरोल", qual: "M.Com, CA-इंटर", exp: "6+ वर्ष का अनुभव", bio: "120+ व्यापारों की मासिक अकाउंटिंग, TDS व पेरोल संभालती हैं। आपकी किताबें बैंक या विभाग के लिए हमेशा तैयार।" }, slots: "Accounting · TDS · Payroll" },
];

export const industries = [
  { icon: "Store", en: { title: "Traders & Retailers", desc: "Kirana to electronics — GST, stock statements and bank limits handled end to end." }, hi: { title: "व्यापारी व रिटेलर", desc: "किराना से इलेक्ट्रॉनिक्स तक — GST, स्टॉक स्टेटमेंट व बैंक लिमिट की पूरी व्यवस्था।" } },
  { icon: "Factory", en: { title: "Manufacturers", desc: "Pithampur & Palda units — costing, audits, subsidies and factory compliance." }, hi: { title: "निर्माता (मैन्युफैक्चरर)", desc: "पीथमपुर व पालदा इकाइयाँ — कॉस्टिंग, ऑडिट, सब्सिडी व फैक्ट्री अनुपालन।" } },
  { icon: "Stethoscope", en: { title: "Doctors & Professionals", desc: "Presumptive tax, clinic accounting and investment planning for busy professionals." }, hi: { title: "डॉक्टर व प्रोफेशनल", desc: "व्यस्त प्रोफेशनल्स के लिए प्रिज़म्प्टिव टैक्स, क्लिनिक अकाउंटिंग व निवेश योजना।" } },
  { icon: "Rocket", en: { title: "Startups & IT", desc: "Incorporation, ESOPs, investor-ready books and startup-India registrations." }, hi: { title: "स्टार्टअप व IT", desc: "कंपनी गठन, ESOP, निवेशकों के लिए तैयार खाते व स्टार्टअप-इंडिया पंजीकरण।" } },
  { icon: "Building", en: { title: "Real Estate & Builders", desc: "RERA compliance, project accounting and capital-gains structuring." }, hi: { title: "रियल एस्टेट व बिल्डर", desc: "RERA अनुपालन, प्रोजेक्ट अकाउंटिंग व कैपिटल-गेन संरचना।" } },
  { icon: "Globe", en: { title: "Exporters & E-commerce", desc: "LUT, GST refunds, marketplace reconciliation and foreign remittance certificates." }, hi: { title: "निर्यातक व ई-कॉमर्स", desc: "LUT, GST रिफंड, मार्केटप्लेस मिलान व विदेशी भुगतान प्रमाणपत्र।" } },
];

export const reviews = [
  { name: "Mukesh Gupta", area: "Cloth Market, Indore", stars: 5, en: "20 years with Mehta sahab. Never once has a return been late — not once. My CC limit doubled because the bank trusts his files.", hi: "मेहता साहब के साथ 20 साल हो गए। एक बार भी रिटर्न लेट नहीं हुआ — एक बार भी। बैंक उनकी फाइलों पर भरोसा करता है, इसलिए मेरी CC लिमिट दोगुनी हो गई।" },
  { name: "Dr. Nidhi Saxena", area: "Vijay Nagar, Indore", stars: 5, en: "As a doctor I have no time for tax matters. They remind me on WhatsApp, collect documents from the clinic, and it's done. Zero headache.", hi: "डॉक्टर होने के नाते टैक्स के लिए समय नहीं है। ये WhatsApp पर याद दिलाते हैं, क्लिनिक से डॉक्युमेंट ले जाते हैं, और काम हो जाता है। ज़ीरो टेंशन।" },
  { name: "Rohit Jain", area: "Pithampur (Auto Parts Unit)", stars: 5, en: "GST refund of 14 lakh was stuck for 8 months with my old consultant. Nitin ji got it released in 6 weeks.", hi: "पुराने कंसल्टेंट के पास 14 लाख का GST रिफंड 8 महीने अटका था। नितिन जी ने 6 हफ्तों में निकलवा दिया।" },
  { name: "Sneha Kothari", area: "Startup Founder, Indore", stars: 5, en: "They incorporated our company, set up ESOPs and made our books investor-ready before our seed round. Felt like a Big-4 at Indore prices.", hi: "कंपनी बनवाई, ESOP सेट किए और सीड राउंड से पहले खाते इन्वेस्टर-रेडी कर दिए। इंदौर की फीस में बिग-4 जैसा काम।" },
  { name: "Abdul Rahman", area: "Sarafa, Indore", stars: 4, en: "Fixed fees told in the first meeting itself, written on paper. No surprise bills at year end like others.", hi: "पहली मीटिंग में ही फिक्स फीस बता दी, कागज़ पर लिखकर। साल के अंत में दूसरों जैसा चौंकाने वाला बिल नहीं।" },
  { name: "Kavita Sharma", area: "Boutique Owner, Rau", stars: 5, en: "I started with just a Gumasta license, today they handle my GST, loans and ITR. They grow with your business.", hi: "शुरुआत सिर्फ गुमास्ता लाइसेंस से की थी, आज मेरा GST, लोन और ITR सब यही संभालते हैं। ये आपके व्यापार के साथ बढ़ते हैं।" },
];

export const faqs = [
  { en: { q: "How are your fees decided?", a: "Fixed fees, quoted in writing before work begins — based on the service, not on how much refund or turnover you have. Follow-up questions are always free." }, hi: { q: "आपकी फीस कैसे तय होती है?", a: "काम शुरू होने से पहले लिखित में फिक्स फीस — सेवा के आधार पर, आपके रिफंड या टर्नओवर के आधार पर नहीं। फॉलो-अप सवाल हमेशा मुफ़्त।" } },
  { en: { q: "What documents do I need for ITR filing?", a: "For salaried: Form 16, bank statements and investment proofs. For business: we take your books or even a shoe-box of bills — our team organises everything." }, hi: { q: "ITR के लिए कौन से डॉक्युमेंट चाहिए?", a: "नौकरीपेशा: फॉर्म 16, बैंक स्टेटमेंट व निवेश प्रमाण। व्यापारी: आपके खाते या बिलों का डिब्बा भी चलेगा — हमारी टीम सब व्यवस्थित कर देती है।" } },
  { en: { q: "How fast is GST registration?", a: "Documents today, application same day — GSTIN typically within 3–7 working days. We also set up your first invoice format free." }, hi: { q: "GST रजिस्ट्रेशन कितना जल्दी होता है?", a: "आज डॉक्युमेंट, उसी दिन आवेदन — GSTIN आमतौर पर 3–7 कार्यदिवस में। पहला इनवॉइस फॉर्मेट भी मुफ़्त सेट करते हैं।" } },
  { en: { q: "I received an income-tax / GST notice. Can you handle it?", a: "Yes — send a photo of the notice on WhatsApp first, panic later (you won't need to). We draft replies, appear before officers and close most notices without demand." }, hi: { q: "मुझे इनकम-टैक्स / GST नोटिस आया है। क्या आप संभालेंगे?", a: "हाँ — पहले नोटिस की फोटो WhatsApp करें, घबराना बाद में (ज़रूरत नहीं पड़ेगी)। हम जवाब बनाते हैं, अधिकारी के सामने पेश होते हैं और ज़्यादातर नोटिस बिना डिमांड बंद कराते हैं।" } },
  { en: { q: "Can everything be done online / on WhatsApp?", a: "Yes. 70% of our clients never visit the office — documents on WhatsApp or email, e-signatures, and payment by UPI. Visit us only if you want the chai." }, hi: { q: "क्या सब कुछ ऑनलाइन / WhatsApp पर हो सकता है?", a: "हाँ। हमारे 70% क्लाइंट कभी ऑफिस नहीं आते — डॉक्युमेंट WhatsApp या ईमेल पर, ई-साइन और UPI से भुगतान। ऑफिस सिर्फ चाय के लिए आइए।" } },
  { en: { q: "Do you take clients outside Indore?", a: "Yes — we serve clients across MP (Bhopal, Ujjain, Dewas, Dhar) and NRI clients fully online, with the same deadline guarantees." }, hi: { q: "क्या इंदौर के बाहर के क्लाइंट लेते हैं?", a: "हाँ — पूरे मप्र (भोपाल, उज्जैन, देवास, धार) और NRI क्लाइंट्स को पूरी तरह ऑनलाइन सेवा, वही डेडलाइन गारंटी के साथ।" } },
];

export const stats = [
  { value: "2,000+", en: "Clients Served", hi: "क्लाइंट्स की सेवा" },
  { value: "1,000+", en: "ITRs Filed Every Year", hi: "हर साल ITR फाइल" },
  { value: "18+", en: "Years of Practice", hi: "वर्षों की प्रैक्टिस" },
  { value: "4.9★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "Clock", en: { title: "Never Miss a Deadline", desc: "WhatsApp reminders before every due date. In 18 years, zero late-filing penalties caused by us." }, hi: { title: "डेडलाइन कभी नहीं चूकती", desc: "हर ड्यू डेट से पहले WhatsApp रिमाइंडर। 18 वर्षों में हमारी वजह से एक भी लेट-फाइलिंग पेनल्टी नहीं।" } },
  { icon: "IndianRupee", en: { title: "Transparent Fixed Fees", desc: "Fees quoted in writing before work starts. No percentage games, no year-end surprises." }, hi: { title: "पारदर्शी फिक्स फीस", desc: "काम शुरू होने से पहले लिखित फीस। न प्रतिशत का खेल, न साल के अंत में झटका।" } },
  { icon: "BadgeCheck", en: { title: "Partner-Level Attention", desc: "Your file is reviewed by a CA partner — not left to an intern. Direct numbers of both partners." }, hi: { title: "पार्टनर-स्तर का ध्यान", desc: "आपकी फाइल CA पार्टनर देखते हैं — इंटर्न के भरोसे नहीं। दोनों पार्टनर्स के सीधे नंबर।" } },
  { icon: "Briefcase", en: { title: "Everything Under One Roof", desc: "Tax, GST, audit, company law, loans and licenses — one firm, one WhatsApp number." }, hi: { title: "सब कुछ एक ही छत के नीचे", desc: "टैक्स, GST, ऑडिट, कंपनी लॉ, लोन व लाइसेंस — एक फर्म, एक WhatsApp नंबर।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", team: "Our Team", clients: "Clients", contact: "Contact", book: "Book a Consultation" },
    hero: {
      badge: "Chartered Accountants · Indore · Since 2007",
      title: "Your Taxes, Compliance & Growth,",
      titleAccent: "Handled by Experts",
      sub: "ITR, GST, audits, company registration and bank loans — managed by CA partners with 18 years of practice in South Tukoganj, Indore. Book a consultation on WhatsApp in 30 seconds.",
      cta1: "Book a Consultation",
      cta2: "Call Now",
      open: "Mon – Sat · 10:30 AM – 7 PM",
    },
    sections: {
      servicesTitle: "Our Services",
      servicesSub: "Every compliance your business needs — one firm, one number.",
      teamTitle: "Meet the Team",
      teamSub: "CA partners and senior associates who know your file personally.",
      whyTitle: "Why Businesses Stay With Us for Decades",
      whySub: "18 years, 2,000+ clients, one promise — you never worry about a deadline again.",
      industriesTitle: "Who We Work With",
      industriesSub: "Deep experience across Indore's business landscape.",
      reviewsTitle: "What Clients Say",
      reviewsSub: "Businesses and professionals across Madhya Pradesh.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Straight answers, the way we like it.",
      galleryTitle: "Inside Our Office",
      gallerySub: "A professional, organised space in South Tukoganj.",
      visitTitle: "Visit Us",
      visitSub: "In the heart of Indore's business district.",
      ctaTitle: "A tax notice, a new business, a stuck refund?",
      ctaSub: "Book a consultation now — it takes 30 seconds on WhatsApp.",
      claimTitle: "1,000+ ITRs filed every year. Zero missed deadlines.",
      claimSub: "That is not a slogan — it is our filing record since 2007.",
    },
    booking: {
      title: "Book a Consultation",
      sub: "Fill this form — your request goes directly to our WhatsApp. We confirm your slot within 15 minutes.",
      name: "Your Name", namePh: "e.g. Mukesh Gupta",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      doctor: "Select Service", anyDoctor: "Not sure — need guidance",
      date: "Preferred Date", slot: "Preferred Time",
      note: "Briefly describe your requirement (optional)", notePh: "e.g. GST notice received, need reply",
      submit: "Book on WhatsApp",
      or: "or",
      call: "Call the office",
      success: "Opening WhatsApp… your consultation request is ready to send!",
      morning: "Morning (11 AM – 2 PM)", evening: "Evening (4 PM – 7 PM)",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Office Hours", tagline: "Your growth, our numbers." },
    misc: { viewAll: "View All Services", bookWith: "Consult", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "Office Helpline (Mon–Sat)" },
    about: {
      title: "About Our Firm",
      sub: "18 years of straight answers and clean files.",
      story1: "Mehta & Associates was founded in 2007 by CA Rajiv Mehta with one working rule — treat every client's money like your own, and never let a deadline pass.",
      story2: "From a two-table office in South Tukoganj, the firm today serves 2,000+ clients — traders, Pithampur manufacturers, doctors, startups and exporters — with a team led by two CA partners and specialist associates for GST, accounting and payroll.",
      story3: "We are old-school about discipline and new-school about convenience: fixed written fees, partner-reviewed files, and everything from document pickup to payment possible on WhatsApp.",
      missionTitle: "Our Mission",
      mission: "Every business in Madhya Pradesh deserves metro-quality financial expertise — at honest, fixed fees, from people who pick up the phone.",
      values: [
        { title: "Deadlines Are Sacred", desc: "18 years, zero late filings caused by us. Reminders reach you before due dates." },
        { title: "Written Fixed Fees", desc: "Quoted before work begins. No percentage of refunds, no surprises." },
        { title: "Partner Attention", desc: "Every file is reviewed by a CA partner before it leaves the office." },
        { title: "Plain Language", desc: "We explain tax in the language you speak — Hindi, English or business." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", services: "सेवाएँ", team: "हमारी टीम", clients: "क्लाइंट्स", contact: "संपर्क", book: "परामर्श बुक करें" },
    hero: {
      badge: "चार्टर्ड अकाउंटेंट्स · इंदौर · 2007 से",
      title: "आपका टैक्स, अनुपालन व विकास,",
      titleAccent: "विशेषज्ञों के हाथों में",
      sub: "ITR, GST, ऑडिट, कंपनी रजिस्ट्रेशन व बैंक लोन — साउथ तुकोगंज, इंदौर में 18 वर्षों की प्रैक्टिस वाले CA पार्टनर्स द्वारा। WhatsApp पर 30 सेकंड में परामर्श बुक करें।",
      cta1: "परामर्श बुक करें",
      cta2: "अभी कॉल करें",
      open: "सोम – शनि · सुबह 10:30 – शाम 7",
    },
    sections: {
      servicesTitle: "हमारी सेवाएँ",
      servicesSub: "व्यापार का हर अनुपालन — एक फर्म, एक नंबर।",
      teamTitle: "टीम से मिलिए",
      teamSub: "CA पार्टनर्स व सीनियर एसोसिएट्स जो आपकी फाइल को व्यक्तिगत रूप से जानते हैं।",
      whyTitle: "व्यापारी दशकों तक हमारे साथ क्यों रहते हैं",
      whySub: "18 साल, 2,000+ क्लाइंट्स, एक वादा — डेडलाइन की चिंता अब हमारी।",
      industriesTitle: "हम किनके साथ काम करते हैं",
      industriesSub: "इंदौर के हर व्यापार क्षेत्र का गहरा अनुभव।",
      reviewsTitle: "क्लाइंट्स क्या कहते हैं",
      reviewsSub: "मध्य प्रदेश भर के व्यापारी व प्रोफेशनल।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "सीधे जवाब — हमें ऐसे ही पसंद हैं।",
      galleryTitle: "हमारे ऑफिस की झलक",
      gallerySub: "साउथ तुकोगंज में व्यवस्थित, प्रोफेशनल कार्यालय।",
      visitTitle: "हम तक पहुँचें",
      visitSub: "इंदौर के व्यापारिक केंद्र के बीच में।",
      ctaTitle: "टैक्स नोटिस, नया व्यापार, या अटका रिफंड?",
      ctaSub: "अभी परामर्श बुक करें — WhatsApp पर सिर्फ 30 सेकंड।",
      claimTitle: "हर साल 1,000+ ITR फाइल। एक भी डेडलाइन नहीं चूकी।",
      claimSub: "यह नारा नहीं — 2007 से हमारा फाइलिंग रिकॉर्ड है।",
    },
    booking: {
      title: "परामर्श बुक करें",
      sub: "यह फॉर्म भरें — आपकी रिक्वेस्ट सीधे हमारे WhatsApp पर पहुँचेगी। 15 मिनट में स्लॉट कन्फर्म।",
      name: "आपका नाम", namePh: "जैसे: मुकेश गुप्ता",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      doctor: "सेवा चुनें", anyDoctor: "पक्का नहीं — मार्गदर्शन चाहिए",
      date: "पसंदीदा तारीख", slot: "पसंदीदा समय",
      note: "अपनी आवश्यकता संक्षेप में लिखें (वैकल्पिक)", notePh: "जैसे: GST नोटिस आया है, जवाब चाहिए",
      submit: "WhatsApp पर बुक करें",
      or: "या",
      call: "ऑफिस को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी परामर्श रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "सुबह (11 – 2 बजे)", evening: "शाम (4 – 7 बजे)",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "कार्यालय समय", tagline: "आपकी तरक्की, हमारे आँकड़े।" },
    misc: { viewAll: "सभी सेवाएँ देखें", bookWith: "परामर्श लें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "ऑफिस हेल्पलाइन (सोम–शनि)" },
    about: {
      title: "हमारी फर्म के बारे में",
      sub: "18 साल के सीधे जवाब और साफ फाइलें।",
      story1: "मेहता एंड एसोसिएट्स की स्थापना 2007 में CA राजीव मेहता ने एक कार्य-नियम के साथ की — हर क्लाइंट के पैसे को अपना समझो, और डेडलाइन कभी मत चूको।",
      story2: "साउथ तुकोगंज के दो-टेबल वाले ऑफिस से शुरू होकर आज फर्म 2,000+ क्लाइंट्स की सेवा करती है — व्यापारी, पीथमपुर के निर्माता, डॉक्टर, स्टार्टअप व निर्यातक — दो CA पार्टनर्स और GST, अकाउंटिंग व पेरोल के विशेषज्ञ एसोसिएट्स की टीम के साथ।",
      story3: "अनुशासन में हम पुराने ज़माने के हैं और सुविधा में नए — लिखित फिक्स फीस, पार्टनर द्वारा जाँची फाइलें, और डॉक्युमेंट पिकअप से भुगतान तक सब WhatsApp पर संभव।",
      missionTitle: "हमारा मिशन",
      mission: "मध्य प्रदेश के हर व्यापार को मेट्रो-स्तर की वित्तीय विशेषज्ञता — ईमानदार फिक्स फीस पर, ऐसे लोगों से जो फोन उठाते हैं।",
      values: [
        { title: "डेडलाइन पवित्र है", desc: "18 साल, हमारी वजह से शून्य लेट फाइलिंग। ड्यू डेट से पहले रिमाइंडर।" },
        { title: "लिखित फिक्स फीस", desc: "काम से पहले तय। रिफंड का प्रतिशत नहीं, कोई झटका नहीं।" },
        { title: "पार्टनर का ध्यान", desc: "हर फाइल ऑफिस से निकलने से पहले CA पार्टनर जाँचते हैं।" },
        { title: "सरल भाषा", desc: "टैक्स हम आपकी भाषा में समझाते हैं — हिंदी, अंग्रेज़ी या व्यापार की।" },
      ],
    },
  },
};
