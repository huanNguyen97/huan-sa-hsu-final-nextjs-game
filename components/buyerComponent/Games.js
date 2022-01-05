// Import from reactjs 
import React, { useState, useEffect } from 'react';

// Import from owner
import Game from './Game';
import Loading from '../../UI/Loading';

import { api_python_read_all } from '../../pages/api/url';

const Games = () => {
    // Set data
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch all data
    useEffect(() => {
        fetch(api_python_read_all, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game => {
            setData(game.game_list);
            setIsLoading(true);
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }, [])

    // Render template 
    const TemplateRendering = () => {
        return (
            <ul>
                {data.map((item, index) => {
                    return (
                        <Game
                            key={item.id}
                            index={index}
                            item={item} 
                        />
                    );
                })}
            </ul>
        );
    };
    
    
    
    
    return (
        <div>
            { !isLoading ? <Loading type="Bars" color="#00FF7F" height={100} width={100} /> : <TemplateRendering /> }
        </div>
    );
};

export default Games;