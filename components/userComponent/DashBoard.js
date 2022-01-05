// Import from react
import React from 'react';
import { HomeIcon, PlusCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const DashBoard = () => {
    // Data
    const router = useRouter();

    // Back home
    const homeHandle = () => {
        router.push({
            pathname: '/seller',
            query: {
                id: router.query.id,
                username: router.query.username,
                password: router.query.password,
                image_url: router.query.image_url,
                type_user: router.query.type_user,
            }
        })
    };

    // Create game
    const gameHandle = () => {
        router.push({
            pathname: '/seller/create_game',
            query: {
                id: router.query.id,
                username: router.query.username,
                password: router.query.password,
                image_url: router.query.image_url,
                type_user: router.query.type_user,
            }
        })
    };

    // Render Template
    const TemplateRendering = () => {
        return (
            <div className="flex border-2 border-gray-300 flex-col w-1/6 bg-white">
                {/* Home logo */}
                <div className="h-14 bg-gray-100 border-r-2 border-b-2 border-gray-200">
                    <div className="flex justify-center mt-2">
                        <p className="text-3xl"><strong><span className="text-green-600">Game</span>Center</strong></p>
                    </div>
                </div>
                {/* End logo */}

                {/* Options */}
                <div className="flex justify-center flex-col mt-4 space-y-6">
                    <div>{/* Empty div to appropriate with template */}</div>
                    <button onClick={homeHandle} className="flex justify-start space-x-5 ml-5
                    hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white">
                        <HomeIcon className="h-6 w-6 mt-1" />
                        <strong><p className="text-2xl">Home</p></strong>
                    </button>
                    <button onClick={gameHandle} className="flex justify-start space-x-5 ml-5 
                    hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white">
                        <PlusCircleIcon className="h-6 w-6 mt-1" />
                        <strong><p className="text-2xl">Create New ...</p></strong>
                    </button>
                </div>
                {/* End options */}                
            </div>
        );
    };

    return (
        <>
            <TemplateRendering />
        </>
    );
};

export default DashBoard;