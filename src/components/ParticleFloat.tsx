import { useParallax } from "@/hooks/useScrollAnimation";

interface ParticleFloatProps {
  className?: string;
  speed?: number;
  children?: React.ReactNode;
}

const ParticleFloat = ({ className = "", speed = 0.3, children }: ParticleFloatProps) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div
      ref={ref}
      className={`absolute animate-particle-float ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children || (
        <div className="w-2 h-2 bg-gaming-purple/30 rounded-full blur-sm" />
      )}
    </div>
  );
};

export default ParticleFloat;