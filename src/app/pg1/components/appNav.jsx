import React from 'react'
import Link from 'next/link'

function AppNav() {
    return (
        <div className='pt-1 pb-20'>
            <h1 className="text-3xl text-center text-black dark:text-white pt-3 pb-8 font-semibold animate-fade-in">
                Application
            </h1>
            <div className="flex justify-evenly gap-7 px-24">
                {/* App Link */}
                <div>
                    <Link href={"/pg1/app1"}>
                        <div className="text-center max-w-sm w-fit px-4 pt-5 pb-3 rounded-lg text-black dark:text-black bg-white shadow-md shadow-[#a3a3a3] dark:shadow-none cursor-pointer hover:shadow-blue-600 dark:hover:shadow-blue-600 hover:shadow-lg dark:hover:shadow-lg transition hover:scale-105 animate-fade-in-up">
                            <h2 className="text-xl font-bold mb-2">CRUD Application v.2</h2>
                        </div>
                    </Link>
                </div>
                {/* App Link */}

                {/* App Description*/}
                <div>
                    <div className="w-80 animate-fade-in-right-left">
                        <h1>CRUD V.2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis commodi aperiam, nam debitis consequuntur tempore.</p>
                    </div>
                </div>
                {/* App Description */}
            </div>
        </div>
    )
}

export default AppNav