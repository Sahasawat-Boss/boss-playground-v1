"use client"

import Container from "../app/Components/container";
import NavBar from "../app/Components/nav";
import Footer from "../app/Components/footer";
import { useSession } from 'next-auth/react'
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Port from "./components/port";
import CardInterest from './components/stack';


{/*===  Landing Page - First Page  ===*/}


export default function FirstPage() {

  const { data: session } = useSession();

  

  return (
    <main className="flex-col min-h-screen">
      <Container >
        <NavBar session={session}/>
        <Hero />
        <AboutMe/>
        <Port/>
        <CardInterest/>
        <Footer/>
      </Container>
    </main>
  );
}
