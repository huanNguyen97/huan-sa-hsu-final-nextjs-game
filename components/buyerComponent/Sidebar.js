// Import from nextjs
import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

import {
    HomeIcon,
    SearchIcon,
    ShoppingCartIcon,
    BriefcaseIcon,
    ChartBarIcon,
    LogoutIcon
} from '@heroicons/react/outline';

const Sidebar = (props) => {
    // Data 
    const router = useRouter();

    return (
        <div className="text-gray-500 p-5 text-sm lg:text-sm border-r 
        border-gray-900 h-screen scrollbar-hide">
            <div className="space-y-4">
                <Link href={{
                    pathname: "/buyer/",
                    query: {
                        id: router.query.id,
                        username: router.query.username,
                        password: router.query.password,
                        image_url: router.query.image_url,
                        type_user: router.query.type_user,
                    }
                }}>
                    <button className={`flex items-center space-x-2 
                    hover:text-white ${props.color} w-full h-8 rounded-lg`}>
                        <HomeIcon className="h-5 w-5" />
                        <p><strong>Home</strong></p>
                    </button>
                </Link>
                <button className={`flex items-center space-x-2 
                hover:text-white ${props.color} w-full h-8 rounded-lg`}>
                    <SearchIcon className="h-5 w-5" />
                    <p><strong>Search</strong></p>
                </button>
                <button onClick={() => {
                    router.push({
                        pathname: "/buyer/shopping-cart/[userID]",
                        query: {
                            id: router.query.id,
                            username: router.query.username,
                            password: router.query.password,
                            image_url: router.query.image_url,
                            type_user: router.query.type_user,
                            userID: router.query.id
                        }
                    })
                }} className={`flex items-center space-x-2 
                hover:text-white ${props.color} w-full h-8 rounded-lg`}>
                    <ShoppingCartIcon className="h-5 w-5" />
                    <p><strong>Shopping Cart</strong></p>
                </button>
                <button onClick={() => {
                    router.push({
                        pathname: "/buyer/payment-history/[userID]",
                        query: {
                            id: router.query.id,
                            username: router.query.username,
                            password: router.query.password,
                            image_url: router.query.image_url,
                            type_user: router.query.type_user,
                            userID: router.query.id
                        }
                    })
                }}
                className={`flex items-center space-x-2 
                hover:text-white ${props.color} w-full h-8 rounded-lg`}>
                    <ChartBarIcon className="h-5 w-5 " />
                    <p><strong>Payment history</strong></p>
                </button>

                <hr className="border-t-[0.1px] border-gray-900" />
                
                <button className={`flex items-center space-x-2 
                hover:text-white ${props.color} w-full h-8 rounded-lg`}>
                    <LogoutIcon className="h-5 w-5"/>
                    <p><strong>Logout</strong></p>
                </button>
            </div>
        </div>
    )
};

export default Sidebar;