'use client';

import React, { useEffect, useState } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        goToNext();
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [currentIndex, isHovered, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="relative w-full mx-auto h-96 xl:h-[28rem] 2xl:h-[29rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      <div className="mt-9 flex justify-center space-x-3">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`
              w-3 h-3 2xl:w-5 2xl:h-5 rounded-full cursor-pointer transition-all duration-300
              ${
                currentIndex === slideIndex
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

export default ImageSlider;
