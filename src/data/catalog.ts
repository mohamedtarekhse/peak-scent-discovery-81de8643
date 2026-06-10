import diorHomme from "@/assets/dior-homme.png.asset.json";
import bleuDeChanel from "@/assets/bleu-de-chanel.png.asset.json";
import theOne from "@/assets/the-one.png.asset.json";
import acquaDiGio from "@/assets/acqua-di-gio.png.asset.json";
import yslY from "@/assets/ysl-y.png.asset.json";
import spicebomb from "@/assets/spicebomb.png.asset.json";
import alThaer from "@/assets/al-thaer.png.asset.json";

export type Fragrance = {
  id: string;
  name: string;
  nameAr: string;
  brand: string;
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
];
