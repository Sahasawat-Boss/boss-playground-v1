"use client";

import { useEffect, useState } from 'react';
import BackButton from './components/backButton';

export default function NotFound() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; // Prevent rendering on server

    return (
        <div className="bg-gray-100  min-h-screen flex flex-col justify-center items-center relative">
            <div className="flex gap-4">
                <img
                    src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
                    alt="Cogs and settings icon"
                    className="h-[70px] drop-shadow-sm"
                />
                <div>
                    <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-center text-gray-700 dark:text-white mb-4">
                        404 | This page is Under Construction
                    </h1>
                    <p className="text-center text-gray-500 text-lg md:text-lg lg:text-xl">
                        Boss is improving the Boss PlayGround. Stay tuned!
                    </p>
                </div>
            </div>

            {/* BackButton*/}
            <div className="group bg-white rounded-2xl py-2 px-4 hover:bg-gray-600 shadow-lg my-20">
                <BackButton />
            </div>

            {/* Video: เพื่ม property ได้ เช่น controls*/}
            <video
                src="/vdo/BossIMG.mp4"
                className="h-[140px] rounded-full shadow-lg shadow-gray-600/40 opacity-95 absolute bottom-36"
                autoPlay
                muted
                loop
            ></video>
        </div>
    );
}
