
import React from 'react';
import AvatarGroup from '../components/AvatarGroup';
import ProfileCard from '../components/ProfileCard';
import { AnimatedButton } from '@/components/ui/animated-button';
import { UnicornBackground } from '@/components/ui/unicorn-background';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Unicorn Studio Background Animation */}
      <UnicornBackground 
        projectId="hEFoJKcC8cD1sZVuNMBj"
        width="100%"
        height="100%"
        className="z-0"
      />
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-8">
          <h1 className="text-white text-2xl font-bold">uHired</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Web3 Talent</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Domain</a>
          </nav>
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
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transform your resume into a unique NFT.
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl mb-4 max-w-md">
            Stand out in the digital talent marketplace with blockchain-verified credentials.
          </p>
          
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Create, mint, and start applying in minutes.
          </p>
          
          <div className="flex justify-start items-center w-full">
            <AnimatedButton className="text-lg font-semibold">
              Mint your resume
            </AnimatedButton>
          </div>
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
