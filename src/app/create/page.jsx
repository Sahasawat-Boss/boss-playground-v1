"use client"

import Container from "../components/container";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Link from 'next/link';

function createContent() {
return (
<Container>
    <NavBar/>
    <div className="flex-grow bg-[#191925]">
    <Link href="/WelcomePage" className='bg-blue-700 inline-block text-white py-2 px-3 rounded mt-10 ml-10 hover:bg-blue-400'>
        Go back
    </Link>
    <div className='container bg-white w-[400px] mx-auto shadow-xl my-10 p-6 rounded-xl'>
        <div className="flex flex-col items-center justify-center">            
        <h3 className='text-xl font-bold my-1'>Create Content</h3>

        {/*Form Create Content*/}
        <form >
            <input 
            type="text" 
            className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            placeholder='Content Title' 
            />
            <input 
            type="text" 
            className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            placeholder='Content Img (url)' 
            />
            <textarea 
            className='w-[300px] h-[200px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder='Enter Content Details'>
            </textarea>

            {/* Centering the button */}
            <div className="flex justify-center w-full">
            <button 
                type='submit' 
                name='create' 
                className='bg-green-800 text-white border py-2 px-3 rounded-lg text-lg my-2 hover:bg-green-600'>
                Create Content
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>

    {/* === Create Post Section === */}
    <Footer />
</Container>
);
}

export default createContent;
