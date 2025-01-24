"use client";

import { useSession } from "next-auth/react";
import Container from "@/app/components/container";
import NavBar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SideMenu from "../components/sideMenu";
import PIRForm from "./components/pirform";

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

                    <div className="flex w-full flex-col p-5">
                        <div className="flex flex-col p-5 border-2 dark:border-neutral-700 h-full shadow-lg shadow-[#d6d6d6] dark:shadow-[#464646] ">
                            <div>
                                <PIRForm />
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