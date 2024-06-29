import Image from "next/image";

function InfoAbout({ src, alt, children }) {
  return (
    <>
      <div className="aspect-square h-[300px]">
        <Image
          src={src}
          fill
          alt={alt}
          placeholder="blur"
          quality={100}
          className="object-cover"
        />
      </div>
      {children}
    </>
  );
}

export default InfoAbout;
