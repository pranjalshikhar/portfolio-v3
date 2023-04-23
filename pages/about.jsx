import Head from "next/head";
import Image from "next/image";
// import CategoryCard from "../components/About-cat";
import aboutImage from "../public/image.jpg";
import { useTheme } from "next-themes";
import CategoryCard from "@/components/CategoryCard";
import love_black from "../public/love-black.svg";
import love_white from "../public/love-white.svg";

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
      <Head>
        <title> About Me </title>
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-purple-50/10 shadow-purple-200 ">
              <Image
                src={aboutImage}
                placeholder="blur"
                height={600}
                width={600}
                className="rounded-2xl select-none drop-shadow-md shadow-purple-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                alt="pranjal shikhar"
                priority
              />
            </div>
            <div className="text-center mx-auto mt-8 z-20">
              <h3 className="mx-auto  font-bold text-lg lg:text-xl xl:text-2xl">
                Pranjal Shikhar Sinha 🍜
              </h3>
              <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
                Developer 🧑🏽‍💻 // Designer 🖌️// Weeb ⛩️
              </p>
            </div>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-normal dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12">
              A Front-end Engineer who develops modern, reactive, and
              user-friendly web applications using the latest technologies. 🚀 I
              Believe a perfect blend of UI architecture is one, where the goals
              and needs are accounted for in an elegant, efficient, and robust
              design of the UI. ✨ experience in ReactJS, React Native, NextJS,
              and state management like Redux with proficiency in web
              technologies like HTML5, CSS3, and JavaScript, building
              large-scale web applications, cross-browser platforms, and design
              constraints on the web, and building responsive user interfaces.
              ⚡
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              Contact
            </p>

            <p className="">
              While I may not be a widely recognized figure, i am readily
              available for connection on my social media platforms. <br />
              You can contact me on the{" "}
              <span className="text-red-700 font-bold">GMail</span>{" "}
              <span
                onClick={() =>
                  navigator.clipboard.writeText("shikhar.pranjal3@gmail.com")
                }
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                href="mailto:shikhar.pranjal3@gmail.com"
              >
                {" "}
                shikhar.pranjal3@gmail.com
              </span>{" "}
              or <span className="text-blue-700 font-bold">LinkedIn</span>{" "}
              <a
                href="http://linkedin.com/in/pranjalshikhar"
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Pranjal Shikhar Sinha{" "}
              </a>{" "}
              or you can DM me on{" "}
              <span className="text-orange-500 font-bold">Instagram</span>{" "}
              <a
                href="https://instagram.com/pranjal.fig"
                target="blank"
                rel="noopener noreferrer"
                className=" font-semibold underline underline-offset-4 decoration-2 decoration-purple-400 dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
              >
                {" "}
                @pranjal.fig{" "}
              </a>{" "}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              dattebayo
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="-mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="-mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
