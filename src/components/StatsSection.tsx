import { Users, Clock, Star, Trophy } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Gamers",
    color: "gaming-blue"
  },
  {
    icon: Clock,
    value: "2,000+",
    label: "Hours Played",
    color: "gaming-purple"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Rating",
    color: "gaming-orange"
  },
  {
    icon: Trophy,
    value: "50+",
    label: "Games",
    color: "gaming-green"
  }
];

const StatsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(stats.length, 150);
  const [animatedValues, setAnimatedValues] = useState<string[]>([]);

  // Animate numbers when section becomes visible
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => [...prev, stat.value]);
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group hover:scale-105 transition-all duration-500 ${
                visibleItems.includes(index) 
                  ? 'animate-glow-trail' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/20 mb-4 group-hover:bg-${stat.color}/30 transition-colors shadow-lg group-hover:shadow-glow-gaming`}>
                <stat.icon className={`h-8 w-8 text-${stat.color} ${visibleItems.includes(index) ? 'animate-bounce' : ''}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold text-foreground mb-2 ${
                animatedValues.includes(stat.value) ? 'animate-number-counter' : ''
              }`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-gaming-purple/40 rounded-full animate-particle-float" />
        <div className="absolute top-32 right-20 w-2 h-2 bg-gaming-blue/30 rounded-full animate-particle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-gaming-pink/40 rounded-full animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-gaming-green/40 rounded-full animate-particle-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default StatsSection;