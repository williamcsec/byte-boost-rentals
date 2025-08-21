import { Button } from "@/components/ui/button";
import { Gamepad2, Home, Calendar, User, LogIn, UserPlus } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Gamepad2 className="h-8 w-8 text-primary animate-float" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-glow-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              GameOn
            </span>
            <span className="text-sm text-muted-foreground">Premium Gaming Rentals</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Button variant="nav" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button variant="nav" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              Games
            </Button>
            <Button variant="nav" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book Now
            </Button>
            <Button variant="nav" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </Button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button variant="gaming" size="sm" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;