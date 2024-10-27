import Image from "next/image";
import Link from "next/link";
import { heroContent } from "../_content/content";

export default function Hero() {
  const { id, header, description, link, image, alt } = heroContent;

  return (
    <section
      id={id}
      className="mx-auto mt-14 flex max-w-screen-lg flex-col gap-6 px-4 py-14 md:mt-20 md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-2 md:px-10 md:py-20 lg:py-24"
    >
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:py-6 md:text-left lg:gap-8 lg:py-4">
        <h1 className="text-4xl font-medium leading-[3rem] sm:text-5xl sm:leading-[4.2rem] md:tracking-tighter lg:text-6xl lg:leading-[5.2rem]">
          {header}
        </h1>
        <p className="px-6 text-xl md:px-0 md:text-2xl">{description}</p>
        <Link
          href={link.link}
          className="solid mt-auto border-b-[1px] border-primary-800 text-base text-primary-800 transition-all duration-300 hover:border-primary-700 hover:text-primary-700 sm:text-lg md:text-xl"
          aria-label={`Go to ${link.text}`}
        >
          {link.text}
        </Link>
      </div>

      <Image
        src={image}
        alt={alt}
        sizes="(max-width: 544px) 60vw, (max-width: 880px) 70vw, (max-width: 1100px) 33vw"
        className="mx-auto w-60 self-center sm:w-80 lg:w-full"
        priority
      />
    </section>
  );
}
