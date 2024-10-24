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
      className={`${sticky ? "fixed bottom-0 top-0 z-50 h-16 w-full bg-white py-10 opacity-95 shadow-sm" : "relative"} flex items-center justify-between px-4 py-6 transition-all duration-500 lg:px-6`}
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
