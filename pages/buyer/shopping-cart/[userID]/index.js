// Import from nextjs
import Head from 'next/head'

// Import from owner
import Sidebar from '../../../../components/buyerComponent/Sidebar';
import CartCenter from '../../../../components/buyerComponent/CartCenter';

export default function ShoppingCart() {
  return (
    <div className="bg-black h-screen 
    overflow-hidden">
      <main className="flex">
        <Sidebar
          color="hover:bg-fuchsia-600"
        />
        <CartCenter 
          bgColor="bg-fuchsia-400"
          infoColor="from-fuchsia-500"
          imgSrc="https://wallpaperaccess.com/full/3045553.jpg"
          title="SHOPPING CART"
          subTitle="READY FOR BUYING SOMETHING NEW?"
        />
      </main>
    </div>
  )
}