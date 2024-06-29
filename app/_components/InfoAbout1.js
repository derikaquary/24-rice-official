import Image from "next/image";
import aboutphoto1 from "@/public/aboutphoto1.jpg";

function InfoAbout1() {
  return (
    <>
      <div className="relative aspect-square h-[300px]">
        <Image
          src={aboutphoto1}
          fill
          alt="a team of farmer"
          placeholder="blur"
          quality={100}
          className="object-cover"
        />
      </div>
      <h3 className="text-4xl">Our Community</h3>
      <p className="px-5 text-lg">
        We are more than just a team; we are a family working together to bring
        you the best rice products available.
      </p>
    </>
  );
}

export default InfoAbout1;
