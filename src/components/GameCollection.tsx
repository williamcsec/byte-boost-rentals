import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import warzoneImage from "@/assets/game-warzone.jpg";
import horizonImage from "@/assets/game-horizon.jpg";
import sportsImage from "@/assets/game-sports.jpg";

const games = [
  {
    id: 1,
    title: "Call of Duty: Warzone",
    image: warzoneImage,
    isVR: false
  },
  {
    id: 2,
    title: "Horizon Call of the Mountain",
    image: horizonImage,
    isVR: true
  },
  {
    id: 3,
    title: "Extreme Sports Collection",
    image: sportsImage,
    isVR: false
  }
];

const GameCollection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Epic Game Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium PS5 games ready to play
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <div 
              key={game.id} 
              className="group relative overflow-hidden rounded-2xl bg-card hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {game.isVR && (
                <div className="absolute top-4 right-4 bg-gaming-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                  VR
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {game.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gaming" size="lg">
            View All Games
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCollection;