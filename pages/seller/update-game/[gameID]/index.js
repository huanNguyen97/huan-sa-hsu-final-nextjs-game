// Import from react
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { 
    UserIcon,
    DocumentIcon,
    FlagIcon,
    PhotographIcon,
    CalendarIcon,
    CashIcon
} from '@heroicons/react/solid'
import { useForm } from 'react-hook-form';

// Import from owner
import DashBoard from '../../../../components/userComponent/DashBoard';
import Navbar from '../../../../components/userComponent/Navbar';
import Content from '../../../../components/userComponent/Content';
import { api_golang_read_details_game, api_golang_update_game } from '../../../api/url';

const UpdateGame = () => {
    // Data from query
    const [data, setData] = useState({});
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const id = router.query.id;
    const username = router.query.username;
    const password = router.query.password;
    const image_url = router.query.image_url;
    const type_user = router.query.type_user;
    const gameID = router.query.gameID;

    // Fetching data 
    useEffect(() => {
        fetch(api_golang_read_details_game + gameID, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game_details => {
            setData(game_details.game_detail);
        })
        .catch(() => {
            console.log("Server not found");     // For checking. Not alerting on mobile screen
        })
    }, [])

    // Create handler
    const updateHandler = (data) => {
        apiUpdate(data);
    };

    // Create api
    const apiUpdate = (data) => {
        fetch(api_golang_update_game + gameID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: null,     // Just only id cannot edit.
                name: data.name,
                category: data.category,
                brand: data.brand,
                url: data.url,
                year_released: parseInt(data.year_released),
                price: parseFloat(data.price),
                id_user: parseInt(id)
            })
        })
        .then(resp => resp.json())
        .then(game => {
            console.log(game);
        })
        .then(() => {
            cancelHandler();
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    };

    // Cancelling
    const cancelHandler = () => {
        router.push({
            pathname: '/seller',
            query: {
                id: id,
                username: username,
                password: password,
                image_url: image_url,
                type_user: type_user,
            }
        })
    };

    return (
        <div>
            <main className="flex h-screen w-screen">
                {/* Dashboard */}
                <DashBoard />
                {/* End Dashboard */}
                

                <div className="flex flex-col w-5/6">
                    {/* Navbar */}
                    <Navbar
                        id_user={id} 
                        username={username}
                        password={password}
                        image_url={image_url}
                        type_user={type_user}
                    />
                    {/* End Navbar */}

                    {/* Content */}
                    <div className="flex flex-col w-5/6 h-full">
                        <div className="flex h-full w-full justify-center">
                            {/* Form */}
                            <form onSubmit={handleSubmit(updateHandler)} className="flex h-full w-5/6">
                                <div className="flex flex-col bg-red-400 mt-20 h-5/6 w-5/6 
                                border-2 border-black">
                                    <div className="flex flex-col h-1/6 w-full bg-blue-100">
                                        <div className="flex space-x-5 mt-5">
                                            <UserIcon className="h-6 w-6" />
                                            <p className="text-xl"><strong>Name:</strong></p>
                                        </div>
                                        <input {...register('name')} placeholder={data.name} name="name" className="outline-none rounded-xl h-1/3 text-lg" />
                                    </div>
                                    <div className="flex flex-col h-1/6 w-full bg-blue-100">
                                        <div className="flex space-x-5 mt-5">
                                            <DocumentIcon className="h-6 w-6" />
                                            <p className="text-xl"><strong>Category:</strong></p>
                                        </div>
                                        <input {...register('category')} placeholder={data.category} name="category" className="outline-none rounded-xl h-1/3 text-lg" />
                                    </div>
                                    <div className="flex flex-col h-1/6 w-full bg-blue-100">
                                        <div className="flex space-x-5 mt-5">
                                            <FlagIcon className="h-6 w-6" />
                                            <p className="text-xl"><strong>Brand:</strong></p>
                                        </div>
                                        <input {...register('brand')} placeholder={data.brand} name="brand" className="outline-none rounded-xl h-1/3 text-lg" />
                                    </div>
                                    <div className="flex flex-col h-1/6 w-full bg-blue-100">
                                        <div className="flex space-x-5 mt-5">
                                            <PhotographIcon className="h-6 w-6" />
                                            <p className="text-xl"><strong>Image url:</strong></p>
                                        </div>
                                        <input {...register('url')} placeholder={data.url} name="url" className="outline-none rounded-xl h-1/3 text-lg" />
                                    </div>
                                    <div className="flex flex-col h-1/6 w-full bg-blue-100">
                                        <div className="flex space-x-5 mt-5">
                                            <CalendarIcon className="h-6 w-6" />
                                            <p className="text-xl"><strong>Year released:</strong></p>
                                        </div>
                                        <input {...register('year_released')} placeholder={data.year_released} name="year_released" className="outline-none rounded-xl h-1/3 text-lg" />
                                    </div>
                                    <div className="flex flex-col h-1/6 w-full bg-blue-100">
                                        <div className="flex space-x-5 mt-5">
                                            <CashIcon className="h-6 w-6" />
                                            <p className="text-xl"><strong>Price:</strong></p>
                                        </div>
                                        <input {...register('price')} placeholder={data.price} name="price" className="outline-none rounded-xl h-1/3 text-lg" />
                                    </div>
                                    
                                </div>
                                {/* Button */}
                                <button
                                    type="submit"
                                    className="ml-5 mt-64 bg-green-300 hover:border-black hover:border-2 h-36" 
                                >
                                    <p className="text-2xl p-10"><strong>Update Game</strong></p>
                                </button>
                                {/* End button */}
                            </form>
                                <button
                                    onClick={cancelHandler}
                                    type="submit"
                                    className="ml-5 mt-64 bg-red-300 hover:border-black hover:border-2 h-36" 
                                >
                                    <p className="text-2xl p-10"><strong>Cancel</strong></p>
                                </button>
                            {/* End Form */}
                        </div>
                    </div>
                    {/* End Content */}
                </div>
            </main>
        </div>
    );
};

export default UpdateGame;