import Image from "next/image";
import { headerContent } from "../_content/content";

export default function Logo() {
  const {
    image: { logo, alt },
  } = headerContent;

  return (
    <Image
      src={logo}
      width={350}
      height={106}
      alt={alt}
      className="h-12 w-40"
      sizes="100vw"
      quality={100}
    />
  );
}
