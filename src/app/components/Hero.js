'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="mt-8 xl:mt-20 2xl:mt-40 w-[90%] max-w-[1440px] mx-auto min-h-[60vh] space-y-8 xl:space-y-0 flex flex-col items-center xl:items-start xl:flex-row xl:justify-between">
      <div className="w-full max-w-xl xl:max-w-[45%] text-black space-y-4 md:space-y-5 text-center xl:text-start">
        <p className="font-playfair text-lg md:text-2xl">
          Connect. Trust. Thrive
        </p>
        <p className="font-playfair text-4xl md:text-[3.5rem] md:leading-[4rem] xl:text-[4rem] xl:leading-[5rem] font-bold ">
          Connecting social and business minds
        </p>
        <p className="font-instrument text-sm md:text-lg lg:text-xl xl:text-lg">
          Whether you&#39;re expanding your professional circle, seeking new
          collaborations, or simply looking for a trusted community to engage
          with, Quality people empowers you to connect with purpose
        </p>
        <button
          className="bg-[#F99B2A] hover:bg-[#e88d1f] text-white font-instrument font-medium px-3 md:px-6 py-1 md:py-2 rounded-lg transition-colors duration-200"
          onClick={() => router.replace('/reffered')}
        >
          Get reffered
        </button>

        <div className="flex gap-1 text-xs justify-center items-center xl:justify-start">
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
                fill="black"
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
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center xl:max-w-[45%]">
        <div>
          <div className="flex items-center gap-5 relative z-20">
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[368px] lg:h-[361px] p-3 xl:p-6">
              <div className="absolute inset-0 rounded-full border-[10px] xl:border-[20px] border-[#a3b18a]"></div>
              <Image
                src="/Hero_img1.png"
                alt="Person smiling while looking at phone"
                width={368}
                height={361}
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="mt-[-80px] xl:mt-[-90px] relative w-[45px] h-[45px] md:w-[70px] md:h-[70px] xl:w-[93px] xl:h-[93px] bg-[#8dceee] rounded-full flex justify-center items-center">
              <Image
                src="/love_icon.png"
                alt="love icon"
                width={63}
                height={48}
                className="w-[28px] h-[20px] md:w-[40px] md:h-[30px] xl:w-[55px] xl:h-[40px] object-contain"
              />
            </div>
          </div>

          <div className="mt-[-60px] md:mt-[-70px] xl:mt-[-110px] flex items-center gap-[60px] md:gap-[80px] relative z-10">
            <div className="mt-[-70px] md:mt-[-80px] xl:mt-[-90px] relative w-[45px] h-[45px] md:w-[70px] md:h-[70px] xl:w-[93px] xl:h-[93px] bg-[#8dceee] rounded-full flex justify-center items-center">
              <Image
                src="/message_icons.png"
                alt="message icon"
                width={63}
                height={48}
                className="w-[28px] h-[20px] md:w-[40px] md:h-[30px] xl:w-[55px] xl:h-[40px] object-contain"
              />
            </div>

            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[368px] lg:h-[361px] p-3 xl:p-6">
              <div className="absolute inset-0 rounded-full border-[10px] xl:border-[20px] border-[#8dceee]"></div>
              <Image
                src="/Hero_img2.png"
                alt="Person smiling while looking at phone"
                width={368}
                height={361}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
