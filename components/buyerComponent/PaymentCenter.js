// Import from reactjs
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    ChevronDownIcon
} from '@heroicons/react/outline'

// Import from owner
import { api_python_read_payment } from '../../pages/api/url';

const CartCenter = (props) => {
    // Data fetching
    const router = useRouter();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState();

    const username = router.query.username;

    // Fetching data
    useEffect(() => {
        fetch(api_python_read_payment + username, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game => {
            setData(game.payment_list);
            setStatus(game.game_status);
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }, [])

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

            <div className="flex flex-wrap space-y-10">
                <p>{/* Empty */}</p>
                { status === 0 ? <p>You do not have payment history yet</p> : data.map(item => {
                    return (
                        <div key={item.id_payment} className="flex-col w-1/6 h-48 mr-10 border-gray-100 border-2 hover:border-4">
                            <button className="w-full h-5/6 bg-white">
                                <img 
                                    className="h-full w-full"
                                    src="https://thumbs.dreamstime.com/b/folder-file-line-neon-icon-elements-business-illustration-signs-symbols-can-be-used-web-logo-mobile-app-ui-ux-black-157594757.jpg"
                                />
                            </button>
                            <div className="flex justify-center ">
                                <p><strong>Payment {item.id_payment}</strong></p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default CartCenter;