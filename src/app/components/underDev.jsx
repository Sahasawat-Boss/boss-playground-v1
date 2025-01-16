import React from 'react'

function UnderDev() {
    return (
        <>
            {/* === Under Development Section === */}
            <div className="py-6 text-white text-xl text-center flex flex-col items-center justify-center bg-[#9c6e6e] dark:bg-[#3a0c0c] w-full shadow-md shadow-[#797979] dark:shadow-none animate-fade-in">
                <p>------------- Under Development -------------</p>
                <img
                    src="https://i0.wp.com/www.bapl.org/wp-content/uploads/2019/02/old-under-construction-gif.gif?fit=266%2C266&ssl=1"
                    className="my-10 h-[100px]  opacity-85"
                ></img>
                <p>------------- Under Development -------------</p>
            </div>
            {/* === Under Development Section === */}
        </>
    )
}

export default UnderDev