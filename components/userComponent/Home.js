// Import from react
import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

// Import from owner
import { api_golang_read_game_by_id } from '../../pages/api/url';
import Loading from '../../UI/Loading';

const Home = (props) => {
    // Data
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const id = router.query.id;

    // Fetching data
    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8080/seller/2", {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game => {
            setData(game.game_list);
            setIsLoading(false)
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }, []);

    // Rendering template
    const TemplateRendering = () => {
        return (
            <div>
                {data.map(item => {
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                })}
            </div>
        );
    };

    return (
        <div>
            { !isLoading ? <Loading type="Oval" color="#228B22" height="50" width="50" /> : <TemplateRendering /> }
        </div>
    );
};

export default Home;