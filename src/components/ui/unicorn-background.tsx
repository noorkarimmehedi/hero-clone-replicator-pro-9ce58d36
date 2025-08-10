import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

interface UnicornBackgroundProps {
  projectId: string;
  width?: string;
  height?: string;
  className?: string;
}

export const UnicornBackground = ({ 
  projectId, 
  width = "100%", 
  height = "100%",
  className = ""
}: UnicornBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      data-us-project={projectId} 
      style={{ width, height }}
      className={`absolute inset-0 ${className}`}
    />
  );
};
