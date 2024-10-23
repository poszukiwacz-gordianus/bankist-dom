"use client";

import Link from "next/link";
import { headerContent } from "../_content/content";
import { useNavigationContext } from "../_contexts/NavigationContext";
import useCloseOnOutsideInteraction from "../_hooks/useCloseOnOutsideInteraction";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export default function Navigation() {
  const { isOpen, setIsOpen, opacity, opacityEl } = useNavigationContext();

  const ref = useCloseOnOutsideInteraction(
    () => setIsOpen(false),
    [{ event: "scroll", listenCapturing: false }],
  );

  const { navigation } = headerContent;

  return (
    <>
      <nav
        ref={ref}
        className={`${isOpen ? "pointer-events-auto visible translate-x-0 bg-stone-50 bg-opacity-[99%]" : "invisible translate-x-full opacity-0"} absolute left-0 top-0 flex h-screen w-full items-center justify-center transition-all duration-500 ease-in-out md:visible md:static md:h-auto md:w-auto md:translate-x-0 md:items-start md:justify-start md:opacity-100`}
      >
        <ul className="flex flex-col items-center gap-8 text-stone-800 md:flex-row lg:gap-14">
          {navigation.map((nav, i) => (
            <li
              key={nav.link}
              className={`${opacity && opacityEl !== nav.link ? "opacity-50" : "opacity-100"} transition-all duration-500`}
            >
              <Link
                href={nav.link}
                className={`text-2xl transition-all duration-300 md:inline-block md:text-xl ${i + 1 === navigation.length ? "bg-primary-500 hover:bg-primary-600 rounded-full px-4 py-2" : ""}`}
                onClick={() => setIsOpen(false)}
                aria-label={`Go to ${nav.text}`}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="z-0 block text-4xl md:hidden"
        onClick={() => setIsOpen((b) => !b)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
    </>
  );
}
