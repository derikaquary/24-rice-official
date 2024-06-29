import Image from "next/image";
import bgabout from "@/public/bg-about.jpg";
import InfoAbout1 from "../_components/InfoAbout1"
import BlackOverlay from "../_components/BlackOverlay";

function page() {
  return (
    <div className="relative z-[-10] h-screen">
      <Image
        src={bgabout}
        fill
        alt="rice field"
        placeholder="blur"
        quality={100}
        className="object-cover"
      />
      <BlackOverlay />
      <div className="absolute left-4 right-4 top-[14rem] flex flex-col items-center justify-center gap-4 text-justify text-white">
        <InfoAbout1/>
      </div>
    </div>
  );
}

export default page;

{
  /*black overlay */
}
/* 
<div className="absolute inset-0 mt-[146px] h-screen bg-black opacity-50 sm:mt-[120px] sm:hidden md:mt-[122px] lg:mt-[3rem]"></div> */
