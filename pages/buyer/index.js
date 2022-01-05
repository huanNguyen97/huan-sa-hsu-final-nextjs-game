// Import from nextjs
import Head from 'next/head';
import React, { useEffect } from 'react';

// Import from owner
import Sidebar from '../../components/buyerComponent/Sidebar';
import HomeCenter from '../../components/buyerComponent/HomeCenter';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  // For success buying
  const router = useRouter();

  // Notificate an error:
  useEffect(() => {
    if (router.query.success !== null) {
        toast.success(router.query.success, { theme: 'colored' })
        router.query.success = null;
    }
  }, [router.query.success]);  


  return (
    <div className="bg-black h-screen 
    overflow-hidden">
      <ToastContainer />
      <main className="flex">
        <Sidebar
          color="hover:bg-green-600"
        />
        <HomeCenter 
          bgColor="bg-green-200"
          infoColor="from-green-400"
          imgSrc="https://i.pinimg.com/736x/dd/72/fe/dd72fe3a757cde6ef32d2ab58fb1d301.jpg"
          title="GAMELIST"
          subTitle="RELAX AFTER LONG DAY"
        />
      </main>
    </div>
  )
}