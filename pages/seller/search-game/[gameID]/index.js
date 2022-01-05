// Import from react
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

// Import from owner
import DashBoard from '../../../../components/userComponent/DashBoard';
import Navbar from '../../../../components/userComponent/Navbar';
import Content from '../../../../components/userComponent/Content';
import Loading from '../../../../UI/Loading';
import { api_golang_search_game_by_id_user } from '../../../api/url';

const Seller = () => {
    // Data from query
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const id = router.query.id;
    const username = router.query.username;
    const password = router.query.password;
    const image_url = router.query.image_url;
    const type_user = router.query.type_user;
    const keySearch = router.query.keySearch;

    // Fetching data
    useEffect(() => {
        setIsLoading(true);
        fetch(api_golang_search_game_by_id_user + id + "/" + keySearch, {
            method: 'GET',
        })
        .then(resp => resp.json())
        .then(game => {
            setData(game.game_list);
            setIsLoading(false);
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }, []);

    // Render list
    const TemplateRendering = () => {
        return (
            <div className="flex flex-col h-full bg-gray-200 p-12">
                {/* Tilte */}
                <div className="h-12">
                    <p className="text-3xl">Search game with key name {keySearch}</p>
                </div>
                {/* End title */}

                {/* List of games */}
                <div>
                    <div className="flex flex-col space-y-20 justify-start">
                        <div className="flex flex-wrap space-x-8">
                            {/* Start  */}
                            {data.map((item, index) => {
                                if (index %3 == 0 && index != 0 || index > 3) {
                                    return (
                                        <div key={item.id} className="justify-items-center h-64 w-1/4 bg-red-400 rounded-lg mt-20">
                                            {/* Image */}
                                            <div className="h-full w-full bg-black rounded-t-lg ">
                                                <button 
                                                    className="h-full w-full rounded-t-lg hover:border-4 hover:border-black"
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/seller/read-details/' + item.id,
                                                            query: {
                                                                id: id,
                                                                username: username,
                                                                password: password,
                                                                image_url: image_url,
                                                                type_user: type_user,
                                                            }
                                                        })
                                                    }}
                                                >
                                                    <img
                                                        className="h-full w-full rounded-t-lg"
                                                        src={item.url} 
                                                    />
                                                </button>
                                            </div>
                                            {/* End */}
    
                                            {/* Options */}
                                            <div className="flex justify-between h-1/6 w-full bg-gray-400 rounded-b-lg">
                                                <button
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/seller/update-game/' + item.id,
                                                            query: {
                                                                id: id,
                                                                username: username,
                                                                password: password,
                                                                image_url: image_url,
                                                                type_user: type_user,
                                                                gameID: item.id
                                                            }
                                                        });
                                                    }}  
                                                    className="flex space-x-1 pt-3 bg-green-500 rounded-b-lg rounded-tr-lg
                                                    hover:bg-green-200">
                                                    <PencilIcon
                                                        className="h-5 w-5" 
                                                    />
                                                    <p className="pr-2">UPDATE</p>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/seller/delete-game/' + item.id,
                                                            query: {
                                                                id: id,
                                                                username: username,
                                                                password: password,
                                                                image_url: image_url,
                                                                type_user: type_user,
                                                            }
                                                        })
                                                    }} 
                                                    className="flex space-x-1 pt-3 ml-36 pr-2 bg-red-500 rounded-b-lg rounded-tl-lg
                                                    hover:bg-red-200">
                                                    <TrashIcon
                                                        className="h-5 w-5" 
                                                    />
                                                    <p className="pr-2">DELETE</p>
                                                </button>
                                            </div>
                                            {/* End */}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={item.id} className="justify-items-center h-64 w-1/4 bg-red-400 rounded-lg">
                                            {/* Image */}
                                            <div className="h-full w-full bg-black rounded-t-lg ">
                                                <button 
                                                    className="h-full w-full rounded-t-lg hover:border-4 hover:border-black"
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/seller/read-details/' + item.id,
                                                            query: {
                                                                id: id,
                                                                username: username,
                                                                password: password,
                                                                image_url: image_url,
                                                                type_user: type_user,
                                                                gameID: item.id
                                                            }
                                                        })
                                                    }}
                                                >
                                                    <img
                                                        className="h-full w-full rounded-t-lg"
                                                        src={item.url} 
                                                    />
                                                </button>
                                            </div>
                                            {/* End */}
    
                                            {/* Options */}
                                            <div className="flex justify-between h-1/6 w-full bg-gray-400 rounded-b-lg">
                                                <button
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/seller/update-game/' + item.id,
                                                            query: {
                                                                id: id,
                                                                username: username,
                                                                password: password,
                                                                image_url: image_url,
                                                                type_user: type_user,
                                                                gameID: item.id
                                                            }
                                                        });
                                                    }}      
                                                    className="flex space-x-1 pt-3 bg-green-500 rounded-b-lg rounded-tr-lg
                                                    hover:bg-green-200">
                                                    <PencilIcon
                                                        className="h-5 w-5" 
                                                    />
                                                    <p className="pr-2">UPDATE</p>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/seller/delete-game/' + item.id,
                                                            query: {
                                                                id: id,
                                                                username: username,
                                                                password: password,
                                                                image_url: image_url,
                                                                type_user: type_user,
                                                            }
                                                        })
                                                    }}  
                                                    className="flex space-x-1 pt-3 ml-36 pr-2 bg-red-500 rounded-b-lg rounded-tl-lg
                                                    hover:bg-red-200">
                                                    <TrashIcon
                                                        className="h-5 w-5" 
                                                    />
                                                    <p className="pr-2">DELETE</p>
                                                </button>
                                            </div>
                                            {/* End */}
                                        </div>
                                    );
                                }
                            })}
                            {/* End Start  */}
                        </div>
                    </div>
                </div>
                {/* End list */}
            </div>
        );
    }

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
                    { isLoading ? <Loading type="Oval" color="#228B22" height="50" width="50" /> : <TemplateRendering /> }
                    {/* End Content */}
                </div>
            </main>
        </div>
    );
};

export default Seller;