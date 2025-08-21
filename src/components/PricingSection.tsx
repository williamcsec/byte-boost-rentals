import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Gamepad2, Headphones, Shield, Clock, Users, Monitor } from "lucide-react";

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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use your Early Bird credits on any gaming session!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gaming text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}/20 mb-4 mx-auto`}>
                  <plan.icon className={`h-8 w-8 text-${plan.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
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
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 text-${plan.color} flex-shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-card rounded-2xl p-8 border border-border">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gaming-green/20 rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-gaming-green" />
            </div>
            <span className="text-lg font-semibold text-gaming-green">
              Early Bird Tip:
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            Your ₹50 free credits can cover half a gaming session!
          </p>
          <Button variant="hero" size="lg">
            Book Your Session Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;