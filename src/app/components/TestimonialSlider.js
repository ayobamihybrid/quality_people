'use client';
import React, { useState, useEffect } from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered, testimonials.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-center items-center min-h-[18rem] md:min-h-[15rem] xl:min-h-[20rem] my-4 2xl:my-8">
        {testimonials.map((testimonial, index) => {
          let position = index - currentIndex;

          if (position < -1) position = testimonials.length - 1;
          if (position > 1) position = -testimonials.length + 1;

          return (
            <div
              key={index}
              className={`
                absolute w-full max-w-2xl p-8 2xl:p-14 rounded-lg transition-all duration-500 text-[#000]
                ${
                  position === 0
                    ? 'z-20 opacity-100 scale-100 bg-[#8dceee]'
                    : position === -1
                    ? 'z-10 opacity-50 scale-90 -translate-x-[60%] bg-[#8eccea]'
                    : position === 1
                    ? 'z-10 opacity-50 scale-90 translate-x-[60%] bg-[#8eccea]'
                    : 'opacity-0 scale-90'
                }
              `}
            >
              <BiSolidQuoteAltLeft className=" w-8 h-8 2xl:w-14 2xl:h-14 mb-2" />

              <p className="text-left text-lg 2xl:text-2xl mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="text-sm 2xl:text-lg font-bold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm 2xl:text-lg">{testimonial.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center space-x-3 mb-9">
        {testimonials.map((_, testimonialsIndex) => (
          <div
            key={testimonialsIndex}
            onClick={() => goToSlide(testimonialsIndex)}
            className={`
              w-3 h-3 2xl:w-5 2xl:h-5 rounded-full cursor-pointer transition-all duration-300
              ${
                currentIndex === testimonialsIndex
                  ? 'bg-[#f39c13] w-12 2xl:w-24'
                  : 'bg-gray-400 hover:bg-gray-600'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
