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
    </div>
  );
}

export default page;
