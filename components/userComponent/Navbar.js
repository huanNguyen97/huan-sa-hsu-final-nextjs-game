// Import from react
import React from 'react';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';

const NavBar = (props) => {
    // Render Template
    const TemplateRendering = () => {
        return (
            <div className="flex h-14 bg-gray-100 border-b-2 border-gray-200">
                {/* Search */}
                <div className="w-5/6 h-14">
                    <form className="flex justify-center mt-2">
                        <input 
                            className="w-2/3 outline-none h-9 border-2"
                            placeholder="Search game.."
                        />
                        <button type="submit" className="bg-blue-300 hover:bg-blue-500 hover:border-blue-500
                        border-2 border-blue-300">
                            <SearchIcon className="h-5 w-12" />
                        </button>
                    </form>
                </div>
                {/* End Search */}

                {/* Info */}
                <div className="flex w-1/6 h-14 space-x-2">
                    <button className="flex space-x-2 
                    hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white">            
                        {/* Image */}
                        <div className="">
                            <img
                                className="h-14 w-14"
                                src={props.image_url} 
                            />  {/* Just a caution, don't worry about this. */}
                        </div>
                        {/* End image */}

                        {/* Name */}
                        <div className="mt-3 pr-10">
                            <strong><p className="text-3xl">User Info</p></strong>
                        </div>
                        {/* End name */}
                    </button>
                </div>
                {/* End info */}
            </div>
        );
    };

    return (
        <>
            <TemplateRendering />
        </>
    );
};

export default NavBar;