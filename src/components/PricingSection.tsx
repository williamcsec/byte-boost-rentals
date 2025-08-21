import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Gamepad2, Headphones, Shield, Clock, Users, Monitor } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const pricingPlans = [
  {
    title: "Standard Gaming",
    price: "₹99",
    period: "per hour",
    description: "Perfect for casual gaming sessions",
    icon: Gamepad2,
    color: "gaming-blue",
    features: [
      "Any PS5 Game",
      "1-2 Players",
      "AAA 4K Gaming",
      "Standard Controller"
    ],
    popular: false
  },
  {
    title: "VR Experience",
    price: "₹239",
    period: "per hour",
    description: "Immersive virtual reality gaming",
    icon: Headphones,
    color: "gaming-purple",
    features: [
      "VR Games Only",
      "Immersive Experience",
      "Motion Controls",
      "Premium Headset"
    ],
    popular: true
  },
  {
    title: "Confirmed Slot",
    price: "+₹30",
    period: "no cancellation",
    description: "Guarantee your gaming time",
    icon: Shield,
    color: "gaming-green",
    features: [
      "Guaranteed Time",
      "Priority Booking",
      "No Override",
      "Flexible Duration"
    ],
    popular: false
  }
];

const PricingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(pricingPlans.length, 200);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'animate-slide-down-fade' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use your Early Bird credits on any gaming session!
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border hover:scale-105 transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-primary shadow-glow-gaming' : ''
              } ${
                visibleItems.includes(index) 
                  ? 'animate-slide-up-fade' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-gaming text-white px-4 py-1 rounded-full text-sm font-semibold animate-glow-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}/20 mb-4 mx-auto transition-all duration-300 group-hover:bg-${plan.color}/30 shadow-lg`}>
                  <plan.icon className={`h-8 w-8 text-${plan.color} ${
                    visibleItems.includes(index) ? 'animate-scale-rotate' : ''
                  }`} style={{ animationDelay: `${index * 200 + 300}ms` }} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className={`text-4xl font-bold text-foreground ${
                    visibleItems.includes(index) ? 'animate-number-counter' : ''
                  }`} style={{ animationDelay: `${index * 200 + 500}ms` }}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-center gap-3 transition-all duration-300 ${
                        visibleItems.includes(index) 
                          ? 'animate-slide-right-fade' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ animationDelay: `${index * 200 + featureIndex * 100 + 600}ms` }}
                    >
                      <Check className={`h-5 w-5 text-${plan.color} flex-shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`text-center bg-gradient-card rounded-2xl p-8 border border-border relative overflow-hidden transition-all duration-1000 ${
            ctaVisible 
              ? 'animate-glow-trail' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-8 h-8 bg-gaming-green/20 rounded-full flex items-center justify-center transition-all duration-500 ${
              ctaVisible ? 'animate-scale-rotate' : ''
            }`}>
              <Check className="h-5 w-5 text-gaming-green" />
            </div>
            <span className="text-lg font-semibold text-gaming-green">
              Early Bird Tip:
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            Your ₹50 free credits can cover half a gaming session!
          </p>
          <Button variant="hero" size="lg" className="shadow-glow-gaming hover:shadow-glow-accent transition-all duration-300">
            Book Your Session Now
          </Button>
          
          {/* Background particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 right-8 w-2 h-2 bg-gaming-green/30 rounded-full animate-particle-float" />
            <div className="absolute bottom-6 left-10 w-1.5 h-1.5 bg-gaming-blue/40 rounded-full animate-particle-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-8 left-1/3 w-1 h-1 bg-gaming-purple/35 rounded-full animate-particle-float" style={{ animationDelay: '3.5s' }} />
          </div>
        </div>
      </div>

      {/* Section background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-5 w-4 h-4 bg-gaming-orange/20 rounded-full animate-particle-float" />
        <div className="absolute bottom-32 right-8 w-3 h-3 bg-gaming-pink/25 rounded-full animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gaming-purple/30 rounded-full animate-particle-float" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default PricingSection;