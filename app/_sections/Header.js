"use client";

import Link from "next/link";
import { Logo, Navigation } from "@/app/_components/Components";
import { headerContent } from "../_content/content";
import { useNavigationContext } from "../_contexts/NavigationContext";

export default function Header() {
  const { sticky, opacity, opacityEl, changeOpacity } = useNavigationContext();

  const {
    image: {
      link: { link, text },
    },
  } = headerContent;

  return (
    <header
      className={`${sticky ? "fixed bottom-0 top-0 z-50 h-14 w-full bg-white py-0 opacity-95 shadow-sm md:h-20" : "relative h-14 md:h-20"} flex items-center justify-between px-4 transition-all duration-500 lg:px-6`}
      onMouseOver={(e) => changeOpacity(e.target.closest("a")?.href)}
    >
      <Link
        href={link}
        aria-label={`Go to ${text}`}
        className={`${opacity && opacityEl !== link ? "opacity-50" : "opacity-100"} transition-all duration-300`}
      >
        <Logo />
      </Link>
      <Navigation />
    </header>
  );
}
