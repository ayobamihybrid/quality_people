import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Leverage Referrals',
      description:
        'Use referrals to connect with individuals who share your values and aspirations.',
    },
    {
      step: 'Step 2',
      title: 'Build Your Profile',
      description:
        'Showcase your skills, interests, and goals. Let others know who you are and what you stand for.',
    },
    {
      step: 'Step 3',
      title: 'Expand Your Network',
      description:
        'Discover new opportunities, grow your personal and professional circles, and nurture relationships that matter.',
    },
  ];

  return (
    <section id="how-it-works" className="px-3 xl:px-5">
      <div className="max-w-[1440px] mx-auto w-full my-9 xl:my-20 p-9 md:p-12 2xl:p-16 bg-[#FDF6F1] rounded-2xl text-[#000] font-playfair">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl xl:text-7xl font-bold mb-12">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((item, index) => (
            <div key={index} className="text-center p-4 relative">
              <div className="mb-4">
                <span className="text-sm md:text-lg 2xl:text-2xl text-[#F99B2A] font-bold">
                  {item.step}
                </span>
              </div>
              <h3 className="font-instrument text-xl md:text-2xl 2xl:text-3xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="font-instrument text-base md:text-lg 2xl:text-xl">
                {item.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 xl:top-[60%] -right-12 w-12 transform -translate-y-1/2">
                  <div className="border-t-2 border-dashed border-[#00000066]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
