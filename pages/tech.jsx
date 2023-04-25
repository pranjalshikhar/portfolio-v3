/* eslint-disable react-hooks/rules-of-hooks */
import TechCard from "@/components/TechCard";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const tech = () => {
  const data = [
    {
      title: "VS Code",
      id: 0,
      main: "/icons/vscode-original.svg",
      desc: "Best coding IDE to ever exist, comes with tons of customization",
      tag: "code",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "JavaScript",
      id: 1,
      main: "/icons/javascript-original.svg",
      desc: "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
      tag: "code",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "TypeScript",
      id: 2,
      main: "/icons/typescript-plain.svg",
      desc: "SuperScript of Javascript, made by microsoft with robust type safety.",
      tag: "code",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "React JS",
      id: 3,
      main: "/icons/react-original.svg",
      desc: "A free and open-source front-end JavaScript library for building user interfaces based on components",
      tag: "develop",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Next JS",
      id: 4,
      main: "/icons/nextjs-original.svg",
      desc: "An open-source web development framework providing React-based web applications.",
      tag: "develop",
      bg: "bg-gray-900",
      text: "text-gray-50",
    },
    {
      title: "Tailwind CSS",
      id: 5,
      main: "/icons/tailwindcss-plain.svg",
      desc: "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      tag: "design",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "Material UI",
      id: 6,
      main: "/icons/materialui-original.svg",
      desc: "A comprehensive suite of UI tools to help you ship new features faster.",
      tag: "develop",
      bg: "bg-indigo-50",
      text: "text-indigo-500",
    },
    {
      title: "SASS",
      id: 7,
      main: "/icons/sass-original.svg",
      desc: "CSS with superpowers. The most powerful professional grade CSS extension language in the world.",
      tag: "design",
      bg: "bg-pink-300",
      text: "text-pink-800",
    },
    {
      title: "Notion",
      id: 8,
      main: "/notion-icon.svg",
      desc: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
      tag: "productivity",
      bg: "bg-gray-900",
      text: "text-gray-100",
    },
    {
      title: "Figma",
      id: 9,
      main: "/icons/figma-original.svg",
      desc: "A boon for webapp designers, from wireframe to animation, it has it all.",
      tag: "design",
      bg: "bg-orange-500",
      text: "text-orange-100",
    },
    {
      title: "GitHub",
      id: 10,
      main: "/icons/github-original.svg",
      desc: "A developer's go-to platform for collaborating and showcasing their code.",
      tag: "platform",
      bg: "bg-gray-900",
      text: "text-gray-100",
    },
    {
      title: "Brave",
      id: 11,
      main: "/brave-icon.svg",
      desc: "A privacy focused browser used to block ads and extra pops.",
      tag: "platform",
      bg: "bg-orange-500",
      text: "text-orange-100",
    },
  ];
  const [idNumber, setIdNumber] = useState(0);
  const changeId = (id) => {
    setIdNumber(id);
  };
  const rightArrow = () => {
    if (idNumber + 1 >= data.length) {
      setIdNumber(0);
    } else {
      setIdNumber(idNumber + 1);
    }
  };
  const leftArrow = () => {
    if (idNumber === 0) {
      setIdNumber(data.length - 1);
    } else {
      setIdNumber(idNumber - 1);
    }
  };

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Tech Stack I loved to work on. 🍾\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <Head>
        <title>tech ✦ pranjal</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="max-w-screen max-w-5xl mx-auto">
        <div className="pt-24 flex flex-col mx-auto">
          <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-200 from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
            Tech Stack
          </h2>
          <p className="mt-8 font-normal lg:text-lg text-center md:w-[70%] mx-auto text-base md:text-[1.15rem] ">
            Just like any other dev, I also spend more time searching and
            experimenting tools than actually coding some senseful things 😎
          </p>
        </div>
        <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
          <button
            className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
          </button>
          <div className="bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6  rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear ">
            <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl ">
              <div className="flex mx-auto rounded-2xl relative w-full h-full bg-white">
                <Image
                  src={data[idNumber].main}
                  alt="tech"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl "
                />
              </div>
            </div>
            <div className=" basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500 ">
              <div className="flex mb-1 justify-between items-center ">
                <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold font-deca tracking-wide ">
                  {data[idNumber].title}
                </h3>
                <div
                  className={` ${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold`}
                >
                  {data[idNumber].tag}
                </div>
              </div>
              <p className=" text-[0.58rem] sm:text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%] ">
                {data[idNumber].desc}
              </p>
            </div>
          </div>
          <button
            className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
          </button>
        </div>
        <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
          {data.map((obj, i) => {
            return (
              <TechCard
                id={obj.id}
                alt={obj.title}
                main={obj.main}
                key={i}
                changeId={changeId}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default tech;
