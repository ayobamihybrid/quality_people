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
    <section
      id="testimonials"
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-center items-center min-h-[19rem] my-4">
        <div className="flex justify-center items-center w-full">
          {testimonials.map((testimonial, index) => {
            let position = index - currentIndex;

            if (position < -1) position = testimonials.length - 1;
            if (position > 1) position = -testimonials.length + 1;

            return (
              <div
                key={index}
                className={`
                  absolute w-full max-w-xl p-6 rounded-lg transition-all duration-500 text-black
                  ${
                    position === 0
                      ? 'z-20 opacity-100 scale-100 translate-x-0 bg-sky-200'
                      : position === -1
                      ? 'z-10 opacity-70 scale-90 -translate-x-[100%] bg-sky-100'
                      : position === 1
                      ? 'z-10 opacity-70 scale-90 translate-x-[100%] bg-sky-100'
                      : 'opacity-0'
                  }
                `}
              >
                <div className="bg-white/10 rounded-lg p-6">
                  <BiSolidQuoteAltLeft className="w-8 h-8 mb-4 text-black" />

                  <p className="text-left text-lg mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h3 className="text-sm font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {testimonials.map((_, testimonialsIndex) => (
          <div
            key={testimonialsIndex}
            onClick={() => goToSlide(testimonialsIndex)}
            className={`
              h-4 rounded-full cursor-pointer transition-all duration-300
              ${
                currentIndex === testimonialsIndex
                  ? 'bg-[#f39c13] w-20 2xl:w-24'
                  : 'bg-gray-300 w-4 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
