import React from "react";
import background from "@/public/background.jpg";
import Image from "next/image";

function Page() {
  return (
    <div className="relative z-[-10] h-screen bg-gray-800">
      <Image
        src={background}
        fill
        placeholder="blur"
        alt="a women walking in the midle of rice field"
        className="mt-[7rem] object-cover object-top sm:mt-[0rem] md:mt-[1rem] lg:mt-[3rem]"
      />
      {/*black overlay */}
      <div className="absolute inset-0 mt-[7rem] h-screen bg-black opacity-50 sm:mt-[0rem] sm:hidden md:mt-[1rem] lg:mt-[3rem]"></div>

      <div className="absolute left-0 right-0 top-[20rem] flex flex-col items-center justify-center gap-4 text-center text-white sm:hidden">
        <p className="text-4xl">
          Pure Grain, Pure Quality. Nourishing Every Grain of Life
        </p>
        <p className="text-xl">
          Our commitment to quality ensures that every grain is meticulously
          selected and processed to bring you the best in taste and nutrition.
        </p>
      </div>
    </div>
  );
}

export default Page;
