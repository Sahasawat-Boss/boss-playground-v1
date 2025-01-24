"use client";

import UploadForm from './components/UploadForm';
import { useSession } from 'next-auth/react'
import Container from "../../components/container";
import NavBar from "../../Components/nav";
import Footer from "../../Components/footer";
import BackButton from "../../components/backButton";
import ScrollUpButton from "@/app/components/scrollUp";


function lessionDB() {

    const { data: session } = useSession();

    return (
        <main className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <BackButton />
                <div className="flex flex-col flex-grow bg-gray-50 dark:bg-black items-center justify-center py-10 px-4">
                    <div className="w-[450px] bg-white dark:from-black shadow-md rounded-lg p-12">
                        <h2 className="text-xl dark:text-black mb-8 text-center">
                            Upload files to Cloudinary Database
                        </h2>
                        <UploadForm />
                    </div>
                </div>
                <Footer />
                <ScrollUpButton/>
            </Container>
        </main>
    );
};
export default lessionDB;
