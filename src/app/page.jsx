"use client"

import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import Container from "../app/Components/container";
import NavBar from "../app/Components/nav";
import Footer from "../app/Components/footer";
import Hero from "./components/forIndex/hero";
import AboutMe from "./components/forIndex/aboutMe";
import Port from "./components/forIndex/port";
import CardInterest from './components/forIndex/stack';
import Parallax1 from "./components/forIndex/parallax1"
import Parallax2 from "./components/forIndex/parallax2"
import ScrollUpButton from "./components/scrollUp";

export default function FirstPage() {

  const { data: session } = useSession();

  useEffect(() => {
    // This code will run only in the browser after the component mounts
    console.log("Automate Checking Resolution");
    console.log("Width: " + window.innerWidth, "Height: " + window.innerHeight);
  }, []); // Empty dependency array ensures it only runs once after the component mounts

  return (
    <main className="flex-col min-h-screen">
      <Container>
        <NavBar session={session} />
        <Hero />
        <AboutMe />
        
        <Parallax1 />
        <CardInterest />

        <Parallax2 />
        <Port />

        <Footer />
        <ScrollUpButton />
      </Container>
    </main>
  );
}
