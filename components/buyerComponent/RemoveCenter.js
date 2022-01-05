// Import from reactjs
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    ChevronDownIcon
} from '@heroicons/react/outline'

// Import from owner
import { api_python_delete_cart_item } from '../../pages/api/url';

const CartCenter = (props) => {
    // Data fetching
    const router = useRouter();
    const username = router.query.username;

    // click Yes handler
    const clickYesHandler = () => {
        fetch(api_python_delete_cart_item + username + '/' + router.query.gameID, {
            method: 'POST',
        })
        .then(resp => resp.json())
        .then(game => {
            console.log("OK!");
        })
        .then(() => {
            clickNoHandler();
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }

    // click No handler
    const clickNoHandler = () => {
        router.push({
            pathname: '/buyer/shopping-cart/[userID]',
            query: {
                id: router.query.id,
                username: username,
                password: router.query.password,
                image_url: router.query.image_url,
                type_user: router.query.type_user,
                userID: router.query.id,
            }
        })
    }

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

            <div className="flex mt-10 ml-10 bg-fuchsia-700 w-2/3 justify-center h-64">
                <div className="flex flex-col">
                    <div className="text-3xl mt-5 text-black">
                        <p><strong>Delete this game with id {router.query.gameID} in CART</strong></p>
                    </div>
                    <div className="flex mt-24 space-between space-x-64">
                        <button onClick={clickYesHandler} className="
                            bg-green-600
                            h-14 w-full
                            text-4xl
                            text-black
                            hover:bg-green-300
                            hover:text-white
                        ">
                            Yes
                        </button>
                        <button onClick={clickNoHandler} className="
                            bg-red-600
                            h-14 w-full
                            text-4xl
                            text-black
                            hover:bg-red-300
                            hover:text-white
                        ">
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCenter;