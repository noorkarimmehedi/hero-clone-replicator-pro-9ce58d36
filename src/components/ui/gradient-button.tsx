import React from 'react';
import './gradient-button.css';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <div className="gradient-button-flex">
      <button 
        className={cn("gradient-button", className)}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
