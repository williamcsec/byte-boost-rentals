import { Button } from "@/components/ui/button";
import { Play, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import ParticleFloat from "@/components/ParticleFloat";

const HeroSection = () => {
  const { ref: bgRef, offset: bgOffset } = useParallax(0.2);
  const { ref: contentRef, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: false });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0"
        style={{ transform: `translateY(${bgOffset}px)` }}
      >
        <img 
          src={heroImage} 
          alt="Gaming Setup" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-slide-up-fade' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-gaming bg-clip-text text-transparent animate-gradient-shift bg-[length:400%_400%]">
              GameOn
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-up-fade' : 'opacity-0 translate-y-8'
          }`}>
            Premium PS5 Gaming Rentals for Students
          </p>
          
          <p className={`text-lg text-muted-foreground mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slide-up-fade' : 'opacity-0 translate-y-8'
          }`}>
            Experience next-gen gaming with our high-end PS5 setup. Book by the hour 
            and dive into epic adventures.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-scale-rotate' : 'opacity-0 scale-95'
          }`}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform shadow-glow-gaming">
              <Play className="h-5 w-5 mr-2" />
              Start Gaming Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto border border-gaming-green/30 hover:border-gaming-green/60 backdrop-blur-sm hover:scale-105 transition-all shadow-glow-accent">
              <Calendar className="h-5 w-5 mr-2" />
              Browse Games
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <ParticleFloat className="top-20 left-10" speed={0.4}>
        <div className="w-20 h-20 bg-gaming-purple/20 rounded-full blur-xl" />
      </ParticleFloat>
      
      <ParticleFloat className="bottom-20 right-10" speed={0.6}>
        <div className="w-32 h-32 bg-gaming-blue/20 rounded-full blur-xl" />
      </ParticleFloat>
      
      <ParticleFloat className="top-1/2 right-20" speed={0.3}>
        <div className="w-16 h-16 bg-gaming-green/20 rounded-full blur-xl" />
      </ParticleFloat>

      {/* Additional particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gaming-pink/40 rounded-full animate-particle-float" />
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-gaming-orange/40 rounded-full animate-particle-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gaming-purple/50 rounded-full animate-particle-float" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default HeroSection;