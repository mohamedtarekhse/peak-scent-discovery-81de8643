import bottleImg from "@/assets/bottle-placeholder.jpg";

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

// Starter catalog — replace with your real bottles + photos
export const catalog: Fragrance[] = [
  {
    id: "aura-bleu",
    name: "Aura Bleu",
    nameAr: "أورا بلو",
    brand: "Aura",
    notes: ["Bergamot", "Sea Salt", "Cedarwood", "Ambergris"],
    family: "Aquatic / Woody",
    gender: "M",
    price: 850,
    image: bottleImg,
  },
  {
    id: "aura-noir",
    name: "Aura Noir",
    nameAr: "أورا نوار",
    brand: "Aura",
    notes: ["Oud", "Saffron", "Rose", "Leather"],
    family: "Oriental / Woody",
    gender: "U",
    price: 1200,
    image: bottleImg,
  },
  {
    id: "aura-blanc",
    name: "Aura Blanc",
    nameAr: "أورا بلان",
    brand: "Aura",
    notes: ["Jasmine", "White Musk", "Vanilla", "Sandalwood"],
    family: "Floral / Musky",
    gender: "F",
    price: 950,
    image: bottleImg,
  },
  {
    id: "aura-vert",
    name: "Aura Vert",
    nameAr: "أورا فيرت",
    brand: "Aura",
    notes: ["Green Tea", "Mint", "Vetiver", "Lime"],
    family: "Fresh / Green",
    gender: "U",
    price: 780,
    image: bottleImg,
  },
  {
    id: "aura-or",
    name: "Aura Or",
    nameAr: "أورا أور",
    brand: "Aura",
    notes: ["Amber", "Honey", "Tobacco", "Vanilla"],
    family: "Amber / Sweet",
    gender: "U",
    price: 1100,
    image: bottleImg,
  },
  {
    id: "aura-rouge",
    name: "Aura Rouge",
    nameAr: "أورا روج",
    brand: "Aura",
    notes: ["Red Rose", "Patchouli", "Oud", "Pink Pepper"],
    family: "Floral / Oriental",
    gender: "F",
    price: 1050,
    image: bottleImg,
  },
];
