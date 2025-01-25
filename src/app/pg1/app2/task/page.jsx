"use client";

import { useSession } from "next-auth/react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";

function PIRTask() {
    const { data: session } = useSession();

    return (
        <main className="bg-white dark:bg-black transition-all duration-[0.5s] flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <main className="flex h-[75vh]">

                    <div className=" bg-gray-600">
                        <SideMenu />
                    </div>

                    <div className="flex w-full flex-col p-5">
                        <div className="flex h-full shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646] ">
                            <div className="flex px-10 pt-6 animate-fade-in-fast">
                                <h1 className="text-3xl text-black dark:text-white font-semibold">
                                    PIR - Task
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

export default PIRTask