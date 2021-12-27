// Import from react
import React from 'react';
import { useRouter } from 'next/router';

// Import from owner
import DashBoard from '../../components/userComponent/DashBoard';
import Navbar from '../../components/userComponent/Navbar';
import Content from '../../components/userComponent/Content';

const Seller = () => {
    // Data from query
    const router = useRouter();

    const id = router.query.id;
    const username = router.query.username;
    const password = router.query.password;
    const image_url = router.query.image_url;
    const type_user = router.query.type_user;

    return (
        <div>
            <main className="flex h-screen w-screen">
                {/* Dashboard */}
                <DashBoard />
                {/* End Dashboard */}


                <div className="flex flex-col w-5/6">
                    {/* Navbar */}
                    <Navbar
                        id_user={id} 
                        username={username}
                        password={password}
                        image_url={image_url}
                        type_user={type_user}
                    />
                    {/* End Navbar */}

                    {/* Content */}
                    <Content
                        id_user={id}  
                    />
                    {/* End Content */}
                </div>
            </main>
        </div>
    );
};

export default Seller;