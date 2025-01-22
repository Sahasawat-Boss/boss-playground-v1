"use client";

import { useSession } from "next-auth/react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "./components/sideMenu";

function PIR() {
    const { data: session } = useSession();

    return (
        <main className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <main className="flex h-[75vh]">

                    <div className=" bg-gray-600">
                        <SideMenu />
                    </div>

                    <div className="flex w-full flex-col p-5 animate-fade-in">
                        <div className="flex h-full shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646] animate-fade-in">
                            <div className="flex px-10 pt-6">
                                <h1 className="text-3xl text-black dark:text-white font-semibold ">
                                    Process Inspection Request (PIR)
                                </h1>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </Container>
        </main>
    );
};

export default PIR