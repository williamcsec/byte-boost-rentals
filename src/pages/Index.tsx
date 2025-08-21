import Navigation from "@/components/Navigation";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import GameCollection from "@/components/GameCollection";
import PricingSection from "@/components/PricingSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navigation />
      <PromoBanner />
      <HeroSection />
      <StatsSection />
      <GameCollection />
      <PricingSection />
    </div>
  );
};

export default Index;
