import React from 'react';
import Image from 'next/image';
import TestimonialSlider from './TestimonialSlider';

const Network = () => {
  const testimonials = [
    {
      text: "This platform has completely transformed the way I network. I've connected with incredible individuals who share my values and drive for success. ",
      name: 'Alex M.',
      title: 'Product Designer',
      avatar: '/Hero_img1.png',
    },
    {
      text: "The quality of connections I've made through this platform is unmatched. Every interaction feels purposeful and aligned with my professional goals.",
      name: 'Sarah K.',
      title: 'Marketing Director',
      avatar: '/Hero_img1.png',
    },
    {
      text: "What sets this platform apart is its focus on trust and genuine relationships. It's refreshing to network in such an authentic way.",
      name: 'Michael R.',
      title: 'Business Development',
      avatar: '/Hero_img1.png',
    },
    {
      text: "What sets this platform apart is its focus on trust and genuine relationships. It's refreshing to network in such an authentic way.",
      name: 'Michael R.',
      title: 'Business Development',
      avatar: '/Hero_img1.png',
    },
    {
      text: "What sets this platform apart is its focus on trust and genuine relationships. It's refreshing to network in such an authentic way.",
      name: 'Michael R.',
      title: 'Business Development',
      avatar: '/Hero_img1.png',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto my-14 px-3 xl:px-5">
      <div className="flex flex-col space-y-4 md:space-y-9 justify-center items-center text-[#000] text-center">
        <p className="max-w-xl xl:max-w-4xl font-playfair text-3xl md:text-5xl xl:text-7xl font-bold">
          Join a network that values trust and growth
        </p>

        <div className="w-full flex flex-col xl:flex-row items-center gap-5">
          <div className="w-full xl:w-[55%] h-auto xl:h-[211px] 2xl:h-[400px]">
            <Image
              src="/Network_img2.png"
              alt="Person smiling while looking at phone"
              width={368}
              height={361}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full xl:w-[45%] h-auto xl:h-[211px] 2xl:h-[400px]">
            <Image
              src="/Network_img1.png"
              alt="Person smiling while looking at phone"
              width={368}
              height={361}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>

        <p className="max-w-4xl font-playfair text-3xl md:text-5xl xl:text-7xl font-bold">
          Hear what our people have to say
        </p>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Network;
