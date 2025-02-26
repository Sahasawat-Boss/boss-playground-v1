"use client";

import { useState } from "react";
import Container from "../components/container";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Link from 'next/link';

function EditContent() {
    // State to manage form values
    const [title, setTitle] = useState("Content Title Mockup Data");
    const [imageUrl, setImageUrl] = useState("URL Mockup Data");
    const [details, setDetails] = useState("Content Details Mockup Data");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, imageUrl, details });
        // Add your form submission logic here
    };

    return (
        <Container>
            <NavBar />
            <div className="flex-grow bg-[#191925]">
                <Link href="/WelcomePage" className='bg-blue-700 inline-block text-white py-2 px-3 rounded mt-10 ml-10 hover:bg-blue-400'>
                    Go back
                </Link>
                <div className='container text-black bg-white w-[400px] mx-auto shadow-xl my-10 p-6 rounded-xl'>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='text-xl font-bold my-1'>Edit This Content</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
                                placeholder='Content Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
                                placeholder='Content Img (url)'
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                            <textarea
                                className='w-[300px] h-[200px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2'
                                placeholder='Enter Content Details'
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                            <div className="flex justify-center w-full">
                                <button
                                    type='submit'
                                    className='bg-blue-700 text-white border py-2 px-3 rounded-lg text-lg my-2 hover:bg-blue-500'>
                                    Edit Content
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
}

export default EditContent;
