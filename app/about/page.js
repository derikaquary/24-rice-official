import Image from "next/image";
import bgabout from "@/public/bg-about.jpg";
import InfoAbout from "../_components/InfoAbout";
import aboutphoto1 from "@/public/aboutphoto1.jpg";
import aboutphoto2 from "@/public/aboutphoto2.jpg";

function page() {
  return (
    <div>
      <Image
        src={bgabout}
        fill
        alt="rice field"
        placeholder="blur"
        quality={100}
        className="h-[1000px] object-fill"
      />

      <div className="absolute left-4 right-4 top-[14rem] z-10 flex flex-col items-center justify-center gap-4 text-justify text-white">
        <InfoAbout src={aboutphoto1} alt={""}>
          <h3 className="text-4xl">Our Community</h3>
          <p className="px-5 text-lg">
            We are more than just a team; we are a family working together to
            bring you the best rice products available.
          </p>
        </InfoAbout>
      </div>
    </div>
  );
}

export default page;

/* <InfoAbout src={aboutphoto2} alt={"Rice picture"}>
          <h3 className="text-4xl">Our Product Quality</h3>
          <p className="px-5 text-lg">
            At Rice Official, quality is our top priority. We are committed to
            bringing you the finest rice products available.
          </p>
        </InfoAbout> */
