"use client";

import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { useRouter } from 'next/navigation';

function Hero() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ['Boss PlayGround', 'Explore Create Innovate'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };

      typedInstance.current = new Typed(typedRef.current, options);
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const handleButtonClick = () => {
    setIsLoading(true);
    router.push('/signIn');
  };

  // Listen for route changes & stop loading when complete
  useEffect(() => {
    const handleRouteChange = () => setIsLoading(false);

    router.events?.on('routeChangeComplete', handleRouteChange);
    router.events?.on('routeChangeError', handleRouteChange);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
      router.events?.off('routeChangeError', handleRouteChange);
    };
  }, [router]);

  return (
    <div
      className="relative flex items-center justify-center h-[65vh] xl:h-[80vh] p-10"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center text-center z-10 text-white animate-fade-in">
        {/* Typing Effect */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10">
          <span
            ref={typedRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"
          ></span>
        </h1>

        {/* Description */}
        <p className="mt-4 px-4 text-lg sm:text-xl text-gray-300 animate-fade-in-up">
          Welcome to Boss Playground, where creativity meets innovation.
        </p>
        <p className="mt-4 px-6 text-lg sm:text-xl text-gray-300 animate-fade-in-up">
          Sign in to explore your personalized dashboard, exclusive features, and level up your skills.
        </p>

        {/* Call-to-action Button with Loading */}
        <button
          onClick={handleButtonClick}
          disabled={isLoading}
          className={`relative mt-16 px-12 py-3 text-lg font-semibold rounded-full bg-white text-black shadow-lg shadow-blue-400/80 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent animate-spin rounded-full"></div>
              <span className="relative z-10 text-lg">Loading...</span>
            </div>
          ) : (
            <span className="relative z-10 text-xl">Get Started Now</span>
          )}
          <span className="absolute inset-0 rounded-full bg-sky-100 blur-md opacity-30 transition-all duration-300"></span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
