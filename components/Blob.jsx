const Blob = () => {
  return (
    <div className="relative">
      <div className="absolute right-20 -z-10 h-screen w-full">
        <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob1 absolute top-[23rem] right-24 md:top-[20rem] md:right-52 lg:top-10 lg:-right-10 w-[7rem] h-[8.5rem] md:w-40 md:h-[12rem] lg:w-60 lg:h-[17rem] rounded-full bg-[#ffbe0b] mix-blend-multiply filter blur-[30px] dark:blur-[20px] dark:outline-none dark:opacity-30  opacity-60 "></div>
        <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob2 absolute top-[24rem] -right-24 md:top-[22rem] md:-right-0 lg:top-20 lg:-right-36 w-[8.8rem] h-[10.4rem] md:w-[11rem] md:h-[13.4rem] lg:w-[14rem] lg:h-[17rem] rounded-full bg-[#fb5607] mix-blend-overlay filter blur-[30px] dark:blur-[20px] dark:outline-none dark:opacity-30  opacity-60 "></div>
        <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob3 absolute top-[34rem] -right-4 md:top-[32rem] md:right-32 lg:top-48 lg:-right-12 w-[5rem] h-[6rem] md:w-[7rem] md:h-[8.3rem] lg:w-[12rem] lg:h-[14rem] rounded-full bg-[#ff006e] mix-blend-multiply filter blur-[30px] dark:blur-[20px] dark:outline-none dark:opacity-30  opacity-60 "></div>
      </div>
    </div>
  );
};

export default Blob;
