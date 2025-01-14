import React from 'react'
import Link from 'next/link';

function Hero() {
  return (
    <div
      className="relative flex  items-center justify-center h-[65vh] p-10"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}
    >
      {/* Dark overlay + Animated Background Zoom*/}
      <div
        className="absolute inset-0 bg-white dark:bg-black opacity-80 "
        style={{
          zIndex: 0,

        }}
      ></div>

      {/* Add Animation: animate-floating and animate-fade-in-up*/}
      <div className="flex-col justify-center items-center text-center z-10 text-black font-semibold dark:text-white dark:font-normal ">
        <h3 className="text-6xl mb-12 font-bold animate-floating drop-shadow-lg">Boss PlayGround</h3>

        {/* ===Top Content=== */}
        <p className="pt-6 pb-6  px-36 text-xl animate-fade-in-up">Welcome to Boss Playground!</p>
        <p className="px-36 text-xl mb-16 animate-fade-in-up">Sign in to access your personalized dashboard, explore exclusive features, and take your experience to the next level.</p>
        <Link
          className="relative px-16 py-3 text-white dark:text-black text-xl font-semibold bg-black dark:bg-white shadow-lg shadow-red-500 rounded-full 
                  hover:bg-black hover:text-white hover:shadow-sky-500 transition animate-fade-in-up"
          href="/signIn">
          <span className="relative z-0">Get Start Now</span>
          <span
            className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 blur-xl opacity-0 rounded-lg 
                    hover:opacity-50 transition-all duration-300"
          ></span>
        </Link>

      </div>
    </div>

  )
}

export default Hero