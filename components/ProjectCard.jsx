import Image from "next/image";
import aizen from "../public/aizen.svg";
import kamui from "../public/kamui.svg";
import pokedex from "../public/pokedex.svg";
import portfolio from "../public/portfolio.svg";
import cryptohunter from "../public/crypto-hunter.svg";
import redeye from "../public/red-eye.svg";
import Link from "next/link";

const ProjectCard = () => {
  if (typeof window === "object") {
    //This code is executed in the browser
    console.log(window.innerWidth);
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg w-fit mb-12 flex flex-col items-center">
        <Link href="http://aizen.netlify.app/" target="'_blank">
          <Image
            priority
            src={aizen}
            alt="aizen"
            width="200"
            className="rounded-md drop-shadow-2xl"
          />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
            Aizen
          </h1>
          <p className="max-w-[90%] text-gray-400 font-light text-center">
            Create beautiful images and gifs of your source code
          </p>
        </div>
      </div>
      <div className="rounded-lg w-fit mb-12 flex flex-col items-center">
        <Link href="https://kamui-kanban.netlify.app/" target="_blank">
          <Image
            priority
            src={kamui}
            alt="aizen"
            width="200"
            className="rounded-md drop-shadow-2xl"
          />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
            Kamui
          </h1>
          <p className="max-w-[90%] text-gray-400 font-light text-center">
            Kanban board for planner with superpowers
          </p>
        </div>
      </div>
      <div className="rounded-lg w-fit mb-12 flex flex-col items-center">
        <Link href="http://pokedex-polly.netlify.app/" target="_blank">
          <Image
            priority
            src={pokedex}
            alt="aizen"
            width="200"
            className="rounded-md drop-shadow-2xl"
          />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
            Pokedex
          </h1>
          <p className="max-w-[90%] text-gray-400 font-light text-center">
            Gotta Catch&#39;em All. Explore your Pokemon
          </p>
        </div>
      </div>
      <div className="rounded-lg w-fit mb-12 flex flex-col items-center">
        <Link
          href=""
          onClick={() => {
            alert("You are already on this site 🤩");
          }}
        >
          <Image
            priority
            src={portfolio}
            alt="aizen"
            width="200"
            className="rounded-md drop-shadow-2xl"
          />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
            Portfolio
          </h1>
          <p className="max-w-[90%] text-gray-400 font-light text-center">
            Portfolio made using NextJS and Tailwind CSS
          </p>
        </div>
      </div>
      <div className="rounded-lg w-fit mb-12 flex flex-col items-center">
        <Link href="http://crytocurrencyhunter.netlify.app/" target="_blank">
          <Image
            priority
            src={cryptohunter}
            alt="aizen"
            width="200"
            className="rounded-md drop-shadow-2xl"
          />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
            Crypto Hunter
          </h1>
          <p className="max-w-[90%] text-gray-400 font-light text-center">
            Get the Trending Crypto list with its Price
          </p>
        </div>
      </div>
      <div className="rounded-lg w-fit mb-12 flex flex-col items-center">
        <Link href="https://red-eye.netlify.app/" target="_blank">
          <Image
            priority
            src={redeye}
            alt="aizen"
            width="200"
            className="rounded-md drop-shadow-2xl"
          />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
            Red Eye
          </h1>
          <p className="max-w-[90%] text-gray-400 font-light text-center">
            Question based website to know your movie genre
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
