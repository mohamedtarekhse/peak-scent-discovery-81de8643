import diorHomme from "@/assets/dior-homme.png.asset.json";
import bleuDeChanel from "@/assets/bleu-de-chanel.png.asset.json";
import theOne from "@/assets/the-one.png.asset.json";
import acquaDiGio from "@/assets/acqua-di-gio.png.asset.json";
import yslY from "@/assets/ysl-y.png.asset.json";
import spicebomb from "@/assets/spicebomb.png.asset.json";
import alThaer from "@/assets/al-thaer.png.asset.json";
import auraAvenir from "@/assets/aura-avenir.jpg";
import auraSahara from "@/assets/aura-sahara.jpg";
import auraCrimson540 from "@/assets/aura-crimson-540.jpg";
import auraLayl from "@/assets/aura-layl.jpg";
import auraOlympus from "@/assets/aura-olympus.jpg";
import auraCoquette from "@/assets/aura-coquette.jpg";
import auraOpiumNoir from "@/assets/aura-opium-noir.jpg";
import auraVelvetOud from "@/assets/aura-velvet-oud.jpg";

export type Fragrance = {
  id: string;
  name: string;
  nameAr: string;
  brand: string;
  /** The original fragrance this scent is inspired by (English) */
  inspiredBy?: string;
  /** The original fragrance this scent is inspired by (Arabic) */
  inspiredByAr?: string;
  notes: string[];
  family: string;
  gender: "M" | "F" | "U";
  price: number;
  image: string;
};

// Aura inspired-by collection — names reference the original muses
export const catalog: Fragrance[] = [
  {
    id: "dior-homme",
    name: "Dior Homme",
    nameAr: "ديور أوم",
    brand: "Aura",
    inspiredBy: "Dior Homme — Dior",
    inspiredByAr: "ديور أوم — ديور",
    notes: ["Iris", "Cocoa", "Leather", "Vetiver"],
    family: "Woody / Powdery",
    gender: "M",
    price: 850,
    image: diorHomme.url,
  },
  {
    id: "bleu-de-chanel",
    name: "Bleu de Chanel",
    nameAr: "بلو دو شانيل",
    brand: "Aura",
    inspiredBy: "Bleu de Chanel — Chanel",
    inspiredByAr: "بلو دو شانيل — شانيل",
    notes: ["Citrus", "Pink Pepper", "Ginger", "Sandalwood", "Cedar"],
    family: "Aromatic / Woody",
    gender: "M",
    price: 950,
    image: bleuDeChanel.url,
  },
  {
    id: "the-one",
    name: "The One",
    nameAr: "ذا ون",
    brand: "Aura",
    inspiredBy: "The One — Dolce & Gabbana",
    inspiredByAr: "ذا ون — دولتشي آند غابانا",
    notes: ["Bergamot", "Tobacco", "Amber", "Cardamom"],
    family: "Oriental / Spicy",
    gender: "M",
    price: 900,
    image: theOne.url,
  },
  {
    id: "acqua-di-gio",
    name: "Acqua di Giò",
    nameAr: "أكوا دي جيو",
    brand: "Aura",
    inspiredBy: "Acqua di Giò — Giorgio Armani",
    inspiredByAr: "أكوا دي جيو — جورجيو أرماني",
    notes: ["Sea Notes", "Bergamot", "Jasmine", "Patchouli"],
    family: "Aquatic / Aromatic",
    gender: "M",
    price: 880,
    image: acquaDiGio.url,
  },
  {
    id: "ysl-y",
    name: "Yves Saint Laurent Y",
    nameAr: "واي إيف سان لوران",
    brand: "Aura",
    inspiredBy: "Y EDP — Yves Saint Laurent",
    inspiredByAr: "واي — إيف سان لوران",
    notes: ["Apple", "Sage", "Geranium", "Ambergris"],
    family: "Aromatic / Fougère",
    gender: "M",
    price: 920,
    image: yslY.url,
  },
  {
    id: "spicebomb",
    name: "Spicebomb",
    nameAr: "سبايس بومب",
    brand: "Aura",
    inspiredBy: "Spicebomb — Viktor & Rolf",
    inspiredByAr: "سبايس بومب — فيكتور آند رولف",
    notes: ["Pink Pepper", "Saffron", "Leather", "Tobacco"],
    family: "Oriental / Spicy",
    gender: "M",
    price: 870,
    image: spicebomb.url,
  },
  {
    id: "al-thaer",
    name: "Al Tha'er",
    nameAr: "الثائر",
    brand: "Aura",
    notes: ["Oud", "Rose", "Saffron", "Musk", "Amber"],
    family: "Oriental / Oud",
    gender: "U",
    price: 1200,
    image: alThaer.url,
  },
  {
    id: "avenir",
    name: "Avenir",
    nameAr: "أفينير",
    brand: "Aura",
    inspiredBy: "Aventus — Creed",
    inspiredByAr: "أفنتوس — كريد",
    notes: ["Pineapple", "Blackcurrant", "Birch", "Musk", "Oakmoss"],
    family: "Fruity / Chypre",
    gender: "M",
    price: 1000,
    image: auraAvenir,
  },
  {
    id: "sahara",
    name: "Sahara",
    nameAr: "صحارى",
    brand: "Aura",
    inspiredBy: "Sauvage — Dior",
    inspiredByAr: "سوفاج — ديور",
    notes: ["Bergamot", "Sichuan Pepper", "Ambroxan", "Lavender"],
    family: "Aromatic / Fresh Spicy",
    gender: "M",
    price: 900,
    image: auraSahara,
  },
  {
    id: "crimson-540",
    name: "Crimson 540",
    nameAr: "كريمسون ٥٤٠",
    brand: "Aura",
    inspiredBy: "Baccarat Rouge 540 — Maison Francis Kurkdjian",
    inspiredByAr: "باكارات روج ٥٤٠ — ميزون فرانسيس كركجان",
    notes: ["Saffron", "Jasmine", "Amberwood", "Cedar"],
    family: "Amber / Floral",
    gender: "U",
    price: 1100,
    image: auraCrimson540,
  },
  {
    id: "layl",
    name: "Layl",
    nameAr: "ليل",
    brand: "Aura",
    inspiredBy: "La Nuit de L'Homme — Yves Saint Laurent",
    inspiredByAr: "لا نوي دو لوم — إيف سان لوران",
    notes: ["Cardamom", "Lavender", "Cedar", "Vetiver"],
    family: "Woody / Spicy",
    gender: "M",
    price: 880,
    image: auraLayl,
  },
  {
    id: "olympus",
    name: "Olympus",
    nameAr: "أوليمبوس",
    brand: "Aura",
    inspiredBy: "Eros — Versace",
    inspiredByAr: "إيروس — فيرزاتشي",
    notes: ["Mint", "Green Apple", "Tonka Bean", "Vanilla", "Cedar"],
    family: "Aromatic / Fougère",
    gender: "M",
    price: 860,
    image: auraOlympus,
  },
  {
    id: "coquette",
    name: "Coquette",
    nameAr: "كوكيت",
    brand: "Aura",
    inspiredBy: "Coco Mademoiselle — Chanel",
    inspiredByAr: "كوكو مادموزيل — شانيل",
    notes: ["Orange", "Rose", "Jasmine", "Patchouli", "White Musk"],
    family: "Floral / Chypre",
    gender: "F",
    price: 950,
    image: auraCoquette,
  },
  {
    id: "opium-noir",
    name: "Opium Noir",
    nameAr: "أوبيوم نوار",
    brand: "Aura",
    inspiredBy: "Black Opium — Yves Saint Laurent",
    inspiredByAr: "بلاك أوبيوم — إيف سان لوران",
    notes: ["Coffee", "Vanilla", "Orange Blossom", "White Flowers"],
    family: "Amber / Vanilla",
    gender: "F",
    price: 930,
    image: auraOpiumNoir,
  },
  {
    id: "velvet-oud",
    name: "Velvet Oud",
    nameAr: "فيلفيت عود",
    brand: "Aura",
    inspiredBy: "Oud Wood — Tom Ford",
    inspiredByAr: "عود وود — توم فورد",
    notes: ["Oud", "Rosewood", "Cardamom", "Sandalwood", "Tonka"],
    family: "Woody / Oud",
    gender: "U",
    price: 1150,
    image: auraVelvetOud,
  },
];
