
import React from 'react';

const ResumeCard = () => {
  return (
    <div className="floating-card relative">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 w-80 h-96 shadow-2xl border border-gray-700 backdrop-blur-sm neon-glow">
        {/* Card hole and lanyard */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-600"></div>
          <div className="w-1 h-16 bg-gradient-to-b from-gray-600 to-transparent mx-auto"></div>
        </div>
        
        {/* Profile section */}
        <div className="text-center mt-8">
          <div className="relative mx-auto w-20 h-20 mb-4">
            <div className="w-20 h-20 bg-gray-600 rounded-full border-4 border-gray-500 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            {/* Particles around avatar */}
            <div className="absolute inset-0">
              <div className="absolute top-2 right-2 w-1 h-1 bg-emerald-400 rounded-full glow-effect"></div>
              <div className="absolute bottom-3 left-1 w-1 h-1 bg-emerald-400 rounded-full glow-effect" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-6 left-0 w-1 h-1 bg-emerald-400 rounded-full glow-effect" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1 right-4 w-1 h-1 bg-emerald-400 rounded-full glow-effect" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          
          <h2 className="text-white text-xl font-bold mb-1">THOMAS</h2>
          <h2 className="text-white text-xl font-bold mb-3">JENKINS</h2>
          <p className="text-emerald-400 text-sm mb-6">thomas.eth</p>
        </div>
        
        {/* Location section */}
        <div className="absolute bottom-6 left-6">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</p>
          <p className="text-white text-sm font-medium">NEW YORK, NY</p>
        </div>
        
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 shimmer rounded-2xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ResumeCard;
