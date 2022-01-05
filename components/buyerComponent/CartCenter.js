// Import from reactjs
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    ChevronDownIcon
} from '@heroicons/react/outline'

// Import from owner
import { api_python_read_cart_temp, api_python_create_payment } from '../../pages/api/url';

const CartCenter = (props) => {
    // Data fetching
    const router = useRouter();
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    const username = router.query.username;

    // Fetching data
    useEffect(() => {
        fetch(api_python_read_cart_temp + username, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game => {
            setData(game.cart_list_temp);
            setTotalPrice(game.total_price);
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }, [])

    // Create payment
    const createPayment = () => {
        fetch(api_python_create_payment + username, {
            method: 'POST'
        })
        .then(resp => resp.json())
        .then(game => {
            console.log("OK");
        })
        .then(() => {
            router.push({
                pathname: '/buyer/',
                query: {
                    id: router.query.id,
                    username: username,
                    password: router.query.password,
                    image_url: router.query.image_url,
                    type_user: router.query.type_user,
                    success: "Thanks for your buying. Good luck all day!!"
                }
            })
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    };

    // Delete item cart
    const removeItemCart = (username, id_game) => {
        router.push({
            pathname: '/buyer/shopping-cart/[userID]/[gameID]',
            query: {
                id: router.query.id,
                username: username,
                password: router.query.password,
                image_url: router.query.image_url,
                type_user: router.query.type_user,
                userID: router.query.id,
                gameID: id_game
            }
        });
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

            <div className="flex flex-wrap space-y-10">
                <div>{/* Empty div */}</div>
                { totalPrice === 0 ? <p>You do not have item in your cart at this time</p> : data.map(item => {
                    return (
                        <div key={item.id_game} className="flex bg-gray-600 w-2/5 h-64 ml-10 justify-center">
                            <div className="flex flex-col h-full w-full">
                                <div className="flex w-full h-5/6 justify-center">
                                    <button className="bg-blue-500 w-3/4">
                                        <img 
                                            className="h-full w-full"
                                            src={item.image_url}
                                        />
                                    </button>
                                    <div className="flex flex-col bg-fuchsia-600 w-1/4 justify-center text-black 
                                    ">
                                        <div className="flex justify-center">
                                            <p><strong>Game</strong></p>
                                        </div>
                                        <div className="flex justify-center mb-1">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <p><strong>Quantity</strong></p>
                                        </div>
                                        <div className="flex justify-center mb-1">
                                            <p>{item.quantity}</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <p><strong>Single price</strong></p>
                                        </div>
                                        <div className="flex justify-center mb-1">
                                            <p>${item.single_price}</p>
                                        </div>
                                        <div className="flex justify-center">
                                            <p><strong>Sum price</strong></p>
                                        </div>
                                        <div className="flex justify-center mb-1">
                                            <p>${item.sum_price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center mt-2">
                                        <button onClick={() => removeItemCart(username, item.id_item)} className="bg-red-700 w-1/6 h-8 text-black hover:bg-red-300 hover:text-bold"><p>Delete</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex mt-20 justify-center w-full bg-yellow-400 space-between">
                <div className="flex w-2/3 justify-center space-x-64 bg-fuchsia-300 text-black text-5xl">
                    <p>Total price</p>
                    <p>${totalPrice}</p>
                </div>
                <div className="flex w-1/3 justify-center bg-fuchsia-500 text-5xl">
                    <button onClick={createPayment} className="h-full w-full hover:bg-green-300 hover:text-bol">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default CartCenter;