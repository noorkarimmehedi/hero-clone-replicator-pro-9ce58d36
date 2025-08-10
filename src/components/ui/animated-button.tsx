'use client';
import React, { useState } from 'react';
import { Liquid } from '@/components/ui/button-1';

const COLORS = {
  color1: '#FFFFFF',
  color2: '#4338ca',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#818cf8',
  color7: '#4f46e5',
  color8: '#4338ca',
  color9: '#3730a3',
  color10: '#312e81',
  color11: '#1e1b4b',
  color12: '#C5C1EA',
  color13: '#4338ca',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#4338ca',
  color17: '#3730a3',
};

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className = "",
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block w-[300px] h-[60px] group">
      <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Liquid isHovered={isHovered} colors={COLORS} />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
        <span className="absolute inset-0 rounded-lg bg-black"></span>
        <Liquid isHovered={isHovered} colors={COLORS} />
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'}`}></span>
        ))}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
      </div>
      <button
        className={`absolute inset-0 rounded-lg bg-transparent cursor-pointer z-10 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <span className="flex items-center justify-center px-4 gap-2 rounded-lg text-white text-xl font-semibold tracking-wide whitespace-nowrap">
          {children}
        </span>
      </button>
    </div>
  );
};
