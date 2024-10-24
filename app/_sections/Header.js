"use client";

import Link from "next/link";
import { Logo, Navigation } from "@/app/_components/Components";
import { headerContent } from "../_content/content";
import { useNavigationContext } from "../_contexts/NavigationContext";

export default function Header() {
  const { sticky, opacity, setOpacity, opacityEl, setOpacityEl } =
    useNavigationContext();

  const {
    image: {
      link: { link, text },
    },
  } = headerContent;

  function changeOpacity(e) {
    const target = e.target.closest("a")?.href;

    if (!target) {
      setOpacity(false);
      setOpacityEl("");
    } else {
      setOpacityEl(target?.split("/").at(-1));
      setOpacity(true);
    }
  }

  return (
    <header
      className={`${sticky ? "fixed bottom-0 top-0 z-50 h-12 w-full bg-white py-10 opacity-95 shadow-sm md:h-16" : "relative h-20 sm:h-24"} flex items-center justify-between px-4 py-6 lg:px-6`}
      onMouseOver={changeOpacity}
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
