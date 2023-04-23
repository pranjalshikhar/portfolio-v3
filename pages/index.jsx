import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import main from "../public/Avatar.svg";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[90rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            <Image src={main} alt="pranjal" width="100" height="100" />
            <div className="flex flex-col ml-4">
              <h2 className="text-3xl font-bold md:text-xl">pranjal shikhar</h2>
              <h4 className="text-gray-400 font-semibold">developer</h4>
            </div>
          </div>
          <div className="mt-12 leading-8 text-2xl font-out">
            <p className="font-normal">
              A design wizard voyaging into the metaverse. I tell the story
              through my design and illustrations. I spent most of my time
              designing for brands and making design resources and tools.
            </p>
          </div>
          {/* <div className="flex flex-col justify-center lg:flex-row md:pt-12 lg:space-x-20 items-center lg:justify-between">
            <div className="flex flex-col md:mt-12 lg:basis-[50%] space-y-12">
              <div className="flex mt-20 -mb-3 -space-x-0 items-end justify-center lg:justify-start">
                <h2 className="font-space animate-text bg-gradient-to-r selection:text-gray-500 dark:selection:text-white/80 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl font-black">
                  moshi moshi{" "}
                </h2>
                <p className="wave text-2xl select-none sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl origin-bottom-right ">
                  👋
                </p>
              </div>
              <p className="mt-12 text-base md:text-[1.1rem] lg:text-lg tracking-wide max-w-lg font-bold">
                front-end developer based in{" "}
                <span className="font-semibold select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded-full px-2 py-[0.05rem] ">
                  INDIA
                </span>{" "}
                who develops modern, reactive, and user-friendly web
                applications using the latest technologies. believe a perfect
                blend of ui architecture is one, where the goals and needs are
                accounted for in an elegant, efficient, and robust design of the
                ui
              </p>
            </div>
            <Image
              priority
              src={main}
              width="600"
              height="600"
              alt="pranjal shikhar"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-60 h-60 mt-12 md:mt-20 select-none lg:mt-0 animate-heroBlob border-[1px] md:w-80 md:h-80 lg:w-[20rem] lg:h-[20rem] xl:w-[21rem] xl:h-[21rem]"
            />
          </div> */}
          <div className="md:flex relative ms-auto justify-center items-center w-12 hidden md:my-16 lg:mt-0">
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
          </div>
        </div>
        Experience
        <div className="mt-28 mx-auto">Contact</div>
      </div>
    </>
  );
}
