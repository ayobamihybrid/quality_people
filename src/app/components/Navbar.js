'use client';

import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

//react icons
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuLinks = [
    { title: 'Benefits', href: 'benefits' },
    { title: 'How it works', href: 'how-it-works' },
    { title: 'Service', href: 'service' },
    { title: 'FAQs', href: 'faqs' },
    { title: 'Testimonials', href: 'testimonials' },
    { title: 'Contact us', href: '/contact-us' },
  ];

  useEffect(() => {
    // If we have a pending scroll target and we're on the homepage
    if (pendingScroll && pathname === '/') {
      const element = document.getElementById(pendingScroll);
      if (element) {
        // Added a small delay to ensure the page content is loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setPendingScroll(null);
        }, 100);
      }
    }
  }, [pathname, pendingScroll]);

  const handleScroll = async (e, href) => {
    e.preventDefault();

    // If it's an absolute path (like /contact-us), just navigate
    if (href.startsWith('/')) {
      router.push(href);
      setIsMenuOpen(false);
      return;
    }

    // If we're not on the homepage, set pending scroll and navigate home
    if (pathname !== '/') {
      setPendingScroll(href);
      router.push('/');
      setIsMenuOpen(false);
      return;
    }

    // If we're already on the homepage, just scroll
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 xl:top-9 z-50 max-w-[1440px] mx-auto w-full py-3 px-4 bg-blue-50 md:p-4 rounded-md shadow-lg flex justify-between items-center">
      <div className="flex items-center gap-1">
        <svg
          viewBox="0 0 29 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px] h-[28px] xl:w-[36px] xl:h-[42px]"
        >
          <g clip-path="url(#clip0_165_4140)">
            <path
              d="M26.2254 30.8728C26.1571 30.668 26.0859 30.4514 26.0107 30.2268C25.1162 27.7795 25.1726 27.8339 24.7006 26.3719C24.6927 26.3224 24.6838 26.2759 24.6759 26.2314C24.187 24.7743 23.627 23.1144 22.9967 21.2537C22.9957 21.2557 22.9937 21.2577 22.9927 21.2596C21.1661 15.9308 19.3613 10.6652 17.5456 5.36794C17.0736 4.00679 16.5838 2.59716 16.0762 1.14005C15.531 1.07872 14.972 1.04212 14.3981 1.02926C7.24209 0.859114 0.944999 6.50653 0.138567 13.6724C-0.678749 21.0084 4.16281 27.8765 11.2564 29.3306C16.1485 30.1685 20.8604 30.6918 25.7752 31.2665C26.168 31.2982 26.0493 31.312 26.3847 31.3536C26.3669 31.3001 26.3501 31.2487 26.3323 31.1933C26.1462 30.7205 26.1917 30.8134 26.2264 30.8728H26.2254Z"
              fill="#8dceee"
            />
            <path
              d="M22.9973 21.2537C23.6276 23.1144 24.1877 24.7743 24.6765 26.2314C24.5894 25.7388 24.5379 25.5073 24.8694 25.1274C28.9679 20.4989 29.9771 15.2234 27.4925 9.57503C25.2702 4.52609 21.3231 1.72563 16.0768 1.14001C16.5844 2.59712 17.0742 4.00675 17.5462 5.36791C23.9047 6.93878 27.3649 15.2877 22.9973 21.2537Z"
              fill="#8dceee"
              stroke="#8dceee"
              stroke-width="0.193873"
              stroke-miterlimit="10"
            />
            <path
              d="M17.5447 5.36792C19.3604 10.6652 21.1652 15.9307 22.9918 21.2596C22.9928 21.2576 22.9948 21.2557 22.9958 21.2537C21.5551 17.004 19.7413 11.7038 17.5447 5.36792Z"
              fill="#8dceee"
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

        <div
          className="text-[#8dceee] font-bold text-xs md:text-sm xl:text-xl cursor-pointer"
          onClick={() => router.replace('/')}
        >
          <p>Quality</p>
          <p className="mt-[-4px] xl:mt-[-8px]">People</p>
        </div>
      </div>

      {/* Visible only on big screens */}
      <div className="hidden xl:flex text-xl text-[#000] gap-8">
        {menuLinks.map((navlink) => (
          <a
            key={navlink.title}
            href={
              navlink.href.startsWith('/') ? navlink.href : `#${navlink.href}`
            }
            onClick={(e) => handleScroll(e, navlink.href)}
            className="font-instrument cursor-pointer hover:text-[#F99B2A] transition-colors duration-200"
          >
            <p>{navlink.title}</p>
          </a>
        ))}
      </div>

      <button
        className="hidden xl:block bg-[#F99B2A] hover:bg-[#e88d1f] text-white font-instrument font-medium px-3 md:px-6 py-1 md:py-2 rounded-lg transition-colors duration-200"
        onClick={() => router.replace('/reffered')}
      >
        Get reffered
      </button>

      {/* hamburger icon for mobile screen */}
      <div className=" xl:hidden cursor-pointer" onClick={toggleMenu}>
        <GiHamburgerMenu color="#000" size={24} />
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full bg-neutral-900 shadow-xl transition-transform duration-300 ease-in-out transform lg:hidden z-[999] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="opacity-0">Menu</h2>
          <button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="p-4 space-y-4 xl:hidden">
          <div className="pt-4 space-y-2 border-t border-gray-800">
            {menuLinks.map((link) => (
              <a
                key={link.title}
                href={link.href.startsWith('/') ? link.href : `#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-gray-400 font-instrument hover:text-white py-2 text-lg transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-9 w-full flex justify-center">
          <button
            className=" bg-[#F99B2A] hover:bg-[#e88d1f] font-instrument text-lg text-white font-medium px-3 md:px-6 py-1 md:py-2 rounded-lg transition-colors duration-200"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              router.replace('/reffered');
            }}
          >
            Get reffered
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
