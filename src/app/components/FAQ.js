'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      title: 'How does the referral work?',
      content: 'Content for referral explanation would be here...',
      category: 'dating',
    },
    {
      id: 2,
      title: 'What digital assets can I convert?',
      content: 'Content for digital assets conversion goes here...',
      category: 'networking',
    },
    {
      id: 3,
      title: 'How do I deposit and withdraw funds?',
      content: 'Content for deposit and withdrawal information goes here...',
      category: 'networking',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('dating');

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-[#fff] p-4 md:p-7 rounded-3xl">
      <div className="flex gap-2 mb-6 max-w-xs rounded-full p-2 md:p-3 bg-[#f39d1383]">
        <button
          onClick={() => setActiveCategory('dating')}
          className={`px-5 py-1 md:py-2 rounded-full text-sm md:text-lg xl:text-[1.4rem] font-medium transition-colors
            ${
              activeCategory === 'dating'
                ? 'bg-[#f39c13] text-white'
                : 'bg-transparent text-gray-600'
            }`}
        >
          Dating
        </button>
        <button
          onClick={() => setActiveCategory('networking')}
          className={`px-5 py-1 md:py-2 rounded-full text-sm md:text-lg xl:text-[1.4rem] font-medium transition-colors
            ${
              activeCategory === 'networking'
                ? 'bg-[#f39c13] text-white'
                : 'bg-transparent text-gray-600'
            }`}
        >
          Networking
        </button>
      </div>

      <div className="space-y-4 font-instrument">
        {faqItems
          .filter((item) => item.category === activeCategory)
          .map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 bg-[#F5E6CC80] hover:bg-[#f5e6cc] transition-colors"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg md:text-xl xl:text-2xl font-medium text-left">
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-content-${index}`}
                role="region"
                className={`overflow-hidden transition-all duration-200 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-white text-lg md:text-xl xl:text-2xl ">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FAQ;
