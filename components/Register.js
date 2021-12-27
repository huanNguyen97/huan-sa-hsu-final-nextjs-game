// Import from react 
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import from owner
import { api_python_register } from '../pages/api/url';
import Loading from '../UI/Loading';

const Register = () => {
    // Data
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState();

    const router = useRouter();

    // Notificate an error:
    useEffect(() => {
        if (router.query.error !== null) {
            toast.error(router.query.error, { theme: 'colored' });
            router.query.error = null;
        }
    }, [router.query.error]);   // Just cation, but it's right.
    
    // Register handler
    const registerHanlder = (data) => {
        apiRegister(data);
    }

    // Calling api Register
    const apiRegister = (data) => {
        setIsLoading(true);
        fetch(api_python_register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username: data.username,
                password: data.password,
                image_url: data.image,
                type_user: data.type
            })
        })
        .then(resp => resp.json())
        .then(status => {
            if (status.status === true) {
                setIsLoading(false);
                router.push({
                    pathname: '/',
                    query: { success: "Successful for registering a new account" }
                });
            } else {
                setIsLoading(false);
                router.push({
                    pathname: '/register',
                    query: { error: "Your username has already existed. Please try another ones!!" }
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
                <main className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center">
                { isLoading ? <Loading type="Oval" color="#DC143C" height="50" width="50" /> : <p></p> }
                <form 
                    className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300 w-full h-full"
                    onSubmit={handleSubmit(registerHanlder)}
                >
                        {/* Register form */}
                        <div className="bg-white rounded-2xl shadow-2xl w-1/2 h-96">
                            {/* Title */}
                            <div className="bg-black rounded-t-2xl h-10 justify-center">
                                <h1 className="text-white text-3xl"><strong>Register form</strong></h1>
                            </div>
                            {/* End */}

                            {/* Register area */}
                            <div>
                                <div className="flex w-5/6 h-5/6 justify-center ml-14">
                                    <div className="flex-1 bg-gray-200 p-2 mt-10 ml-20 mr-5">
                                        <input 
                                            {...register('username')}
                                            type="text" 
                                            name="username" 
                                            placeholder="Email" 
                                            className="bg-gray-200 outline-none"
                                        />
                                    </div>
                                    <div className="flex-1 bg-gray-200 p-2 mt-10 mr-20">
                                        <input 
                                            {...register('password')}
                                            type="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            className="bg-gray-200 outline-none"
                                        />
                                    </div>
                                </div>        
                                <div className="bg-gray-200 p-2 mt-10 ml-16 mr-16 text-left">
                                    <input 
                                        {...register('image')}
                                        type="text" 
                                        name="image" 
                                        placeholder="Image Url" 
                                        className="bg-gray-200 outline-none"
                                    />
                                </div> 
                                <div className="bg-gray-200 p-2 mt-10 ml-16 mr-16 text-left">
                                    <select 
                                        {...register('type')}
                                        id="type" 
                                        name="type" 
                                    >
                                        <option value="1">Buyer</option>
                                        <option value="2">Seller</option>
                                    </select>
                                </div>  
                            </div>
                            {/* End */}

                            {/* Button field */}
                            <div className="flex mt-10 justify-center">
                                <div className="h-auto w-16 bg-blue-400 mr-10">
                                    <button type="submit"> 
                                        Submit
                                    </button>
                                </div>
                                {/* <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black">Sign Up</a> */}
                                <div className=" w-16 bg-red-400">
                                    <Link href="/">
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                            {/* End */}
                        </div>
                        {/* End */}
                    </form>
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

export default Register;