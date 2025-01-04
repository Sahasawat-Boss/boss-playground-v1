"use client";

import React, { useState } from 'react'
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; //hook


function SignIn() {

    const [email, setEmail] = useState(""); //state for email
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await signIn("credentials", { //credentials from auth
                email, password, redirect: false //SignIn แล้วไม่ต้อง redirect ไปไหน
            })

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("WelcomePage"); //SignIn แล้วไปหน้า WelcomePage
        } catch(error) {
            console.log(error);
        }
    }

return (
    <Container>
    <NavBar />
    <div
        className="hero flex-grow relative bg-cover bg-center pb-12"
        style={{
        backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
    >
        {/* Black overlay with 60% opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Hero Content */} {/* Add Animation: animate-floating and animate-fade-in-up*/}
        <div className="hero-content flex-col relative">
        <div className="text-center text-white mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold animate-floating">Sign In</h1> 
            <p className="pt-6 animate-fade-in-up">
            "Welcome back to Boss Playground! Sign in to access your
            personalized dashboard,</p>
            <p className="pb-6 animate-fade-in-up">explore exclusive features, and take your
            experience to the next level."</p>
        </div>
        <div className="card w-[380px] shrink-0 bg-base-100 shadow-2xl ">
            {/* Form SignIn */}
            <form onSubmit={handleSubmit}
            className="card-body pt-4 pb-4 shadow-xl" >

            {error && (
                <div className="flex justify-center">
                    <div className="bg-red-500 w-fit text-white text-sm px-2 py-1 rounded-md">
                    {error}
                    </div>
                </div>
                )}

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className="input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                />
                </div>
                <div className="form-control mt-6">
                <button
                    className="btn btn-primary px-16 py-3 text-white text-xl font-semibold bg-black shadow-md shadow-red-300 rounded-lg hover:bg-[#585858] hover:text-white hover:shadow-sky-500"
                    type="submit"
                >
                    Sign In
                </button>
                </div>
                <label className="label mt-2">
                    <a href="#" className="link-hover link label-text-alt text-[14px]">
                    Forgot password?
                    </a>
                </label>
                <p className="mt-0">
                Don't have an account?
                <Link
                    href="/signUp"
                    className="text-blue-600 font-medium hover:underline ml-1"
                >Sign Up</Link>
                </p>
            </form>
            {/* Form SignIn */}
        </div>
        </div>
    </div>
    <Footer />
    </Container>
);
}

export default SignIn;
