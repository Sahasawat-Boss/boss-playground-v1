"use client";

import { useSession } from "next-auth/react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "./components/sideMenu";

function PIR() {
    const { data: session } = useSession();

    return (
        <main className="bg-white dark:bg-[#222224] transition-all duration-[0.5s] flex flex-col min-h-screen">
            <Container>
                <NavBar session={session} />
                <main className="flex">

                    <div className=" bg-gray-600">
                        <SideMenu />
                    </div>

                    <div className="flex w-full h-[80vh] flex-col p-5">
                        <div className="h-[80vh] flex flex-col p-5 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646]">
                            <div className="h-full border bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast">

                                <h1 className="mb-3 text-3xl text-black dark:text-white font-semibold">
                                    Welcome to PIS
                                </h1>
                                <p className="indent-6">
                                    The Process Inspection Request System (PIR) streamlines the creation, tracking, and management of process inspection requests. Users can submit detailed requests, monitor progress through the Task and Completed menus, and generate reports in the Report menu.
                                </p>

                                {/* Grid Section */}
                                <div className="h-[30vh] border-red-600 border-2 mt-4 w-full grid grid-cols-2 gap-4 p-4">
                                    <div className="bg-red-200 border-black border h-full flex items-center justify-center">
                                        PI Request
                                    </div>
                                    <div className="bg-red-200 border-black border h-full flex items-center justify-center">
                                        Task
                                    </div>
                                    <div className="bg-red-200 border-black border h-full flex items-center justify-center">
                                        Completed
                                    </div>
                                    <div className="bg-red-200 border-black border h-full flex items-center justify-center">
                                        Report
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                {/* Footer */}
                <Footer />
            </Container>
        </main>
    );
}

export default PIR;
