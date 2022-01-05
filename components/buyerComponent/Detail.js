// Import from reactjs
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import owner
import { api_golang_read_details_game, api_python_add_to_cart } from '../../pages/api/url';
import Loading from '../../UI/Loading';

const Detail = (props) => {
    // Set data
    const router = useRouter();
    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState()

    // Fetching data
    useEffect(() => {
        fetch(api_golang_read_details_game + props.gameID, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game => {
            setTotalPrice(game.game_detail.price);
            setData(game.game_detail);
            setIsLoading(true);
        })
        .catch(() => {
            console.log("Server not found");     // For checking. Not alerting on mobile screen
        })
    }, [])
    
    // Add to cart
    const addToCartHandler = () => {
        fetch(api_python_add_to_cart + router.query.username, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username: router.query.username,     // Just only id cannot edit.
                id_game: data.id,
                name: data.name,
                image_url: data.url,
                single_price: parseFloat(data.price),
                quantity: parseInt(quantity),
                sum_price: parseFloat(totalPrice)
            })
        })
        .then(resp => resp.json())
        .then(game => {
            console.log(game);
            toast.success("Added success. Check your Cart List", { theme: 'colored' })
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })

    }

    // Render template
    const TemplateRendering = () => {
        return (
            <div>
                <div className="flex">
                    <div className="flex-1">
                        <img
                            className="h-96 w-96 ml-20"
                            src={data.url} 
                        />
                    </div>
    
                    <div className="grid-row mr-40">
                        <div className="flex">
                            <div className="text-right space-y-9 text-xl
                            text-white pr-10">
                                <p><strong>Name</strong></p>
                                <p><strong>Category</strong></p>
                                <p><strong>Brand</strong></p>
                                <p><strong>Release</strong></p>
                                <p><strong>Price</strong></p>
                                <p><strong>Quantity</strong></p>
                                <p><strong>Total Price</strong></p>
                            </div>
                            <div className="text-left space-y-9 text-xl
                            text-gray-400 pr-10">
                                <p><strong>{data.name}</strong></p>
                                <p><strong>{data.category}</strong></p>
                                <p><strong>{data.brand}</strong></p>
                                <p><strong>{data.year_released}</strong></p>
                                <p><strong>${data.price}</strong></p>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => {
                                                setQuantity(quantity + 1);
                                                setTotalPrice(data.price * quantity);
                                            }} 
                                            className="
                                                bg-green-500
                                                w-7
                                                text-black
                                            "
                                        >
                                            <strong>+</strong>
                                        </button>
                                        <p><strong>{quantity}</strong></p>
                                        <button 
                                            onClick={() => {
                                                if (quantity === 1) {
                                                    setQuantity(1)
                                                } else {
                                                    setQuantity(quantity - 1);
                                                }
                                                setTotalPrice(data.price * quantity);
                                            }} 
                                            className="
                                                bg-red-500
                                                w-7
                                                text-black
                                            "
                                        >
                                            <strong>-</strong>
                                        </button>
                                    </div>
                                <p><strong>${totalPrice}</strong></p>
                            </div>
                        </div>
    
                        <div className="space-y-20 space-x-9 text-xl pr-10 text-gray-500">
                            <button 
                                onClick={() => addToCartHandler()}
                                className="hover:text-blue-500 "
                            >
                                <p><strong>Add Cart</strong></p>
                            </button>
                            <button className="hover:text-yellow-500">
                                <p><strong>Buy Now</strong></p>
                            </button>
                            <Link href={{
                                pathname: '/buyer/',
                                query: {
                                    id: router.query.id,
                                    username: router.query.username,
                                    password: router.query.password,
                                    image_url: router.query.image_url,
                                    type_user: router.query.type_user
                                }
                            }}>
                                <button className="hover:text-red-500">
                                    <p><strong>Go Back</strong></p>
                                </button>
                            </Link>
                        </div>
                    </div>        
                </div>
            </div>
        );
    }

    return (
        <div>
            <ToastContainer />
            { !isLoading ? <Loading type="Bars" color="#00FF7F" height={100} width={100} /> : <TemplateRendering /> }
        </div>
    );
};

export default Detail;