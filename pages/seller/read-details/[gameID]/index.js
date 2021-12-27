// Import react 
import React from 'react';
import { useRouter } from 'next/router';

const ReadDetails = () => {
    // Set data
    const router = useRouter();
    const id_game = router.query.gameID;

    return (
        <div>
            <p>Read detail game {id_game}</p>
        </div>
    );
};

export default ReadDetails;