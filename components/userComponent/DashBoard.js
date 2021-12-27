// Import from react
import React from 'react';
import { HomeIcon, PlusCircleIcon } from '@heroicons/react/solid';

const DashBoard = () => {
    // Render Template
    const TemplateRendering = () => {
        return (
            <div className="flex flex-col w-1/6 bg-white">
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
                    <button className="flex justify-start space-x-5 ml-5
                    hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white">
                        <HomeIcon className="h-6 w-6 mt-1" />
                        <strong><p className="text-2xl">Home</p></strong>
                    </button>
                    <button className="flex justify-start space-x-5 ml-5 
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