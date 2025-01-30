"use client";

import React, { useState } from "react";
import Container from "../Components/container";
import NavBar from "../Components/nav";
import Footer from "../Components/footer";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false); // ⬅️ Loading state

    const { data: session } = useSession();
    const router = useRouter();

    if (session) router.replace('/WelcomePage'); // Redirect if already signed in

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // ⬅️ Start loading

        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Password and Confirm Password do not match!");
            setIsLoading(false); // ⬅️ Stop loading if error occurs
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all inputs!");
            setIsLoading(false); // ⬅️ Stop loading if error occurs
            return;
        }

        try {
            // Check if email already exists
            const resUserExists = await fetch("/api/userExists", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();
            if (user) {
                setError("This email already exists!");
                setIsLoading(false); // ⬅️ Stop loading if error occurs
                return;
            }

            // Send registration data
            const res = await fetch("/api/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (res.ok) {
                setError("");
                setSuccess("Sign up successfully, please sign in");
                e.target.reset();
                setTimeout(() => router.push("/signIn"), 1500); // Redirect after success
            } else {
                setError("Registration failed. Please try again.");
            }
        } catch (error) {
            setError("An error occurred during sign-up.");
        } finally {
            setIsLoading(false); // ⬅️ Stop loading in all cases
        }
    };

    return (
        <Container>
            <NavBar />
            <div
                className="hero flex-grow relative bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                <div className="hero-content flex-col py-16">
                    <div className="text-center text-white mx-auto max-w-3xl">
                        <h1 className="text-5xl font-bold animate-floating">Sign Up</h1>
                        <p className="pt-6 animate-fade-in-up">Join Boss Playground to unlock a world of creativity, collaboration, and innovation!</p>
                        <p className="pb-6 animate-fade-in-up">Create your account in just a few steps and start your journey with us!</p>
                    </div>

                    <div className="card w-[380px] shrink-0 bg-base-100 shadow-2xl">
                        {/*Form SignUp*/}
                        <form onSubmit={handleSubmit} className="card-body pt-4 pb-4">
                            {error && (
                                <div className="flex justify-center">
                                    <div className="bg-red-500 w-fit text-white text-sm px-2 py-1 rounded-md">{error}</div>
                                </div>
                            )}
                            {success && (
                                <div className="flex justify-center">
                                    <div className="bg-green-600 w-fit text-white text-sm px-2 py-1 rounded-md">{success}</div>
                                </div>
                            )}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="text-black input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                                    disabled={isLoading} // ⬅️ Disable while loading
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="text-black input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                                    disabled={isLoading} // ⬅️ Disable while loading
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="text-black input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                                    disabled={isLoading} // ⬅️ Disable while loading
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter your password"
                                    className="text-black input input-bordered focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                                    disabled={isLoading} // ⬅️ Disable while loading
                                />
                            </div>

                            {/* Sign Up Button with Spinner */}
                            <div className="form-control mt-4">
                                <button
                                    className={`btn btn-primary px-16 py-3 text-white text-xl font-semibold bg-black shadow-md shadow-red-300 rounded-lg hover:bg-[#585858] hover:text-white hover:shadow-sky-500 transition-all ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                                    type="submit"
                                    disabled={isLoading} // ⬅️ Prevent clicking again
                                >
                                    {isLoading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                                            <span>Signing Up...</span>
                                        </div>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </button>
                            </div>

                            <p className="mt-3 text-black">Already have an account?
                                <Link href="/signIn" className='text-blue-500 font-medium hover:underline ml-1'>Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
}

export default SignUp;
