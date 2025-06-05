
import React from 'react';

const AvatarGroup = () => {
  const avatars = [
    { id: 1, bg: 'bg-purple-500' },
    { id: 2, bg: 'bg-blue-500' },
    { id: 3, bg: 'bg-emerald-500' },
    { id: 4, bg: 'bg-orange-500' },
    { id: 5, bg: 'bg-pink-500' },
  ];

  return (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-2">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`w-8 h-8 rounded-full border-2 border-gray-800 ${avatar.bg} flex items-center justify-center`}
          >
            <div className="w-4 h-4 bg-white bg-opacity-30 rounded-full"></div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600">
          <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="ml-2 text-gray-400 text-sm">Join 4,592 job seekers</span>
      </div>
    </div>
  );
};

export default AvatarGroup;
