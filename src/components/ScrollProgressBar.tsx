import { useScrollProgress } from "@/hooks/useScrollAnimation";

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/20 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-gaming transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div 
        className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-gaming-purple/50 blur-sm transition-all duration-300"
        style={{ left: `${Math.max(0, progress - 2)}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;