import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassButton = ({ children, className, onClick }: GlassButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-white/10 border border-white/20 backdrop-blur-lg rounded-full font-semibold text-white transition-all duration-300 ease-in-out',
        'hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20',
        'active:scale-100 active:bg-white/25',
        className
      )}
    >
      {children}
    </button>
  );
};
