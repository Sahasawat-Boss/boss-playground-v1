import React from 'react'

function YTvdo() {
    {/* === YT VDO-Embed Code === */ }

    return (
        <div className='pb-10 animate-fade-in' >
            <div className=' text-black dark:text-white pl-[15%] py-6 '>
                <h1 className='text-2xl font-semibold '> Lofi Chill Beats 🌙</h1>
                <h1>Stress Relief, Study, Work with Chillhop Mix [ Chill Music ]</h1>
            </div>
            <div className="flex text-white gap-8 justify-center items-center ">
                {/*VDO Card*/}
                <div className="transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#555555] dark:shadow-none" >
                    <iframe width="355" height="200" src="https://www.youtube.com/embed/zhauOY7qLog?si=IZytsSCrcztJ4Aqe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#727272] dark:shadow-none">
                    <iframe width="355" height="200" src="https://www.youtube.com/embed/i0qxKh4qNNk?si=75HaW1eqWLxY1lfB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default YTvdo