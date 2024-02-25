/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import pranjal_header_black from "@/public/pranjal-header-black.svg";
import pranjal_header_white from "@/public/pranjal-header-white.svg";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter().asPath;
  const [mounted, setMounted] = useState(false);
  let Links = [
    { name: "timeline", link: "/timeline" },
    { name: "work", link: "/work" },
    { name: "about", link: "/about" },
    { name: "tech", link: "/tech" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  const touchRef = useRef();
  const clickHandler = (link) => {
    if (router != link) {
      setTimeout(() => {
        setOpen(false);
      }, 700);
    }
  };
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(touchRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav
      ref={touchRef}
      className={`${
        isScrolled && "bg-opacity-[0.5] shadow-md drop-shadow-lg "
      } font-medium duration-500 bg-opacity-50 transition-all linear z-40 dark:text-white w-[75%] sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[50%] max-w-6xl mx-auto  bg-white dark:bg-[#35353579] ${
        open && "dark:bg-[#000] bg-opacity-100"
      } drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl`}
    >
      <div className="flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 md:flex items-center place-items-center md:justify-center py-3 md:px-10 px-8">
        <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
          <Link href={"/"} className="">
            {currentTheme === "dark" ? (
              <Image src={pranjal_header_white} alt="header" width="100" />
            ) : (
              <Image src={pranjal_header_black} alt="header" width="100" />
            )}
          </Link>
        </div>
        {currentTheme === "dark" ? (
          <button
            onClick={() => {
              setTheme("light");
            }}
            className="w-max md:order-8 fill-purple-600 "
          >
            <MdOutlineLightMode className="w-4 h-4 " />{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("dark");
            }}
            className="w-max md:order-8 fill-purple-600 "
          >
            <MdOutlineDarkMode className="w-4 h-4" />{" "}
          </button>
        )}

        <div
          onClick={() => setOpen(!open)}
          className="transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-semibold md:hidden"
        >
          <div
            className={` ${
              open && "rotate-45 translate-y-[5px] "
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
          <div
            className={` ${
              open && "opacity-0 translate-x-20"
            } relative rounded-xl origin-center transition-all duration-1000 ease-in-out w-4 h-[0.1rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black `}
          ></div>
          <div
            className={` ${
              open && "-rotate-45 -translate-y-[5px]"
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
        </div>
        <ul
          className={` rounded-3xl md:rounded-none  ${
            open ? "dark:bg-[#000]" : "dark:bg-[#35353500]"
          } bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:transition-none transition-all duration-500 ease-in ${
            open ? "top-[3.5rem]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-7">
              <Link
                href={link.link}
                onClick={() => clickHandler(`${link.name}`)}
                className={`${
                  router === link.link
                    ? " text-purple-400 font-out"
                    : " text-gray-700 dark:text-white font-out"
                } hover:text-purple-500 dark:hover:text-purple-500 duration-500`}
              >
                <span>
                  {link.name}
                  {link.name === "timeline" && (
                    <sup className="font-semibold text-[8px] border-sky-100 rounded bg-red-600 px-1 text-white">
                      1
                    </sup>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
