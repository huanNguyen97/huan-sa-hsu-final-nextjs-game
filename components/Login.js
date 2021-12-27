// Import from react 
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import from owner
import { api_python_login } from '../pages/api/url';
import Loading from '../UI/Loading';

const Login = () => {
    // Data
    const [isLoading, setIsLoading] = useState();
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    // Notificate an error:
    useEffect(() => {
        if (router.query.success !== null) {
            toast.success(router.query.success, { theme: 'colored' })
            router.query.success = null;
        }
        if (router.query.error !== null) {
            toast.error(router.query.error, { theme: 'colored' })
            router.query.error = null;
        }
        console.log("hihi");
    }, [router.query.success, router.query.error]);     // Just cation, but it's right.

    // Submit form login
    const loginHandler = (data) => {
        setIsLoading(true);
        if (data.username == "" || data.password == "") {
            router.push({
                pathname: '/',
                query: { error: "Please fill all your information" }
            });
            setIsLoading(false);
        } else {
            apiLogin(data)
        }
    };

    // Sign up onClick
    const signupClick = () => {
        router.push('/register');
    }

    // Calling api login
    const apiLogin = (data) => {
        console.log(data.username)
        console.log(data.password);
        setIsLoading(true);
        fetch(api_python_login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username: data.username,
                password: data.password,
            })
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.user.type_user == 1) {
                setIsLoading(false);
                router.push({
                    pathname: '/buyer',
                    query: {
                        id: user.user.id, 
                        username: user.user.username,
                        password: user.user.password,
                        image_url: user.user.image_url,
                        type_user: user.user.type_user
                    }
                });
            } else if (user.user.type_user == 2) {
                setIsLoading(false);
                router.push({
                    pathname: '/seller',
                    query: {
                        id: user.user.id, 
                        username: user.user.username,
                        password: user.user.password,
                        image_url: user.user.image_url,
                        type_user: user.user.type_user
                    }
                })
            } else {
                setIsLoading(false);
                router.push({
                    pathname: '/',
                    query: { error: "Your username aren't existed or maybe wrong password." }
                })
            }
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })

    }

    // Template rendering
    const RenderingTemplate = () => {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
                <Head>
                    <title>Game center</title>
                </Head>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white rounded-2xl shadow-2xl flex w-3/4 max-w-4xl">
                        {/* Sign in section */}
                        <div className="w-3/5 p-5">
                        { isLoading ? <Loading type="Oval" color="#228B22" height="50" width="50" /> : <p></p> }
                            <form onSubmit={handleSubmit(loginHandler)}>
                                <div className="text-left font-bold">
                                    <span className="text-green-600">Game</span>Center
                                </div>
                                <div className="py-10">
                                    <h2 className="text-3xl font-bold text-green-600 mb-2">Sign in to account</h2>
                                    <div className="border-2 w-10 border-green-600 bg-green-600 inline-block mb-2"></div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-100 w-64 p-2 mt-10">
                                            <input 
                                                {...register('username')}
                                                type="text" 
                                                name="username" 
                                                placeholder="Email" 
                                                className="bg-gray-100 outline-none"
                                            />
                                        </div>
                                        <div className="bg-gray-100 w-64 p-2 mt-4">
                                            <input 
                                                {...register('password')}
                                                type="password"
                                                name="password" 
                                                placeholder="Password" 
                                                className="bg-gray-100 outline-none"
                                            />
                                        </div>
                                        <button type="submit" className="border-2 border-green-600 text-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white mt-12">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* End */}

                        {/* Sign up section */}
                        <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                            <h2 className="text-3xl font-bold mb-2">Hi, Player</h2>
                            <div className="border-2 w-10 border-white bg-white inline-block mb-2"></div>
                            <p className="mb-10">If you do not have account before. Sign up for now to get one.</p>
                            <button onClick={signupClick} className="border-2 border-black text-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white">
                                Sign Up
                            </button>
                        </div>
                        {/* End */}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div>
            <ToastContainer />
            <RenderingTemplate />
        </div>
    );
};

export default Login;