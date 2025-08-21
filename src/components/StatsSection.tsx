import { Users, Clock, Star, Trophy } from "lucide-react";

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
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/20 mb-4 group-hover:bg-${stat.color}/30 transition-colors`}>
                <stat.icon className={`h-8 w-8 text-${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;