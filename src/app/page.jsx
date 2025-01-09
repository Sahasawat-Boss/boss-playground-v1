"use client"

import Container from "../app/Components/container";
import NavBar from "../app/Components/nav";
import Footer from "../app/Components/footer";
import { useSession } from 'next-auth/react'
import Hero from "./components/forIndex/hero";
import AboutMe from "./components/forIndex/aboutMe";
import Port from "./components/forIndex/port";
import CardInterest from './components/forIndex/stack';
import Parallax1 from "./components/forIndex/parallax1"
import Parallax2 from "./components/forIndex/parallax2"
import ScrollUpButton from "./components/scrollUp";


{/*===  Landing Page - First Page  ===*/}
export default function FirstPage() {

  const { data: session } = useSession();
  return (
    <main className="flex-col min-h-screen">
      <Container >
        <NavBar session={session}/>
        <Hero />
        <AboutMe/>
        <Parallax1/>
        <Port/>
        <Parallax2/>
        <CardInterest/>
        <Footer/>
        <ScrollUpButton/>
      </Container>
    </main>
  );
}
