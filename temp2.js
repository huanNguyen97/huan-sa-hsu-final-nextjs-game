// Import from react
import React from 'react';
import Image from 'next/image';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'

// Import from owner
import Card from '../../UI/Card';

const Content = () => {
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
                        <div className="flex space-x-6">
                            {/* Start  */}
                            <div className="justify-items-center h-64 w-1/4 bg-red-400 rounded-lg">
                                {/* Image */}
                                <div className="h-full w-full bg-black rounded-t-lg ">
                                    <button className="h-full w-full rounded-t-lg hover:border-4 hover:border-black">
                                        <img
                                            className="h-full w-full rounded-t-lg"
                                            src="https://image.freepik.com/free-vector/pegasus-mascot-esport-logo-design_139366-280.jpg" 
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
                            <div className="justify-items-center h-64 w-1/4 bg-red-400 rounded-lg">
                                {/* Image */}
                                <div className="h-full w-full bg-black rounded-t-lg ">
                                    <button className="h-full w-full rounded-t-lg hover:border-4 hover:border-black">
                                        <img
                                            className="h-full w-full rounded-t-lg"
                                            src="https://image.freepik.com/free-vector/pegasus-mascot-esport-logo-design_139366-280.jpg" 
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
            <TemplateRendering />
        </>
    );
};

export default Content;

