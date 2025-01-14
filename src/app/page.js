import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';

export default function Home() {
  return (
    <div className="w-full bg-inherit overflow-hidden">
      <Navbar />

      <Hero />

      <div className="w-full bg-[#fff]">
        <WhyChooseUs />
        <HowItWorks />
      </div>
    </div>
  );
}
