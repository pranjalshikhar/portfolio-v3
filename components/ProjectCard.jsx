import Image from "next/image";
import aizen from "../public/aizen.jpg";
import kamui from "../public/kamui.jpg";
import pokedex from "../public/pokedex.jpg";
import portfolio from "../public/portfolio.jpg";
import cryptohunter from "../public/crypto-hunter.jpg";
import redeye from "../public/red-eye.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Aizen",
      description: "Create beautiful images and gifs of your source code",
      link: "https://aizen.netlify.app/",
    },
    {
      id: 2,
      image: kamui,
      title: "Kamui",
      description: "Kanban board for planner with superpowers",
      link: "https://kamui-kanban.netlify.app/",
    },
    {
      id: 3,
      image: pokedex,
      title: "Pokedex",
      description: "Gotta Catch'em All. Explore your Pokemon",
      link: "https://pokedex-polly.netlify.app/",
    },
    {
      id: 4,
      image: portfolio,
      title: "Portfolio",
      description: "Portfolio made using NextJS and Tailwind CSS",
      link: "",
    },
    {
      id: 5,
      image: cryptohunter,
      title: "Crypto Hunter",
      description: "Get the Trending Crypto list with its Price",
      link: "https://crytocurrencyhunter.netlify.app/",
    },
    {
      id: 6,
      image: redeye,
      title: "Red Eye",
      description: "Question based website to know your movie genre",
      link: "https://red-eye.netlify.app/",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.title === "Portfolio" ? "" : "_blank"}
              onClick={() => {
                switch (project.title) {
                  case "Pokedex":
                    alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    );
                    break;
                  case "Portfolio":
                    alert("You are already on this site! 🤩");
                    break;
                }
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
