"use client";

import Link from "next/link";
import { Logo, Navigation } from "@/app/_components/Components";
import { headerContent } from "../_content/content";
import { useNavigationContext } from "../_contexts/NavigationContext";

export default function Header() {
  const { opacity, opacityEl, changeOpacity, ref } = useNavigationContext();

  const {
    image: {
      link: { link, text },
    },
  } = headerContent;

  return (
    <header
      ref={ref}
      className="fixed bottom-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-[#ffffffed] px-4 py-0 shadow-sm md:h-20 lg:px-6"
      onMouseOver={(e) => changeOpacity(e.target.closest("a")?.href)}
    >
      <Link
        href={link}
        aria-label={`Go to ${text}`}
        className={`${opacity && opacityEl !== link ? "opacity-50" : "opacity-100"} transition-all duration-300`}
        onClick={(e) => e.currentTarget.blur()}
      >
        <Logo />
      </Link>
      <Navigation />
    </header>
  );
}
