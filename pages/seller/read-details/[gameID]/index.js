// Import from react
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/solid';

// Import from owner
import DashBoard from '../../../../components/userComponent/DashBoard';
import Navbar from '../../../../components/userComponent/DashBoard';
import Content from '../../../../components/userComponent/DashBoard';
import { api_golang_read_details_game } from '../../../api/url';

const ReadDetails = () => {
    // Data from query
    const [data, setData] = useState({});
    const router = useRouter();

    const id = router.query.id;
    const username = router.query.username;
    const password = router.query.password;
    const image_url = router.query.image_url;
    const type_user = router.query.type_user;
    const gameID = router.query.gameID;

    // Fetch data
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
    }, [])  // Warning at here but it's okay

    return (
        <div>
            <main className="flex h-screen w-screen">
               {/* Dashboard */}
               <DashBoard />
                {/* End Dashboard */}
                

                <div className="flex flex-col w-5/6">
                    <div className="flex h-full w-full justify-center">
                        <div className="flex bg-red-400 mt-20 h-5/6 w-5/6 
                        border-2 border-black">
                            <div className="w-2/3 h-full bg-blue-200">
                                <img
                                    className="h-full w-full"
                                    src={data.url} 
                                />
                            </div>
                            <div className="flex flex-col w-1/3 h-full bg-yellow-200 border-l-2 border-black">
                                <div className="flex flex-col w-full h-1/6 border-b-2 border-blue-300">           
                                    <p className="m-6 text-2xl"><strong>ID:</strong></p>
                                    <p className="ml-6 text-2xl">{data.id}</p>
                                </div>
                                <div className="flex flex-col w-full h-1/6 border-b-2 border-blue-300">           
                                    <p className="m-6 text-2xl"><strong>Name:</strong></p>
                                    <p className="ml-6 text-2xl">{data.name}</p>
                                </div>
                                <div className="flex flex-col w-full h-1/6 border-b-2 border-blue-300">           
                                    <p className="m-6 text-2xl"><strong>Category:</strong></p>
                                    <p className="ml-6 text-2xl">{data.category}</p>
                                </div>
                                <div className="flex flex-col w-full h-1/6 border-b-2 border-blue-300">           
                                    <p className="m-6 text-2xl"><strong>Brand:</strong></p>
                                    <p className="ml-6 text-2xl">{data.brand}</p>
                                </div>
                                <div className="flex flex-col w-full h-1/6 border-b-2 border-blue-300">           
                                    <p className="m-6 text-2xl"><strong>Year release:</strong></p>
                                    <p className="ml-6 text-2xl">{data.year_released}</p>
                                </div>
                                <div className="flex flex-col w-full h-1/6 border-b-2 border-blue-200">           
                                    <p className="m-6 text-2xl"><strong>Price:</strong></p>
                                    <p className="ml-6 text-2xl">{data.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReadDetails;