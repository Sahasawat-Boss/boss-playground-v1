import React from 'react'

function UnderDev() {
    return (
        <>
            {/* === Under Development Section === */}
            <div className="py-6 text-white text-xl text-center flex flex-col items-center justify-center bg-[#4d0e0e] w-full">
                <p>------------- Under Development -------------</p>
                <video
                    src="/vdo/BossIMG.mp4"
                    className="my-3 h-[150px] rounded-xl shadow-lg shadow-gray-600/40 opacity-95"
                    autoPlay
                    muted
                    loop
                ></video>
                <p>------------- Under Development -------------</p>
            </div>
            {/* === Under Development Section === */}
        </>
    )
}

export default UnderDev