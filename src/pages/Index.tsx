
import React from 'react';
import AvatarGroup from '../components/AvatarGroup';
import ProfileCard from '../components/ProfileCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Green light effects */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-emerald-400 rounded-full opacity-5 blur-3xl"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-40 left-10 w-px h-32 bg-gradient-to-b from-emerald-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-40 right-10 w-px h-24 bg-gradient-to-t from-emerald-500 to-transparent opacity-30"></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-60 glow-effect"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-emerald-400 rounded-full opacity-40 glow-effect" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-50 glow-effect" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-8">
          <h1 className="text-white text-2xl font-bold">uHired</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Web3 Talent</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Domain</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full border border-gray-600"></div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="relative z-10 flex items-center justify-between px-6 py-12 max-w-7xl mx-auto min-h-[calc(100vh-120px)]">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <div className="mb-8">
            <AvatarGroup />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stand out against the{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              crowd with your very own NFT resume
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Create, mint, and apply in minutes.
          </p>
          
          <Button className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Mint your resume
          </Button>
        </div>
        
        {/* Right content - ProfileCard */}
        <div className="flex-1 flex justify-center items-center">
          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
