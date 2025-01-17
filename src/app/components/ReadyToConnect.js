import React from 'react';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const ReadyToConnect = () => {
  return (
    <div className="relative mt-[-1rem] xl:mt-[-3rem] w-full  bg-[#2c3f50] rounded-t-[2rem] xl:rounded-t-[5rem]">
      <div className="hidden xl:block absolute left-16 top-16">
        <div className="w-16 h-16 xl:w-32 xl:h-32 rounded-full overflow-hidden">
          <Image
            src="/Hero_img1.png"
            alt="Person smiling while looking at phone"
            width={368}
            height={361}
            className="hidden xl:block w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="hidden xl:block  absolute right-32 top-[24rem]">
        <div className="w-16 h-16 xl:w-32 xl:h-32 rounded-full overflow-hidden">
          <Image
            src="/reffered_img.png"
            alt="Person smiling while looking at phone"
            width={368}
            height={361}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden xl:block absolute right-32 top-14">
        <div className="relative w-[45px] h-[45px] md:w-[70px] md:h-[70px] xl:w-[93px] xl:h-[93px] bg-[#ffffff9a] rounded-full flex justify-center items-center">
          <Image
            src="/message_icons.png"
            alt="message icon"
            width={63}
            height={48}
            className=" w-[28px] h-[20px] md:w-[40px] md:h-[30px] xl:w-[55px] xl:h-[40px] object-contain"
          />
        </div>
      </div>
      <div className="hidden xl:block absolute left-36 top-[28rem]">
        <div className="relative w-[45px] h-[45px] md:w-[70px] md:h-[70px] xl:w-[93px] xl:h-[93px] bg-[#ffffff9a] rounded-full flex justify-center items-center">
          <Image
            src="/love_icon.png"
            alt="love icon"
            width={63}
            height={48}
            className=" w-[28px] h-[20px] md:w-[40px] md:h-[30px] xl:w-[55px] xl:h-[40px] object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center pt-20">
        <h2 className="font-playfair text-3xl md:text-5xl xl:text-7xl font-bold">
          Ready to connect with purpose?
        </h2>
        <p className="my-5 xl:my-9 text-slate-300 text-lg md:text-2xl xl:text-3xl mb-8 max-w-2xl mx-auto">
          Sign up today and become part of a trusted community where meaningful
          relationships drive success.
        </p>

        <button className="bg-[#f39c13] text-white px-5 md:px-8 py-2 md:py-4 rounded-2xl text-sm md:text-2xl xl:text-3xl font-medium hover:bg-[#f39d13a0] transition-colors mb-4">
          Get referred
        </button>

        <div className="flex gap-1 text-xs xl:text-lg justify-center items-center mb-24">
          <p>AVAILABLE ON IOS & ANDROID |</p>
          <div className="flex gap-1 items-end">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6207 5.45495C12.5278 5.52695 10.888 6.45024 10.888 8.50325C10.888 10.8779 12.9746 11.718 13.037 11.7388C13.0274 11.79 12.7055 12.8893 11.9369 14.0094C11.2515 14.9951 10.5356 15.9792 9.44669 15.9792C8.35773 15.9792 8.07749 15.3471 6.82038 15.3471C5.59531 15.3471 5.15973 16 4.16365 16C3.16758 16 2.47257 15.0879 1.67347 13.9678C0.747856 12.6525 0 10.6091 0 8.66967C0 5.55896 2.02418 3.90919 4.01632 3.90919C5.07485 3.90919 5.95723 4.60366 6.62181 4.60366C7.25436 4.60366 8.24083 3.86759 9.44509 3.86759C9.90149 3.86759 11.5413 3.90919 12.6207 5.45495ZM8.87338 2.55065C9.37142 1.9602 9.72373 1.14091 9.72373 0.321632C9.72373 0.208021 9.71412 0.0928093 9.6933 0C8.88299 0.030403 7.91895 0.539254 7.33764 1.21292C6.88124 1.73137 6.45526 2.55065 6.45526 3.38114C6.45526 3.50595 6.47608 3.63076 6.48569 3.67077C6.53693 3.68037 6.62021 3.69157 6.70348 3.69157C7.43052 3.69157 8.34492 3.20512 8.87338 2.55065Z"
                fill="white"
              />
            </svg>
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.74267 3.80657L8.76262 3.78688L2.52152 0.211075C2.28673 0.0735637 2.01969 0.000734135 1.74759 2.96003e-06C1.41897 -0.000648261 1.09916 0.106171 0.836891 0.304178C0.574625 0.502185 0.384298 0.780517 0.294922 1.09675L0.371788 1.17265L0.295774 1.10156C0.262201 1.22568 0.245496 1.35375 0.24611 1.48232V11.7628C0.246445 11.8909 0.263049 12.0185 0.295522 12.1425L0.294922 12.1432C0.357287 12.3642 0.469366 12.5681 0.62259 12.7392C0.775815 12.9102 0.966129 13.044 1.17898 13.1303C1.39184 13.2165 1.6216 13.253 1.8507 13.2368C2.0798 13.2207 2.30218 13.1524 2.50083 13.0371L8.7502 9.47788L8.44267 9.14358L8.77503 9.47144L11.4569 7.94014C11.6945 7.81574 11.8935 7.62868 12.0323 7.39924C12.1712 7.16979 12.2446 6.90672 12.2446 6.63853C12.2446 6.37034 12.1712 6.10727 12.0323 5.87782C11.8935 5.64838 11.6945 5.46132 11.4569 5.33692H11.4652L8.76262 3.78906L8.74267 3.80657Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex flex-col md:flex-row justify-between items-center gap-14 md:gap-0 p-4">
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

        <div className="flex gap-4 text-[#000]">
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
    </div>
  );
};

export default ReadyToConnect;
