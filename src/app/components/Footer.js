import React from 'react';

import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = ({ contactUs }) => {
  return (
    <div
      className={`w-full bg-[#2c3f50] flex flex-col md:flex-row justify-between items-center gap-14 md:gap-0 py-12 xl:py-36 px-[6rem] ${
        contactUs && 'rounded-t-[2rem] xl:rounded-t-[5rem] py-12 xl:py-36 px-20'
      } `}
    >
      <div className="flex items-center gap-1">
        <svg
          viewBox="0 0 29 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[4rem]"
        >
          <g clip-path="url(#clip0_165_4140)">
            <path
              d="M26.2254 30.8728C26.1571 30.668 26.0859 30.4514 26.0107 30.2268C25.1162 27.7795 25.1726 27.8339 24.7006 26.3719C24.6927 26.3224 24.6838 26.2759 24.6759 26.2314C24.187 24.7743 23.627 23.1144 22.9967 21.2537C22.9957 21.2557 22.9937 21.2577 22.9927 21.2596C21.1661 15.9308 19.3613 10.6652 17.5456 5.36794C17.0736 4.00679 16.5838 2.59716 16.0762 1.14005C15.531 1.07872 14.972 1.04212 14.3981 1.02926C7.24209 0.859114 0.944999 6.50653 0.138567 13.6724C-0.678749 21.0084 4.16281 27.8765 11.2564 29.3306C16.1485 30.1685 20.8604 30.6918 25.7752 31.2665C26.168 31.2982 26.0493 31.312 26.3847 31.3536C26.3669 31.3001 26.3501 31.2487 26.3323 31.1933C26.1462 30.7205 26.1917 30.8134 26.2264 30.8728H26.2254Z"
              fill="white"
            />
            <path
              d="M22.9973 21.2537C23.6276 23.1144 24.1877 24.7743 24.6765 26.2314C24.5894 25.7388 24.5379 25.5073 24.8694 25.1274C28.9679 20.4989 29.9771 15.2234 27.4925 9.57503C25.2702 4.52609 21.3231 1.72563 16.0768 1.14001C16.5844 2.59712 17.0742 4.00675 17.5462 5.36791C23.9047 6.93878 27.3649 15.2877 22.9973 21.2537Z"
              fill="white"
              stroke="white"
              stroke-width="0.193873"
              stroke-miterlimit="10"
            />
            <path
              d="M17.5447 5.36792C19.3604 10.6652 21.1652 15.9307 22.9918 21.2596C22.9928 21.2576 22.9948 21.2557 22.9958 21.2537C21.5551 17.004 19.7413 11.7038 17.5447 5.36792Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_165_4140">
              <rect
                width="28.8871"
                height="30.4381"
                fill="white"
                transform="translate(0 0.975708)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="text-[#fff] font-playfair font-bold text-sm md:text-xl xl:text-3xl ">
          <p>Quality</p>
          <p className="mt-[-4px] xl:mt-[-8px]">People</p>
        </div>
      </div>

      <div className="flex gap-4 xl:gap-6 text-[#000] justify-end items-center">
        <a
          href="#"
          className="bg-[#fff] p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <FaInstagram className="w-4 h-4 xl:w-9 xl:h-9" />
        </a>
        <a
          href="#"
          className="bg-[#fff] p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <FaXTwitter className="w-4 h-4 xl:w-9 xl:h-9" />
        </a>
        <a
          href="#"
          className="bg-[#fff] p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <FaFacebookF className="w-4 h-4 xl:w-9 xl:h-9" />
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <a href="#" className="w-40">
          <Image
            src="/appStore.png"
            alt="love icon"
            width={63}
            height={48}
            className=" w-full object-contain"
          />
        </a>
        <a href="#" className="w-40">
          <Image
            src="/playStore.png"
            alt="love icon"
            width={63}
            height={48}
            className=" w-full object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
