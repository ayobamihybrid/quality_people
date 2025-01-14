import React from 'react';
import ImageSlider from './ImageSlider';

const WhyChooseUs = () => {
  const slides = [
    {
      url: '/sliderImg1.png',
      title: 'Referral-based connections',
      description:
        'Using the power of referrals, our platform helps you connect with trusted individuals recommended by your network',
    },
    {
      url: '/sliderImg2.png',
      title: 'Social Meets Professional',
      description: 'Build meaningful connections in a professional context',
    },
    {
      url: '/sliderImg3.png',
      title: 'Expand Your Network',
      description: 'Discover new opportunities through trusted connections',
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto w-full py-9 px-3 xl:px-5">
      <div className="flex flex-col space-y-4 xl:space-y-9 justify-center items-center text-[#000] text-center">
        <p className="font-playfair text-4xl xl:text-7xl font-bold">
          Why choose us
        </p>

        <p className=" w-full xl:max-w-[55%] font-instrument text-lg xl:text-2xl">
          Designed for social and business enthusiasts who are passionate about
          building meaningful, valuable connections
        </p>

        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
