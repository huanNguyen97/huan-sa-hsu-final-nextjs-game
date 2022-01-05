// Import from react
import React from 'react';
import { useRouter } from 'next/router'

// Import from owner
import Sidebar from '../../../../components/buyerComponent/Sidebar';
import DetailCenter from '../../../../components//buyerComponent/DetailCenter';

const Details = () => {
    const router = useRouter();
    const { gameID } = router.query

    return (
        <div className="bg-black h-screen 
            overflow-hidden">
            <main className="flex">
                <Sidebar
                    color="hover:bg-green-600"
                />
                <DetailCenter 
                    gameID={gameID}
                    bgColor="bg-green-200"
                    infoColor="from-green-400"
                    imgSrc="https://i.pinimg.com/736x/dd/72/fe/dd72fe3a757cde6ef32d2ab58fb1d301.jpg"
                    title="GAMELIST"
                    subTitle="RELAX AFTER LONG DAY"
                />
            </main>
        </div>
    );
};

export default Details;