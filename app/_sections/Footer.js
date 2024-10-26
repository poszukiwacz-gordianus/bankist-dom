import { FooterLinks } from "@/app/_components/Components";
import { footerContent } from "../_content/content";
import Image from "next/image";

export default function Footer() {
  const { navigation, icon, alt } = footerContent;
  return (
    <footer className="border-t border-zinc-600">
      <div className="bg-zinc-700 px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6 text-center text-stone-50 sm:gap-8 md:w-[65%] md:gap-10 lg:gap-12">
          <FooterLinks links={navigation} />
          <Image
            src={icon}
            alt={alt}
            sizes="15vw"
            placeholder="blur"
            className="h-12 w-12"
          />
          <p className="text-xs text-zinc-400 md:text-sm">
            © Inspired by the work of{" "}
            <a
              href="https://x.com/jonasschmedtman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-200"
              aria-label="External link to Jonas Schmedtmann X account"
            >
              Jonas Schmedtmann
            </a>
            . This project was developed independently for learning and
            portfolio purposes. Please do not use it for teaching or claim it as
            your own product.
          </p>
        </div>
      </div>
    </footer>
  );
}
