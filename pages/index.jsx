import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import Avatar_Black from "../public/Avatar-black.svg";
import Avatar_White from "../public/Avatar-white.svg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            {currentTheme === "dark" ? (
              <Image
                src={Avatar_White}
                alt="pranjal"
                width="100"
                height="100"
              />
            ) : (
              <Image
                src={Avatar_Black}
                alt="pranjal"
                width="100"
                height="100"
              />
            )}
            <div className="flex flex-col ml-4">
              <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
                pranjal shikhar
              </h2>
              <h4 className="text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                (～￣▽￣)～
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              A front-end engineer based in{" "}
              <span className="font-medium select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] ">
                INDIA
              </span>{" "}
              who develops modern, reactive, and user-friendly web applications
              using the latest technologies currently. I believe a perfect blend
              of UI architecture is one, where the goals and needs are accounted
              for in an elegant, efficient, and robust design of the UI.
            </p>
          </div>
          {/* <div className="md:flex relative ms-auto justify-center items-center w-12 hidden md:my-16 lg:mt-0">
            <div
              onClick={() => {
                window.scrollTo(0, 520);
              }}
            >
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span className="arrow-down"></span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
