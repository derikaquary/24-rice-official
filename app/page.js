import React from "react";
import background from "@/public/background.jpg";
import Image from "next/image";
import Link from "next/link";
import BlackOverlay from "./_components/BlackOverlay";

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
      <BlackOverlay
        xsm={"7rem"}
        sm={"0rem"}
        md={"1rem"}
        lg={"3rem"}
        hidden={"hidden"}
      />

      <div className="absolute left-0 right-0 top-[20rem] flex flex-col items-center justify-center gap-4 text-center text-white sm:hidden">
        <p className="text-4xl">
          Pure Grain, Pure Quality. Nourishing Every Grain of Life
        </p>
        <p className="text-xl">
          Our commitment to quality ensures that every grain is meticulously
          selected and processed to bring you the best in taste and nutrition.
        </p>
      </div>

      <div className="sm absolute left-0 right-0 top-[40rem] flex items-center justify-center sm:top-[30rem]">
        <Link
          href="/shop"
          className="back rounded-md border border-white bg-yellow-300 px-4 py-5 text-2xl font-bold text-gray-800 backdrop-blur-sm sm:bg-yellow-300/30 sm:text-3xl sm:font-medium"
        >
          Explore our Store
        </Link>
      </div>
    </div>
  );
}

export default Page;
