"use client";

import { useSession } from "next-auth/react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import SearchOptionTask from "../components/searchOption";

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
                        <div className="h-[80vh] flex flex-col p-5 border-2 dark:border-neutral-700 shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646] ">
                            <div className="h-full border bg-white dark:bg-transparent pt-2 pb-4 px-6 animate-fade-in-fast">

                                <h1 className="mb-3 text-[24px] text-black dark:text-white font-semibold">
                                    Task
                                </h1>

                                <SearchOptionTask/>

                                <div className="h-[55vh] bg-red-200 border-red-600 border-2 w-full flex justify-center items-center">
                                    Display GET Task Section
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
};

export default PIR