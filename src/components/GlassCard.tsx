import { ReactNode, CSSProperties, MouseEventHandler } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  float?: boolean;
  style?: CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const GlassCard = ({ 
  children, 
  className, 
  hover = true, 
  float = false, 
  style,
  onMouseEnter,
  onMouseLeave
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'travel-card',
        hover && 'hover:bg-white/95 hover:border-orange-300/60 hover:shadow-3xl transition-all duration-500 hover:scale-105',
        float && 'animate-float',
        className
      )}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
