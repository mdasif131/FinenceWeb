
import './App.css'
import { Button } from '@heroui/react';
import NavbarArea from './Component/Navbar';
import Hero from './Component/Hero';
import Vision from './Component/Vision';
import Offer from './Component/Offer';
import DebitCard from './Component/DebitCard';
import PerfectCard from './Component/PerfectCard';
import Feedback from './Component/Feedback';
import FAQs from './Component/FAQs';
import Footer from './Component/Footer';

function App() {
 

  return (
    <>
      <main className="overflow-x-hidden">
        <NavbarArea />
        <div className="w-full max-w-[1400px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5">
          <div className='space-y-[80px]'>
            <Hero />
            <Vision />
            <Offer />
            <DebitCard />
            <PerfectCard />
            <Feedback />
            <FAQs />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App
