import React from 'react';
import FAQ from './FAQ';

const HaveMoreQuestions = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-[#F5E6CC80] rounded-[2rem] xl:rounded-t-[5rem] px-4 pt-8 pb-14 xl:px-16 xl:py-32 text-[#000]">
      <div className="flex flex-col xl:flex-row gap-9 xl:gap-14">
        <p className="xl:max-w-lg font-playfair text-center xl:text-left text-3xl md:text-5xl xl:text-7xl font-bold">
          Have more questions ?
        </p>

        <FAQ />
      </div>
    </div>
  );
};

export default HaveMoreQuestions;
