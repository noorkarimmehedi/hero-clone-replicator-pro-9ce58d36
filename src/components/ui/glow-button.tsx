import React from 'react';
import './glow-button.css';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <div className="glow-button-wrapper">
      <div className="glow-effect" />
      <div className="dark-border-bg" />
      <div className="white-border" />
      <div className="border-effect" />
      <button 
        className={cn("glow-button", className)}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
