"use client";

import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';

function editContent() {
    return (
        <Container>
            <NavBar />
            <div className="flex-grow bg-[#191925]">
                <Link href="/WelcomePage" className='bg-blue-700 inline-block text-white py-2 px-3 rounded mt-10 ml-10 hover:bg-blue-400'>
                    Go back
                </Link>
                <div className='container bg-white w-[400px] mx-auto shadow-xl my-10 p-6 rounded-xl'>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='text-xl font-bold my-1'>Edit This Content</h3>
                        <form action="">
                            <input
                                type="text"
                                className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
                                placeholder='Content Title'
                                value="Content Title Mockup Data"
                            />
                            <input
                                type="text"
                                className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
                                placeholder='Content Img (url)'
                                value="URL Mockup Data"
                            />
                            <textarea
                                className='w-[300px] h-[200px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder='Enter Content Details'
                                value="Content Details Mockup Data" >
                            </textarea>

                            {/* Centering the button */}
                            <div className="flex justify-center w-full">
                                <button
                                    type='submit'
                                    name='create'
                                    className='bg-blue-700 text-white border py-2 px-3 rounded-lg text-lg my-2 hover:bg-blue-500'>
                                    Edit Content
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* === Edit Post Section === */}
            <Footer />
        </Container>
    );
}

export default editContent;
