import { Gift, Star, Clock } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-accent text-white py-3 px-4 animate-glow-pulse">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 text-center">
          <Star className="h-5 w-5 text-gaming-orange animate-float" />
          <Gift className="h-5 w-5 text-gaming-orange animate-float" />
          <span className="font-semibold text-lg">
            EARLY BIRD SPECIAL!
          </span>
          <span className="text-white/90">
            First 200 users get ₹50 FREE credits to spend on gaming sessions!
          </span>
          <Star className="h-5 w-5 text-gaming-orange animate-float" />
          <Gift className="h-5 w-5 text-gaming-orange animate-float" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;