// Import from react
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/router';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

// Import from owner
import Card from '../../UI/Card';
import Loading from '../../UI/Loading';
import { api_golang_read_game_by_id } from '../../pages/api/url';

const Content = (props) => {
    // Data
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const id = router.query.id;
    const username = router.query.username;
    const password = router.query.password;
    const image_url = router.query.image_url;
    const type_user = router.query.type_user;

    // Fetching data
    useEffect(() => {
        setIsLoading(true);
        fetch(api_golang_read_game_by_id + router.query.id, {
            method: 'GET'
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

    // click Detail game
    const ReadDetails = (id_game) => {
        router.push({
            pathname: '/seller/details/[gameID]',
            query: { 
                gameID: id_game,
                id: id,
                username: username,
                password: password,
                image_url: image_url,
                type_user: type_user,
            }
        });
    };

    // Render Template
    const TemplateRendering = () => {
        return (
            <div className="flex flex-col h-full bg-gray-200 p-12">
                {/* Tilte */}
                <div className="h-12">
                    <p className="text-3xl">Review game</p>
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
                                                <button href="/" className="h-full w-full rounded-t-lg hover:border-4 hover:border-black">
                                                    <img
                                                        className="h-full w-full rounded-t-lg"
                                                        src={item.url} 
                                                    />
                                                </button>
                                            </div>
                                            {/* End */}
    
                                            {/* Options */}
                                            <div className="flex h-1/6 w-full bg-gray-400 rounded-b-lg">
                                                <button className="flex space-x-1 pt-3 bg-green-500 rounded-b-lg rounded-tr-lg
                                                hover:bg-green-200">
                                                    <PencilIcon
                                                        className="h-5 w-5" 
                                                    />
                                                    <p className="pr-2">UPDATE</p>
                                                </button>
                                                <button className="flex space-x-1 pt-3 ml-36 pr-2 bg-red-500 rounded-b-lg rounded-tl-lg
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
                                                <button className="h-full w-full rounded-t-lg hover:border-4 hover:border-black">
                                                    <img
                                                        className="h-full w-full rounded-t-lg"
                                                        src={item.url} 
                                                    />
                                                </button>
                                            </div>
                                            {/* End */}
    
                                            {/* Options */}
                                            <div className="flex h-1/6 w-full bg-gray-400 rounded-b-lg">
                                                <button className="flex space-x-1 pt-3 bg-green-500 rounded-b-lg rounded-tr-lg
                                                hover:bg-green-200">
                                                    <PencilIcon
                                                        className="h-5 w-5" 
                                                    />
                                                    <p className="pr-2">UPDATE</p>
                                                </button>
                                                <button className="flex space-x-1 pt-3 ml-36 pr-2 bg-red-500 rounded-b-lg rounded-tl-lg
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
    };

    return (
        <>
            { isLoading ? <Loading type="Oval" color="#DC143C" height="50" width="50" /> : <TemplateRendering /> }
        </>
    );
};

export default Content;