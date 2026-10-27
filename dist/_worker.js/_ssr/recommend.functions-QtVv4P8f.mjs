import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-I6x-3bX5.mjs";
import { t as catalog } from "./catalog-DzkgSmcn.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recommend.functions-QtVv4P8f.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = objectType({
	favorites: arrayType(stringType().min(1).max(120)).length(3),
	lang: enumType(["en", "ar"]).default("en")
});
/**
* Curated knowledge of common real-world fragrances users cite as
* favorites. Notes use standard Fragrantica terminology so they can be
* searched on fragrantica.com. Keys are matched loosely against the
* user's free-text input.
*/
var FRAGRANCE_KB = [
	{
		aliases: ["aventus", "creed aventus"],
		notes: [
			"Pineapple",
			"Blackcurrant",
			"Birch",
			"Musk",
			"Oakmoss"
		],
		family: "Fruity / Chypre"
	},
	{
		aliases: ["sauvage"],
		notes: [
			"Bergamot",
			"Sichuan Pepper",
			"Ambroxan",
			"Lavender"
		],
		family: "Aromatic / Fresh Spicy"
	},
	{
		aliases: ["sauvage elixir"],
		notes: [
			"Grapefruit",
			"Cinnamon",
			"Lavender",
			"Licorice",
			"Amber"
		],
		family: "Spicy / Woody"
	},
	{
		aliases: ["bleu de chanel", "bleu"],
		notes: [
			"Citrus",
			"Pink Pepper",
			"Ginger",
			"Sandalwood",
			"Cedar"
		],
		family: "Aromatic / Woody"
	},
	{
		aliases: [
			"baccarat",
			"br540",
			"540"
		],
		notes: [
			"Saffron",
			"Jasmine",
			"Amberwood",
			"Cedar"
		],
		family: "Amber / Floral"
	},
	{
		aliases: ["black opium", "opium"],
		notes: [
			"Coffee",
			"Vanilla",
			"Orange Blossom",
			"White Flowers"
		],
		family: "Amber / Vanilla"
	},
	{
		aliases: ["coco mademoiselle", "mademoiselle"],
		notes: [
			"Orange",
			"Rose",
			"Jasmine",
			"Patchouli",
			"White Musk"
		],
		family: "Floral / Chypre"
	},
	{
		aliases: ["oud wood"],
		notes: [
			"Oud",
			"Rosewood",
			"Cardamom",
			"Sandalwood",
			"Tonka"
		],
		family: "Woody / Oud"
	},
	{
		aliases: ["tobacco vanille"],
		notes: [
			"Tobacco Leaf",
			"Vanilla",
			"Cocoa",
			"Tonka",
			"Dry Fruits"
		],
		family: "Oriental / Spicy"
	},
	{
		aliases: ["ombre leather", "leather tom ford"],
		notes: [
			"Leather",
			"Cardamom",
			"Jasmine",
			"Patchouli",
			"Amber"
		],
		family: "Leather / Woody"
	},
	{
		aliases: ["lost cherry"],
		notes: [
			"Black Cherry",
			"Almond",
			"Tonka",
			"Sandalwood",
			"Vetiver"
		],
		family: "Fruity / Gourmand"
	},
	{
		aliases: ["eros", "eros versace"],
		notes: [
			"Mint",
			"Green Apple",
			"Tonka Bean",
			"Vanilla",
			"Cedar"
		],
		family: "Aromatic / Fougère"
	},
	{
		aliases: [
			"la nuit de l'homme",
			"la nuit",
			"nuit de homme"
		],
		notes: [
			"Cardamom",
			"Lavender",
			"Cedar",
			"Vetiver"
		],
		family: "Woody / Spicy"
	},
	{
		aliases: ["the one", "dolce one"],
		notes: [
			"Bergamot",
			"Tobacco",
			"Amber",
			"Cardamom"
		],
		family: "Oriental / Spicy"
	},
	{
		aliases: [
			"acqua di gio",
			"acquadigio",
			"gio armani"
		],
		notes: [
			"Sea Notes",
			"Bergamot",
			"Jasmine",
			"Patchouli"
		],
		family: "Aquatic / Aromatic"
	},
	{
		aliases: ["dior homme", "diorhomme"],
		notes: [
			"Iris",
			"Cocoa",
			"Leather",
			"Vetiver"
		],
		family: "Woody / Powdery"
	},
	{
		aliases: ["miss dior"],
		notes: [
			"Rose",
			"Peony",
			"Lily of the Valley",
			"Iris",
			"Musk"
		],
		family: "Floral / Chypre"
	},
	{
		aliases: ["jadore", "j'adore"],
		notes: [
			"Ylang-Ylang",
			"Jasmine",
			"Rose",
			"Pear",
			"Vanilla"
		],
		family: "Floral"
	},
	{
		aliases: ["libre ysl", "libre"],
		notes: [
			"Lavender",
			"Orange Blossom",
			"Vanilla",
			"Musk",
			"Cedar"
		],
		family: "Floral / Aromatic"
	},
	{
		aliases: [
			"y edp",
			"ysl y",
			"yves saint laurent y"
		],
		notes: [
			"Apple",
			"Sage",
			"Geranium",
			"Ambergris"
		],
		family: "Aromatic / Fougère"
	},
	{
		aliases: ["spicebomb"],
		notes: [
			"Pink Pepper",
			"Saffron",
			"Leather",
			"Tobacco"
		],
		family: "Oriental / Spicy"
	},
	{
		aliases: ["invictus"],
		notes: [
			"Grapefruit",
			"Marine Notes",
			"Bay Leaf",
			"Guaiac Wood",
			"Ambergris"
		],
		family: "Aquatic / Woody"
	},
	{
		aliases: ["1 million", "one million"],
		notes: [
			"Blood Mandarin",
			"Cinnamon",
			"Leather",
			"Amber"
		],
		family: "Spicy / Leather"
	},
	{
		aliases: ["khamrah qahwa", "qahwa"],
		notes: [
			"Coffee",
			"Cardamom",
			"Dates",
			"Tonka",
			"Amber"
		],
		family: "Gourmand / Amber"
	},
	{
		aliases: ["khamrah"],
		notes: [
			"Cinnamon",
			"Dates",
			"Mahonial",
			"Vanilla",
			"Tonka"
		],
		family: "Amber / Gourmand"
	},
	{
		aliases: ["asad", "lattafa asad"],
		notes: [
			"Pineapple",
			"Bergamot",
			"Birch",
			"Patchouli",
			"Musk"
		],
		family: "Fruity / Chypre"
	},
	{
		aliases: ["yara lattafa", "yara"],
		notes: [
			"Orchid",
			"Vanilla",
			"Tonka Bean",
			"Heliotrope"
		],
		family: "Floral / Vanilla"
	},
	{
		aliases: ["ameer al oud", "ameer"],
		notes: [
			"Oud",
			"Saffron",
			"Rose",
			"Amber",
			"Musk"
		],
		family: "Oriental / Oud"
	},
	{
		aliases: ["delina"],
		notes: [
			"Lychee",
			"Turkish Rose",
			"Peony",
			"Vanilla",
			"Musk"
		],
		family: "Floral / Fruity"
	},
	{
		aliases: ["layton", "layton pdm"],
		notes: [
			"Apple",
			"Lavender",
			"Cardamom",
			"Vanilla",
			"Sandalwood"
		],
		family: "Oriental / Woody"
	},
	{
		aliases: ["fakhar"],
		notes: [
			"Apple",
			"Bergamot",
			"Patchouli",
			"Amber",
			"Vanilla"
		],
		family: "Fruity / Amber"
	},
	{
		aliases: ["oud for greatness"],
		notes: [
			"Saffron",
			"Lavender",
			"Oud",
			"Patchouli",
			"Musk"
		],
		family: "Oriental / Oud"
	},
	{
		aliases: ["side effect"],
		notes: [
			"Tobacco",
			"Rum",
			"Cinnamon",
			"Vanilla",
			"Saffron"
		],
		family: "Spicy / Tobacco"
	},
	{
		aliases: ["grand soir"],
		notes: [
			"Amber",
			"Benzoin",
			"Vanilla",
			"Tonka",
			"Cinnamon"
		],
		family: "Amber / Sweet"
	},
	{
		aliases: ["stronger with you"],
		notes: [
			"Cardamom",
			"Pink Pepper",
			"Chestnut",
			"Vanilla"
		],
		family: "Aromatic / Gourmand"
	},
	{
		aliases: ["le male elixir", "le male"],
		notes: [
			"Lavender",
			"Mint",
			"Tobacco",
			"Vanilla",
			"Honey"
		],
		family: "Oriental / Aromatic"
	},
	{
		aliases: ["scandal pour homme", "scandal"],
		notes: [
			"Caramel",
			"Mandarin",
			"Tonka Bean",
			"Vetiver"
		],
		family: "Gourmand / Woody"
	},
	{
		aliases: ["phantom"],
		notes: [
			"Lavender",
			"Lemon",
			"Apple",
			"Vetiver",
			"Patchouli"
		],
		family: "Aromatic / Fresh"
	},
	{
		aliases: ["explorer montblanc", "explorer"],
		notes: [
			"Bergamot",
			"Sage",
			"Leather",
			"Patchouli",
			"Vetiver"
		],
		family: "Woody / Chypre"
	},
	{
		aliases: ["noir extreme"],
		notes: [
			"Cardamom",
			"Saffron",
			"Kulfi",
			"Amber",
			"Vanilla"
		],
		family: "Oriental / Gourmand"
	},
	{
		aliases: ["good girl carolina", "good girl"],
		notes: [
			"Almond",
			"Coffee",
			"Tuberose",
			"Jasmine",
			"Cocoa"
		],
		family: "Floral / Gourmand"
	},
	{
		aliases: ["la vie est belle"],
		notes: [
			"Iris",
			"Praline",
			"Pear",
			"Patchouli",
			"Vanilla"
		],
		family: "Floral / Gourmand"
	},
	{
		aliases: ["alien mugler", "alien"],
		notes: [
			"Jasmine Sambac",
			"Cashmeran",
			"Amber",
			"White Woods"
		],
		family: "Floral / Amber"
	},
	{
		aliases: ["angel mugler", " angel"],
		notes: [
			"Praline",
			"Chocolate",
			"Patchouli",
			"Caramel",
			"Vanilla"
		],
		family: "Gourmand / Oriental"
	},
	{
		aliases: ["212 vip black", "212"],
		notes: [
			"Absinthe",
			"Caviar",
			"Vanilla",
			"Leather",
			"Tonka"
		],
		family: "Oriental / Gourmand"
	},
	{
		aliases: ["polo blue"],
		notes: [
			"Melon",
			"Cucumber",
			"Basil",
			"Suede",
			"Patchouli"
		],
		family: "Aromatic / Aquatic"
	},
	{
		aliases: ["boss bottled"],
		notes: [
			"Apple",
			"Cinnamon",
			"Vanilla",
			"Sandalwood"
		],
		family: "Oriental / Spicy"
	},
	{
		aliases: ["light blue", "dolce light"],
		notes: [
			"Citrus",
			"Juniper",
			"Rose",
			"Amber",
			"Musk"
		],
		family: "Aromatic / Fresh"
	}
];
/** Generic note vocabulary detected directly in free-text input. */
var NOTE_KEYWORDS = [
	["oud", "Oud"],
	["木", "Oud"],
	["vanilla", "Vanilla"],
	["vanille", "Vanilla"],
	["rose", "Rose"],
	["rosa", "Rose"],
	["amber", "Amber"],
	["ambree", "Amber"],
	["musk", "Musk"],
	["musc", "Musk"],
	["saffron", "Saffron"],
	["cardamom", "Cardamom"],
	["tobacco", "Tobacco"],
	["leather", "Leather"],
	["cuir", "Leather"],
	["vetiver", "Vetiver"],
	["vettiver", "Vetiver"],
	["patchouli", "Patchouli"],
	["jasmine", "Jasmine"],
	["bergamot", "Bergamot"],
	["lavender", "Lavender"],
	["coffee", "Coffee"],
	["cafe", "Coffee"],
	["espresso", "Coffee"],
	["cocoa", "Cocoa"],
	["chocolate", "Chocolate"],
	["cacao", "Cocoa"],
	["caramel", "Caramel"],
	["toffee", "Caramel"],
	["honey", "Honey"],
	["cherry", "Black Cherry"],
	["apple", "Apple"],
	["pineapple", "Pineapple"],
	["citrus", "Citrus"],
	["lemon", "Lemon"],
	["orange", "Orange"],
	["mandarin", "Mandarin"],
	["grapefruit", "Grapefruit"],
	["bergamote", "Bergamot"],
	["aquatic", "Sea Notes"],
	["marine", "Marine Notes"],
	["sea", "Sea Notes"],
	["ocean", "Sea Notes"],
	["water", "Sea Notes"],
	["coconut", "Coconut"],
	["tonka", "Tonka"],
	["sandalwood", "Sandalwood"],
	["santal", "Sandalwood"],
	["cedar", "Cedar"],
	["birch", "Birch"],
	["iris", "Iris"],
	["peony", "Peony"],
	["orchid", "Orchid"],
	["fig", "Fig"],
	["rum", "Rum"],
	["cinnamon", "Cinnamon"],
	["canelle", "Cinnamon"],
	["ginger", "Ginger"],
	["pepper", "Pink Pepper"],
	["almond", "Almond"],
	["amande", "Almond"],
	["praline", "Praline"],
	["hazelnut", "Praline"],
	["nocciola", "Praline"],
	["dates", "Dates"],
	["mint", "Mint"],
	["melon", "Melon"],
	["lily", "Lily of the Valley"],
	["ylang", "Ylang-Ylang"],
	["frankincense", "Incense"],
	["incense", "Incense"],
	["bakhoor", "Incense"]
];
var norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
var STOP = new Set([
	"fragrance",
	"perfume",
	"parfum",
	"the",
	"by",
	"de",
	"du",
	"la",
	"le",
	"for",
	"homme",
	"femme",
	"edt",
	"edp",
	"from"
]);
/** Extract known notes from a free-text favorite. */
function extractNotes(text) {
	const n = norm(text);
	const found = /* @__PURE__ */ new Set();
	for (const kb of FRAGRANCE_KB) if (kb.aliases.some((a) => n.includes(norm(a)))) kb.notes.forEach((x) => found.add(x));
	const words = n.split(" ").filter((w) => w.length > 2 && !STOP.has(w));
	for (const [kw, note] of NOTE_KEYWORDS) if (words.some((w) => w === kw || w.startsWith(kw) || kw.startsWith(w))) found.add(note);
	return [...found];
}
/** Map an extracted note to broader accord/family buckets. */
var ACCORD_MAP = {
	Oud: ["Woody", "Oriental"],
	Vanilla: ["Sweet", "Gourmand"],
	Tonka: ["Sweet", "Gourmand"],
	Praline: ["Gourmand", "Sweet"],
	Chocolate: ["Gourmand", "Sweet"],
	Cocoa: ["Gourmand", "Sweet"],
	Caramel: ["Gourmand", "Sweet"],
	Dates: ["Gourmand", "Sweet"],
	Honey: ["Sweet", "Gourmand"],
	Coffee: ["Gourmand", "Boozy"],
	Rum: ["Boozy", "Sweet"],
	Tobacco: ["Boozy", "Smoky"],
	Leather: ["Animalic", "Woody"],
	Birch: ["Smoky", "Woody"],
	Vetiver: ["Earthy", "Woody"],
	Patchouli: ["Earthy", "Chypre"],
	Sandalwood: ["Creamy", "Woody"],
	Cedar: ["Woody", "Dry"],
	Iris: ["Powdery", "Floral"],
	Rose: ["Floral"],
	Jasmine: ["Floral", "White Floral"],
	Peony: ["Floral"],
	Orchid: ["Floral"],
	"Lily of the Valley": ["Floral", "Green"],
	"Ylang-Ylang": ["Floral", "Exotic"],
	"Orange Blossom": ["Floral", "Citrus"],
	Bergamot: ["Citrus", "Fresh"],
	Citrus: ["Citrus", "Fresh"],
	Lemon: ["Citrus", "Fresh"],
	Orange: ["Citrus", "Fresh"],
	Mandarin: ["Citrus", "Fresh"],
	"Blood Mandarin": ["Citrus", "Fresh"],
	Grapefruit: ["Citrus", "Fresh"],
	Ginger: ["Spicy", "Fresh"],
	"Pink Pepper": ["Spicy"],
	Sichuan: ["Spicy"],
	Saffron: ["Spicy", "Oriental"],
	Cinnamon: ["Spicy", "Warm"],
	Cardamom: ["Spicy", "Aromatic"],
	Lavender: ["Aromatic", "Fresh"],
	Sage: ["Aromatic", "Herbal"],
	Mint: ["Fresh", "Cooling"],
	"Sea Notes": ["Aquatic", "Fresh"],
	"Marine Notes": ["Aquatic", "Fresh"],
	Ambroxan: ["Ambery", "Musky"],
	Amber: ["Ambery", "Warm"],
	Ambergris: ["Ambery", "Musky"],
	Amberwood: ["Ambery"],
	Benzoin: ["Ambery", "Sweet"],
	Musk: ["Musky", "Soft"],
	"White Musk": ["Musky", "Soft"],
	Pineapple: ["Fruity"],
	Blackcurrant: ["Fruity"],
	Apple: ["Fruity"],
	"Green Apple": ["Fruity"],
	"Black Cherry": ["Fruity", "Gourmand"],
	Lychee: ["Fruity"],
	Pear: ["Fruity"],
	Melon: ["Fruity"],
	Coconut: ["Fruity", "Tropical"],
	Fig: ["Fruity", "Green"],
	Almond: ["Gourmand", "Nutty"],
	"Oakmoss": ["Chypre", "Earthy"],
	"Cashmeran": ["Woody", "Musky"]
};
var familyTokens = (family) => family.toLowerCase().split(/[/—–-]+/).map((t) => t.trim()).filter(Boolean);
var recommendFragrances_createServerFn_handler = createServerRpc({
	id: "51c8f8916deb1a4c5ecc476206a3b2bc10ca40d856ebbbfdf43ce1ac1a6e115a",
	name: "recommendFragrances",
	filename: "src/lib/api/recommend.functions.ts"
}, (opts) => recommendFragrances.__executeServer(opts));
var recommendFragrances = createServerFn({ method: "POST" }).inputValidator((d) => Input.parse(d)).handler(recommendFragrances_createServerFn_handler, async ({ data }) => {
	const perFavorite = data.favorites.map(extractNotes);
	const noteCount = /* @__PURE__ */ new Map();
	for (const list of perFavorite) for (const note of new Set(list)) noteCount.set(note, (noteCount.get(note) ?? 0) + 1);
	const allNotes = [...noteCount.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([n]) => n);
	const shared = allNotes.filter((n) => (noteCount.get(n) ?? 0) >= 2);
	const profileNotes = [...new Set([...shared, ...allNotes])].slice(0, 8);
	const accordCount = /* @__PURE__ */ new Map();
	for (const note of profileNotes) for (const acc of ACCORD_MAP[note] ?? []) accordCount.set(acc, (accordCount.get(acc) ?? 0) + 1);
	const accords = [...accordCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([a]) => a);
	const wantNotes = new Set(profileNotes);
	const wantAccords = new Set(accords);
	const scored = catalog.map((c) => {
		let score = 0;
		const hits = [];
		for (const note of c.notes) if (wantNotes.has(note)) {
			score += (noteCount.get(note) ?? 1) * 18;
			hits.push(note);
		}
		const toks = familyTokens(c.family);
		for (const acc of wantAccords) if (toks.some((t) => t.includes(acc.toLowerCase()) || acc.toLowerCase().includes(t))) score += 7;
		const tie = c.id.length % 3 * .4;
		return {
			c,
			matchScore: Math.max(0, Math.min(100, Math.round(Math.min(score + tie, 96)))),
			hits
		};
	}).sort((a, b) => b.matchScore - a.matchScore || a.c.id.localeCompare(b.c.id)).slice(0, 10);
	const hasDna = profileNotes.length > 0;
	const matches = (hasDna ? scored : scored.slice(0, 10)).map(({ c, matchScore, hits }) => {
		const sharedNames = hits.length ? hits : c.notes.slice(0, 2);
		const reason = data.lang === "ar" ? hasDna ? `يشترك مع ذوقك في ${sharedNames.slice(0, 3).join("، ")} من عائلته العطرية ${c.family}.` : "اختيار من تشكيلتنا الأكثر تميزاً." : hasDna ? `Shares ${sharedNames.slice(0, 3).join(", ")} with your taste, in the ${c.family} family.` : "A signature pick from our house.";
		return {
			id: c.id,
			name: data.lang === "ar" ? c.nameAr : c.name,
			inspiredBy: data.lang === "ar" ? c.inspiredByAr : c.inspiredBy,
			matchScore: hasDna ? matchScore : Math.max(60, 90 - matchScore % 30),
			reason
		};
	});
	const summary = data.lang === "ar" ? hasDna ? `ذوقك يميل إلى ${accords.slice(0, 2).join(" و")} مع نوتات مثل ${profileNotes.slice(0, 3).join("، ")}.` : "لم نتعرف على نوتات محددة من اختياراتك، إليك أبرز تشكيلتنا." : hasDna ? `You gravitate toward ${accords.slice(0, 2).join(" and ")} scents built around ${profileNotes.slice(0, 3).join(", ")}.` : "No specific notes were detected in your picks — here are our house signatures.";
	return {
		matches,
		profile: {
			notes: hasDna ? profileNotes : [],
			accords: hasDna ? accords : [],
			summary
		}
	};
});
//#endregion
export { recommendFragrances_createServerFn_handler };
