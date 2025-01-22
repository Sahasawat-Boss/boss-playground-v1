import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';

function Hero() {
  const typedRef = useRef(null); // Ref for the element
  const typedInstance = useRef(null); // Ref for the Typed.js instance

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ['Boss PlayGround', 'Explore Create Innovate'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };

      // Initialize Typed.js
      typedInstance.current = new Typed(typedRef.current, options);
    }

    // Cleanup Typed.js on component unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

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
      <div className="relative flex flex-col justify-center items-center text-center z-10 text-white">
        {/* Typing Effect */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10">
          <span
            ref={typedRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"
          ></span>
        </h1>

        {/* Description */}
        <p className="mt-4 px-4 text-lg sm:text-xl text-gray-300">
          Welcome to Boss Playground, where creativity meets innovation.
        </p>
        <p className="mt-4 px-6 text-lg sm:text-xl text-gray-300">
          Sign in to explore your personalized dashboard, exclusive features, and level up your
          skills.
        </p>

        {/* Call-to-action Button */}
        <Link
          href="/signIn"
          className="relative mt-16 px-12 py-3 text-lg font-semibold rounded-full bg-white text-black shadow-lg shadow-blue-400/80 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 text-xl">Get Started Now</span>
          <span
            className="absolute inset-0 rounded-full bg-sky-100 blur-md opacity-30 transition-all duration-300"
          ></span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
