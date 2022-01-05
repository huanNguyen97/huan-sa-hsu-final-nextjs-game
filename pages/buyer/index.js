// Import from nextjs
import Head from 'next/head'

// Import from owner
import Sidebar from '../../components/buyerComponent/Sidebar';
import HomeCenter from '../../components/buyerComponent/HomeCenter';

export default function Home() {
  return (
    <div className="bg-black h-screen 
    overflow-hidden">
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