import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Network from './components/Network';
import HaveMoreQuestions from './components/HaveMoreQuestions';
import ReadyToConnect from './components/ReadyToConnect';

export default function Home() {
  return (
    <div className="w-full bg-[#f2fffb] overflow-hidden">
      <div className='w-full bg-[#f2fffb]'>
        <Navbar />
      </div>

      <Hero />

      <div className="w-full bg-[#fff]">
        <WhyChooseUs />
        <HowItWorks />
        <Network />
        <HaveMoreQuestions />
        <ReadyToConnect />
      </div>
    </div>
  );
}
