import Image from "next/image";
import { headerContent } from "../../_content/content";

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
      className="h-8 w-28 md:h-12 md:w-40"
      sizes=" (max-width: 544px) 50vw,( max-width: 880px) 30vw, 50vw "
    />
  );
}
