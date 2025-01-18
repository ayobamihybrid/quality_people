'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from './Footer';

const ReadyToConnect = () => {
  const router = useRouter();

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
        <p className="font-instrument my-5 xl:my-9 text-slate-300 text-lg md:text-2xl xl:text-3xl mb-8 max-w-2xl mx-auto">
          Sign up today and become part of a trusted community where meaningful
          relationships drive success.
        </p>

        <button
          className="bg-[#f39c13] text-white px-5 md:px-8 py-2 md:py-4 rounded-2xl text-sm md:text-2xl xl:text-3xl font-medium font-instrument hover:bg-[#f39d13a0] transition-colors mb-4"
          onClick={() => router.replace('/reffered')}
        >
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

      <Footer />
    </div>
  );
};

export default ReadyToConnect;
