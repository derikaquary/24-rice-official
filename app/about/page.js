import Image from "next/image";
import bgabout from "@/public/bg-about.jpg";

function page() {
  return (
    <div className="relative z-[-10] h-screen">
      <Image
        src={bgabout}
        fill
        alt="rice field"
        placeholder="blur"
        quality={100}
        className="mt-[146px] object-cover object-top sm:mt-[120px] md:mt-[122px] lg:mt-[3rem]"
      />
      {/*black overlay */}
      <div className="absolute inset-0 mt-[146px] h-screen bg-black opacity-50 sm:mt-[120px] sm:hidden md:mt-[122px] lg:mt-[3rem]"></div>
    </div>
  );
}

export default page;
