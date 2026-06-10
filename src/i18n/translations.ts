export type Lang = "en" | "ar";

type Translation = {
  dir: "ltr" | "rtl";
  nav: { home: string; picker: string; collection: string; offers: string; contact: string };
  hero: { tag: string; title: string; sub: string; cta1: string; cta2: string; hint: string };
  picker: { title: string; sub: string; ph: readonly [string, string, string]; button: string; loading: string; results: string; reason: string; order: string; err: string };
  collection: { title: string; sub: string };
  offers: { title: string; sub: string; a: { t: string; d: string }; b: { t: string; d: string }; c: { t: string; d: string } };
  social: { title: string; sub: string };
  footer: { rights: string; contact: string };
  wa: { greet: string };
};

export const translations: Record<Lang, Translation> = {
  en: {
    dir: "ltr",
    nav: { home: "Home", picker: "AI Picker", collection: "Collection", offers: "Offers", contact: "Contact" },
    hero: {
      tag: "Scent of the Summit",
      title: "Aura",
      sub: "A fragrance house born above the clouds. Drag the name — feel it move with you.",
      cta1: "Explore Collection",
      cta2: "Find Your Scent",
      hint: "drag me",
    },
    picker: {
      title: "AI Fragrance Finder",
      sub: "Tell us three fragrances you love. Our AI matches you to three Aura scents that share their soul.",
      ph: ["e.g. Bleu de Chanel", "e.g. Dior Sauvage", "e.g. Creed Aventus"],
      button: "Find My Matches",
      loading: "Reading your scent profile...",
      results: "Your Aura Matches",
      reason: "Why",
      order: "Order on WhatsApp",
      err: "Couldn't reach the AI. Please try again.",
    },
    collection: { title: "The Collection", sub: "Each bottle, a peak of its own." },
    offers: {
      title: "Offers",
      sub: "Three ways to live with Aura.",
      a: { t: "Buy 2, Get 1 Free", d: "Pick any three bottles. Pay for two." },
      b: { t: "Yearly Ritual", d: "Six bottles. One year of Aura. 2000 EGP." },
      c: { t: "Referral", d: "Share Aura. Friend gets a bottle, you get 25 off plus a tester." },
    },
    social: { title: "Follow Aura", sub: "Social channels coming soon." },
    footer: { rights: "All rights reserved.", contact: "Contact us on WhatsApp" },
    wa: { greet: "Hi Aura, I'd like to know more about your fragrances." },
  },
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", picker: "اختيار الذكاء", collection: "المجموعة", offers: "العروض", contact: "تواصل" },
    hero: {
      tag: "عبير القمم",
      title: "Aura",
      sub: "دار عطور وُلدت فوق السحاب. اسحب الاسم — اشعر به يتحرك معك.",
      cta1: "اكتشف المجموعة",
      cta2: "اعثر على عطرك",
      hint: "اسحبني",
    },
    picker: {
      title: "مستشار العطور بالذكاء الاصطناعي",
      sub: "أخبرنا بثلاثة عطور تحبها، ونحن نختار لك ثلاثة من عطور Aura تشاركها روحها.",
      ph: ["مثال: بلو دو شانيل", "مثال: ديور سوفاج", "مثال: كريد أفنتوس"],
      button: "اعرض الترشيحات",
      loading: "نقرأ بصمتك العطرية...",
      results: "ترشيحات Aura لك",
      reason: "السبب",
      order: "اطلب عبر واتساب",
      err: "تعذر الوصول للذكاء الاصطناعي. حاول مجدداً.",
    },
    collection: { title: "المجموعة", sub: "كل زجاجة قمّة بذاتها." },
    offers: {
      title: "العروض",
      sub: "ثلاث طرق لتعيش مع Aura.",
      a: { t: "اشترِ 2 واحصل على الثالث مجاناً", d: "اختر أي ثلاث زجاجات. ادفع ثمن اثنتين." },
      b: { t: "اشتراك السنة", d: "ست زجاجات. سنة من Aura. 2000 جنيه." },
      c: { t: "دعوة صديق", d: "شارك Aura. صديقك يحصل على زجاجة، وأنت على خصم 25 وتيستر." },
    },
    social: { title: "تابع Aura", sub: "قنواتنا الاجتماعية قريباً." },
    footer: { rights: "جميع الحقوق محفوظة.", contact: "تواصل عبر واتساب" },
    wa: { greet: "مرحباً Aura، أود معرفة المزيد عن عطوركم." },
  },
};

export type Dict = Translation;
