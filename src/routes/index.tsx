import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/i18n/LangProvider";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AIPicker } from "@/components/AIPicker";
import { Collection } from "@/components/Collection";
import { Offers } from "@/components/Offers";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura — Fragrances From Above the Clouds" },
      { name: "description", content: "Aura is a fragrance house born above the clouds. AI-matched scents, exclusive collection, and signature offers." },
      { property: "og:title", content: "Aura — Fragrances" },
      { property: "og:description", content: "AI-matched fragrances from the Aura house. Find your scent." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-[#0a1628] text-white antialiased">
        <Nav />
        <main>
          <Hero />
          <AIPicker />
          <Collection />
          <Offers />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
