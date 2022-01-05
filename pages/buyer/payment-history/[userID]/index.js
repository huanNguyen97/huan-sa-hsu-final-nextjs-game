// Import from nextjs
import Head from 'next/head'

// Import from owner
import Sidebar from '../../../../components/buyerComponent/Sidebar';
import PaymentCenter from '../../../../components/buyerComponent/PaymentCenter';

export default function ShoppingCart() {
  return (
    <div className="bg-black h-screen 
    overflow-hidden">
      <main className="flex">
        <Sidebar
          color="hover:bg-blue-600"
        />
        <PaymentCenter 
          bgColor="bg-blue-400"
          infoColor="from-blue-500"
          imgSrc="https://i.pinimg.com/736x/fd/38/7f/fd387fa429ce8b0932495216bda6b86e.jpg"
          title="PAYMENT HISTORY"
          subTitle="RE-CHECK YOUR GAME YOU HAVE BOUGHT"
        />
      </main>
    </div>
  )
}