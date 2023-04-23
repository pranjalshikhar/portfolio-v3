import Image from "next/image";
import { useState } from "react";

const TechCard = (props) => {
  return (
    <div
      className="tech group relative dark:bg-white/25 lg:bg-none lg:dark:hover:bg-slate-50/50  h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 tech rounded-md sm:rounded-lg md:rounded-xl "
      onClick={() => {
        props.changeId(props.id);
        window.scrollTo(0, 0);
      }}
    >
      <div className="h-full w-full p-2 md:p-3 lg:p-4 relative">
        <Image
          src={props.main}
          fill
          className=" select-none group-hover:scale-[1.1] transition-all duration-700 object-contain p-2 md:p-3 rounded-lg md:rounded-xl lg:rounded-2xl"
          alt={props.alt}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>
    </div>
  );
};

export default TechCard;
