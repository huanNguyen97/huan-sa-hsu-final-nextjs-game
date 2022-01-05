// Import from react
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';

const Game = (props) => {
    // Data from query
    const router = useRouter();

    return (    
        <Link href={{
            pathname: "/buyer/read-details/[gameID]",
            query: {
                id: router.query.id,
                username: router.query.username,
                password: router.query.password,
                image_url: router.query.image_url,
                type_user: router.query.type_user,
                gameID: props.item.id
            }
        }}> 
            <div className="grid grid-cols-3 text-gray-400
            py-4 px-5 hover:bg-gray-900 cursor-pointer rounded-lg">
                <div className="flex items-center space-x-4">
                    <p>{props.index + 1}</p>
                    <img
                        className="h-12 w-12"
                        src={props.item.url} 
                    />
                    <div className="text-white">
                        <p><strong>{props.item.name}</strong></p>
                    </div>
                </div>

                <div className="w-40 flex items-center pl-24 justify-between">
                    <p><strong>{props.item.category}</strong></p>
                </div>

                <div className="flex items-center pr-10 ml-auto">
                    <p className=""><strong>{props.item.brand}</strong></p>
                </div>
            </div>
        </Link>
    );
};

export default Game;