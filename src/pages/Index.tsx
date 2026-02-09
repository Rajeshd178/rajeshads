import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdSection, { printAds, tvAds, socialAds, outdoorAds } from "@/components/AdSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <AdSection
        id="print"
        emoji="📰"
        title="Print Advertisements"
        subtitle="The Times of India – 6 Feb 2026"
        ads={printAds}
      />

      <AdSection
        id="tv"
        emoji="📺"
        title="Television Advertisements"
        subtitle="Emotional storytelling through motion"
        ads={tvAds}
      />

      <AdSection
        id="social"
        emoji="📱"
        title="Social Media Advertisements"
        subtitle="Digital-first brand strategies"
        ads={socialAds}
      />

      <AdSection
        id="outdoor"
        emoji="🏙️"
        title="Outdoor Advertisements"
        subtitle="High-impact billboard campaigns"
        ads={outdoorAds}
      />

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center">
        <p className="font-display text-lg text-gradient-gold">Advertising Journal</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Rajesh Thami D · Chanakya University · Minor in Marketing & Advertising Management
        </p>
        <p className="mt-1 text-xs text-text-dim">Submitted: 10-02-2026</p>
      </footer>
    </div>
  );
};

export default Index;
