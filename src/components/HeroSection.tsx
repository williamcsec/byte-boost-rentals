import { Button } from "@/components/ui/button";
import { Play, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gaming Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              GameOn
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Premium PS5 Gaming Rentals for Students
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience next-gen gaming with our high-end PS5 setup. Book by the hour 
            and dive into epic adventures.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              <Play className="h-5 w-5 mr-2" />
              Start Gaming Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto border border-gaming-green/30 hover:border-gaming-green/60 backdrop-blur-sm">
              <Calendar className="h-5 w-5 mr-2" />
              Browse Games
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gaming-purple/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gaming-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gaming-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;