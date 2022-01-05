// Import from reactjs
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
    ChevronDownIcon
} from '@heroicons/react/outline'

// Import from owner
import Games from './Games';

const Center = (props) => {
    // Data fetching
    const router = useRouter();
    const username = router.query.username;

    return (
        <div className="flex-grow text-white h-screen 
        overflow-y-scroll scrollbar-hide">
            <header className="absolute top-5 right-8">
                <div className={`flex items-center ${props.bgColor}
                space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full
                p-1 pr-2 text-black`}>
                    <h2><strong>{username}</strong></h2>
                    <ChevronDownIcon className="h-5 w-5" /> 
                </div>
            </header>

            <section 
                className={`flex pl-10 pb-6 items-end space-x-7 
                bg-gradient-to-b to-black ${props.infoColor} h-64
                text-while padding-8`}
            >
                <img
                    className="h-44 w-44 shadow" 
                    src={props.imgSrc}
                />
                <div>
                    <h2><strong>{props.title}</strong></h2>
                    <h1 className="text-2xl mg:text-3xl xl:text-4xl font-bold">
                        {props.subTitle}
                    </h1>
                </div>
            </section>

            <div>
                <Games />
            </div>
        </div>
    );
};

export default Center;