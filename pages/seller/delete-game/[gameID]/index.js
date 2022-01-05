// Import from react
import React from 'react';
import { useRouter } from 'next/router';
import { 
    UserIcon,
    DocumentIcon,
    FlagIcon,
    PhotographIcon,
    CalendarIcon,
    CashIcon
} from '@heroicons/react/solid'
import { useForm } from 'react-hook-form';

// Import from owner
import DashBoard from '../../../../components/userComponent/DashBoard';
import Navbar from '../../../../components/userComponent/Navbar';
import Content from '../../../../components/userComponent/Content';
import { api_golang_delete_game } from '../../../api/url';

const CreateGame = () => {
    // Data from query
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const id = router.query.id;
    const username = router.query.username;
    const password = router.query.password;
    const image_url = router.query.image_url;
    const type_user = router.query.type_user;
    const gameID = router.query.gameID;

    // Delete api
    const deleteHandle = () => {
        fetch(api_golang_delete_game + gameID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(game => {
            console.log(game);
        })
        .then(() => {
            cancelHandler();
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    };

    // Cancelling
    const cancelHandler = () => {
        router.push({
            pathname: '/seller',
            query: {
                id: id,
                username: username,
                password: password,
                image_url: image_url,
                type_user: type_user,
            }
        })
    };

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
                    <div className="flex flex-col space-y-20 w-5/6 h-full justify-center">
                        <div className="flex justify-center">
                            <p className="text-6xl">Delete game with id {gameID}?</p>
                        </div>
                        <div className="flex space-x-80 justify-center">
                            <button onClick={deleteHandle} className="bg-green-500 w-48 h-24 rounded-lg hover:border-2 hover:bg-green-400">
                                <p className="text-5xl">Yes</p>
                            </button>
                            <button onClick={cancelHandler} className="bg-red-500 w-48 h-24 rounded-lg hover:border-2 hover:bg-red-400">
                                <p className="text-5xl">No</p>
                            </button>
                        </div>                        
                    </div>
                    {/* End Content */}
                </div>
            </main>
        </div>
    );
};

export default CreateGame;